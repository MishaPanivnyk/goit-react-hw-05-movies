import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: square;
`;

export const CardWrapper = styled.li`
  color: black;
`;
export const MovieLink = styled(Link)`
  color: darkblue;
`;
export const MovieName = styled.h3`
  padding: 5px;
  margin-top: 0px;
  margin-bottom: 0;
`;
