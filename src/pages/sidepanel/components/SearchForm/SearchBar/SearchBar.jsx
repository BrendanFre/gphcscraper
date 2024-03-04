import SearchButton from '../SearchButton/SearchButton';

const SearchBar = () => {
  return (
    <div className="theForm">
      <input type="text" name="input" id="dataEntry" />
      <SearchButton />
    </div>
  );
};
export default SearchBar;
