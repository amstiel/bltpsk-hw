import { FC } from 'react';

import { Container } from '@/components/Container/Container';
import { DialogModal } from '@/components/DialogModal/DialogModal';
import { MoviesList } from '@/components/MoviesList/MoviesList';

const CartPage: FC = () => {
  return (
    <main>
      <Container>
        <MoviesList mode="cart" />
      </Container>
    </main>
  );
};

export default CartPage;
