import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>Error Page</h1>
      <Link to="/">Go Back Home</Link>
    </>
  );
}

export default ErrorPage;
