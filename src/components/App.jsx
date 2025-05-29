import { Outlet } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/reset.css";
import "../styles/App.css";

function App() {
  const { products, error, loading } = useFetchProducts();

  return (
    <>
      <div className="app">
        <Header />
        <Outlet context={{ products, error, loading }} />
        <Footer />
      </div>
    </>
  );
}

export default App;
