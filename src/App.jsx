import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/AuthSlice/authSlice";
import { langContext } from "./contextAPI/context.jsx";
import { useContext } from "react";

import RootLayout from "./components/Layout/RootLayout";
import Footer from "./components/Footer/Footer";
import NavigationMUI from "./components/Navigation/NavigationMUI";
function App() {
  const { isAuth } = useSelector((state) => state.authSlice);
  const { lang } = useContext(langContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.checkUserToken());
  }, []);

  return (
    <div dir={lang == "en" ? "ltr" : "rtl"}>
      <RootLayout>
        <NavigationMUI />
        <Outlet />
        <Footer />
      </RootLayout>
    </div>
  );
}

export default App;
