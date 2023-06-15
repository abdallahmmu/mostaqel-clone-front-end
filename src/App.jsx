import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "./store/AuthSlice/authSlice";



import RootLayout from "./components/Layout/RootLayout";
import AuthNavigation from "./components/Navigation/AuthNavigation";
import Navigationbar from "./components/Navigation/Navigationbar";
import Footer from "./components/Footer/Footer";
function App() {
  const { isAuth } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(authActions.checkUserToken())
  },[])
  return (
    <RootLayout>
      {isAuth && <AuthNavigation />}
      {!isAuth && <Navigationbar />}
      <Outlet />
      <Footer />
    </RootLayout>
  );
}

export default App;
