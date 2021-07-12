import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import routes from "./routes";
import { AuthContext } from "./context/authContext";
import { PublicLayout } from "./containers/layouts";
import React from "react";
// import NotFound from "./containers/pages/PublicLayout/NotFound/NotFound";

const App = () => {
  const keys = Object.keys(routes);
  const token = localStorage.getItem("token");
  return (
    <AuthContext.Provider value={token}>
      <Router>
        <Switch>
          {keys.map((layoutName) => {
            let layout = routes[layoutName];
            return routes[layoutName].children.map((route, index) => {
              return (
                <route.routeComponent
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  render={(props) => (
                    <layout.component>
                      <route.component {...props} />
                    </layout.component>
                  )}
                />
              );
            });
          })}
           <Route
            path="*"
            render={() =>
                <PublicLayout>
                  {/* {/* <NotFound />   */}
                </PublicLayout>
            } 
          /> 
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
