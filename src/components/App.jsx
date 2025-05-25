import { Outlet } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import Header from "./Header";
import "../styles/reset.css";
import "../styles/App.css";

function App() {
  const { products, error, loading } = useFetchProducts();

  return (
    <>
      <Header />
      <Outlet context={[products, error, loading]} />
    </>
  );
}

export default App;
