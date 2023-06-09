import { Outlet } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Navigationbar from "./components/Navigation/Navigationbar";

function App() {
  return (
    <RootLayout>
      <Navigationbar />
      <div className="container">
        <Outlet />
      </div>
    </RootLayout>
  );
}

export default App;
