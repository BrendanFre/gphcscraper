import './style.css';
import SearchBar from './SearchBar/SearchBar';
import SearchButton from './SearchButton/SearchButton';
import RadioButton from './radioButtons/RadioButton';

export default () => {
    return (
        <form className= 'panel'>
        <div className="radioButtons">
        <RadioButton buttonName={'Doctor Search GMC'} group='searchType' />
        <RadioButton buttonName={'GPHC Pharmacy Search'} group='searchType' />
        <RadioButton buttonName={'GP England'} group='searchType' />
        <RadioButton buttonName={'GP Wales'} group='searchType' />
        <RadioButton buttonName={'GP Scotland'} group='searchType' />
        </div>
        <SearchBar />

        </form>
    )
}