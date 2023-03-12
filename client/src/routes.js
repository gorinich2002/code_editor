
import Auth from "./Pages/Auth";
import Guide from "./Pages/Guide/Guide";
import Practice from "./Pages/Practice";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import Room from "./Pages/Room"
import Chat from './Pages/Chat'
import p11 from "./Pages/Guide/Pages/p11";
import p12 from "./Pages/Guide/Pages/p12";
import {
  HOME_ROUTE,
  PRACTICE_ROUTE,
  GUIDE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  TEST_ROUTE,
  ROOM_ROUTE,
  CHAT_ROUTE,
  p11_ROUTE,
  p12_ROUTE
} from "./utils/consts";


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
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
  {
    path: ROOM_ROUTE,
    Component: Room,
  },
  {
    path: p11_ROUTE,
    Component: p11,
  },
  {
    path: p12_ROUTE,
    Component: p12,
  },
];
