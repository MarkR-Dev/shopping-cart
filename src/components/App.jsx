import { Outlet } from "react-router-dom";
import "../styles/reset.css";

function App() {
  return (
    <>
      <h2>Header component</h2>
      <Outlet />
      {/* Pass state to children via context and access if in child via useOutletContext, check docs */}
      <h2>Footer component</h2>
    </>
  );
}

export default App;
