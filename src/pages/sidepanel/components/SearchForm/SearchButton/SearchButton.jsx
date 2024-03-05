import { PropTypes } from 'prop-types';

const SearchButton = props => {
  return (
    <button type="button" className="submitButton" onClick={props.handleClick}>
      Submit
    </button>
  );
};
export default SearchButton;

SearchButton.propTypes = {
  handleClick: PropTypes.func,
};
