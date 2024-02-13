import { useSelector } from "react-redux";
import { Route,Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function PrivateRoute({ children, ...rest }) {
    const loggedInUser = useSelector( store => store.reducerUser.loggedInUser )
    console.log(loggedInUser);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }