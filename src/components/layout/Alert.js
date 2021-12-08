//so message from alert state can be dispalyed
import { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fa fa-info-circle'>{alert.msg}</i>
      </div>
    )
  );
};

export default Alert;
