import PropTypes from 'prop-types';
import './Footer.css';
import icon from 'ion-icon-library';
const Footer = props => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  icon();

  return (
    <footer className="footerContainer">
      {props.name} - 2023-{currentYear}
      <i className="ionGh"></i>
      <i className="ionJs"></i>
    </footer>
  );
};
Footer.propTypes = {
  name: PropTypes.string,
};
export default Footer;
