import PropTypes from 'prop-types';
const RadioButton = props => {
  return (
    <label htmlFor={props.buttonName}>
      <input type="radio" name={props.group} id={'radio' + props.buttonName} className="roboto-flex" />
      {props.buttonName}
    </label>
  );
};
RadioButton.propTypes = {
  buttonName: PropTypes.string,
  group: PropTypes.string,
};
export default RadioButton;
