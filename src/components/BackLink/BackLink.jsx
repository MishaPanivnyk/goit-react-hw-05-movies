import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
export default BackLink;
BackLink.propTypes = {
  to: PropTypes.object,
  children: PropTypes.string,
};
