/* to make sure that user is logged in to show profile page */

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
