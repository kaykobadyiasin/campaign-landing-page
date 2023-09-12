import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/termsCondition',
            element: <TermsConditions/>
        },
        {
            path: '*',
            element: <Error/>
        }
      ]
    },
  ]);

export default router;