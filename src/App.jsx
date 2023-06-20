import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "./store/AuthSlice/authSlice";



import RootLayout from "./components/Layout/RootLayout";
import Footer from "./components/Footer/Footer";
import NavigationMUI from "./components/Navigation/NavigationMUI";
function App() {
  const { isAuth } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(authActions.checkUserToken())
  },[])
  return (
    <RootLayout>
      <NavigationMUI/>
      <Outlet />
      <Footer />
    </RootLayout>
  );
}

export default App;
