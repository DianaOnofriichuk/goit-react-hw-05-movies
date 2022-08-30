import './GoBackBtn.css';
import { useNavigate, Link } from 'react-router-dom';

const GoBackBtn = () => {
  const location = useNavigate();

  return (
    <Link to={location?.state?.from ?? '/'} className="go-back-btn">
      Go Back
    </Link>
  );
};

export default GoBackBtn;
