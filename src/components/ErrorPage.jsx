import { Link } from "react-router-dom";

function ErrorPage() {
  // import useRouteError
  // const error = useRouteError();
  // console.log(error);

  return (
    <>
      <h2>Error Page</h2>
      <Link to="/">Go Back Home</Link>
    </>
  );
}

export default ErrorPage;
