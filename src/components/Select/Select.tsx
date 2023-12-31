'use client';

import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ArrowSquareUpIcon } from '@/icons/ArrowSquareUpIcon';

import styles from './Select.module.scss';

export type SelectOptions = {
  caption: string;
  value: string;
};

type OptionsListProps = {
  options: SelectProps['options'];
  selectedValue: SelectOptions['value'] | null;
  onSelect: (value: SelectOptions['value']) => void;
};

const OptionsList: FC<OptionsListProps> = (props) => {
  const { options, selectedValue, onSelect } = props;

  return (
    <ul className={styles.optionsList}>
      {options.map((option) => (
        <li
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={clsx(
            styles.optionsListItem,
            selectedValue === option.value && styles.isSelected
          )}
        >
          {option.caption}
        </li>
      ))}
    </ul>
  );
};

type SelectProps = {
  options: SelectOptions[];
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (newValue?: string) => void;
};

export const Select: FC<SelectProps> = (props) => {
  const { options, label, placeholder, value, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<SelectOptions['value'] | null>(value ?? null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        event.target !== inputRef.current &&
        !dropdownMenuRef.current?.contains(event.target as Element)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [inputRef, dropdownMenuRef]);

  return (
    <label className={styles.root}>
      <span className={styles.label}>{label}</span>
      <input
        type="text"
        className={clsx(styles.input, isOpen && styles.isOpen)}
        value={
          selectedValue ? options.find((option) => option.value === selectedValue)?.caption : ''
        }
        readOnly
        ref={inputRef}
        placeholder={placeholder}
        onClick={() => {
          setIsOpen((prevState) => {
            return !prevState;
          });
        }}
      />
      <ArrowSquareUpIcon className={clsx(styles.icon, isOpen && styles.isOpen)} />
      {isOpen &&
        createPortal(
          <div
            ref={dropdownMenuRef}
            className={styles.dropdownMenu}
            style={{
              width: Number(inputRef.current?.getBoundingClientRect().width),
              top:
                Number(inputRef.current?.getBoundingClientRect().y) +
                Number(styles.inputHeight) +
                4,
              left: Number(inputRef.current?.getBoundingClientRect().x),
            }}
          >
            <OptionsList
              options={options}
              onSelect={(newValue) => {
                if (newValue === value) {
                  setSelectedValue(null);
                  onChange?.(undefined);
                } else {
                  setSelectedValue(newValue);
                  onChange?.(newValue);
                }
                setIsOpen(false);
              }}
              selectedValue={selectedValue}
            />
          </div>,
          document.getElementById('dropdowns-portal-wrapper')!
        )}
    </label>
  );
};
