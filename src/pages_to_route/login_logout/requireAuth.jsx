/* to make sure that user is logged in to show profile page */
/* I guess we have already achieve this functionality in colorfulbox.js but implementing the same functionality by this method also for the shake of practice */
import { useAuth } from "./authProvider";
import {useNavigate} from 'react-router-dom'

export function RequireAuth({ children }) {
  const navigate = useNavigate()
  const auth = useAuth();

  if (!auth.login) {
    return navigate('/');
  }
  /*if not logged in return to home page, but if logged in then show profile page. */
  return { children };
}
