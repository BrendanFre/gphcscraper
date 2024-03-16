import './style.css';
import SearchBar from './SearchBar/SearchBar';
import RadioButton from './radioButtons/RadioButton';

// TODO: Fix radio buttons

const SearchForm = () => {
  const handleClick = () => {
    const gmc = document.querySelector('#radioDoctor Search GMC');
    if (typeof gmc != 'undefined') {
      console.log(true);
    }
    console.log(false);
  };
  return (
    <form className="panel">
      <div className="radioButtons">
        <RadioButton buttonName={'Doctor Search GMC'} group="searchType" />
        <RadioButton buttonName={'GPHC Pharmacy Search'} group="searchType" />
        <RadioButton buttonName={'GP England'} group="searchType" />
        <RadioButton buttonName={'GP Wales'} group="searchType" />
        <RadioButton buttonName={'GP Scotland'} group="searchType" />
      </div>
      <SearchBar clicker={handleClick} />
    </form>
  );
};
export default SearchForm;
