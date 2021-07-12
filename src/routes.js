import { PublicLayout } from "./containers/layouts";

import { Route } from "react-router-dom";

import { HomePage ,NewContractLampiris } from "./containers/pages";

const PUBLIC_BASE_URL = "/";

const routes = {
  PublicLayout: {
    component: PublicLayout,
    children: [
      {
        path: PUBLIC_BASE_URL,
        exact: true,
        component: HomePage,
        routeComponent: Route,
      },
      {
        path: `${PUBLIC_BASE_URL}new-contract-lampiris`,
        exact: true,
        component: NewContractLampiris,
        routeComponent: Route,
      },
    ],
  },


  // MainLayout: {
  //   component: MainLayout,
  //   children: [

  //   ],
  // },
  // AuthenticationLayout: {
  //   component: AuthenticationLayout,
  //   children: [

  //   ],
  // },
};

export default routes;
