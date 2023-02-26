import Admin from "./Pages/Admin";
import Auth from "./Pages/Auth";
import Guide from "./Pages/Guide";
import Practice from "./Pages/Practice";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import {
  HOME_ROUTE,
  PRACTICE_ROUTE,
  GUIDE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ADMIN_ROUTE,
  TEST_ROUTE,
} from "./utils/consts";
export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: GUIDE_ROUTE,
    Component: Guide,
  },
  {
    path: PRACTICE_ROUTE,
    Component: Practice,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: TEST_ROUTE,
    Component: Test,
  },
];
