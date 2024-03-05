import PropTypes from 'prop-types';
import './Footer.css';
const Footer = props => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footerContainer">
      {props.name} - 2023-{currentYear}
    </footer>
  );
};
Footer.propTypes = {
  name: PropTypes.string,
};
export default Footer;
