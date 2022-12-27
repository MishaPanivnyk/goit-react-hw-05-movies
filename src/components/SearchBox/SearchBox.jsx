import PropTypes from 'prop-types';
import { Wrapper, Input, Icon, Button } from './SearchBox.styled';

export const SearchBox = ({ value, onChange, onClick }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Enter movie name"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      <Button type="button" onClick={onClick}>
        <Icon />
      </Button>
    </Wrapper>
  );
};
SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
