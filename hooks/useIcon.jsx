import React from 'react';
import success from '../images/success.png';
import error from '../images/error.png';
import neutral from '../images/neutral.png';
import warning from '../images/warning.png';


const DynamicIcon = ({ theme }) => {
  let selectedIcon;

  switch (theme) {
    case 'success':
        selectedIcon = <img className="banner-icon" src={success} alt="Success" />;
        break;
      case 'error':
        selectedIcon = <img className="banner-icon" src={error} alt="Error" />;
        break;
      case 'warning':
        selectedIcon = <img className="banner-icon" src={warning} alt="Warning" />;
        break;
      case 'neutral':
        selectedIcon = <img className="banner-icon" src={neutral} alt="Neutral" />;
      break;
    default:
      // Handle the default case, maybe show a placeholder or an error message
      selectedIcon = <div>err</div>;
  }

  return <div>{selectedIcon}</div>;
};

export default DynamicIcon;
