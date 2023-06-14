import { Outlet } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Navigationbar from "./components/Navigation/Navigationbar";
import Footer from "./components/Footer/Footer";
import AuthNavigation from "./components/Navigation/AuthNavigation";
import { useSelector } from "react-redux";
function App() {
  const { isAuth } = useSelector((state) => state.authSlice);
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
