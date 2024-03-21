import SearchButton from '../SearchButton/SearchButton';
import { PropTypes } from 'prop-types';

const SearchBar = props => {
  return (
    <div className="theForm">
      <input type="text" name="input" id="dataEntry" />
      <SearchButton handleClick={props.clicker} />
    </div>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  clicker: PropTypes.func,
};
