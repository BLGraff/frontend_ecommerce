import { ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import LoadingScreen from "./loading";

interface Props {
  children: ReactNode;
}

export default function ProtectedApp({ children }: Props) {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <LoadingScreen />;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  return children;
  /**
 
  if (auth.isAuthenticated) {
      return (
        <div>
          Hello {auth.user?.profile.sub}{" "}
          <button onClick={() => void auth.removeUser()}>Log out</button>
        </div>
      );
    }

    return <button onClick={() => void auth.signinRedirect()}>Log in</button>; 

 */
}
