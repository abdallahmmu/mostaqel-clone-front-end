import { Outlet } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Navigationbar from "./components/Navigation/Navigationbar";
import Footer from "./components/Footer/Footer";
import AuthNavigation from "./components/Navigation/AuthNavigation";

function App() {
  return (
    <RootLayout>
{/*       <AuthNavigation/> */}
      <Navigationbar />
      <Outlet />
      <Footer />
    </RootLayout>
  );
}

export default App;
