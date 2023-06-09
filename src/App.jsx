import { Outlet } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Navigationbar from "./components/Navigation/Navigationbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <RootLayout>
      <Navigationbar />
      <Outlet />
      <Footer />
    </RootLayout>
  );
}

export default App;
