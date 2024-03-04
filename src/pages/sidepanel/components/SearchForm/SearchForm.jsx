import './style.css';
import SearchBar from './SearchBar/SearchBar';
import SearchButton from './SearchButton/SearchButton';

export default () => {
    return (
        <form className = 'theForm'>
        <SearchBar />
        <SearchButton />
        </form>
    )
}