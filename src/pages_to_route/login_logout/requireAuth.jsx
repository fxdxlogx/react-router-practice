import { useAuth } from "./authProvider";

export function RequireAuth({ children }) {
  const auth = useAuth();

  if (!auth.login) {
    return <Navigate to="login"></Navigate>;
  }

  return { children };
}
