const RadioButton = (buttonName, group) => {
  return (
    <label htmlFor={buttonName}>
      <input type="radio" name={group} id={'radio' + buttonName} />
      {buttonName}
    </label>
  );
};
export default RadioButton;
