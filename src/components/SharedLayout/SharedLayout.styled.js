import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Header,
  Logo,
  Link,
  IconMovie,
} from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <IconMovie />
        <Logo></Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
