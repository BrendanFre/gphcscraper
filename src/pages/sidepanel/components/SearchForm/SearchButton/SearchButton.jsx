import { PropTypes } from 'prop-types';

const SearchButton = props => {
  // const updateButton = () => {
  //   const button = document.querySelector('.submitButton')
  //   const searchBar  = document.querySelector('#dataEntry')
  //   console.log(`This is a button: ${searchBar}`)
  //   if(button.classList.contains('.submitButtonUpdate')){
  //     button.classList.remove('.submitButtonUpdate')
  //   } else {
  //     button.classList.add('.submitButtonUpdate')
  //   }
  // }


  return (
    <button type="button" id="submitButton" className="submitButton" onClick={props.handleClick}>
      Submit
    </button>
  );
};
export default SearchButton;

SearchButton.propTypes = {
  handleClick: PropTypes.func,
};
