import errorImg from "../images/error-image.webp";

const ErrorPage = () => {
  return (
    <section className="ErrorPage">
      <img src={errorImg} alt="Error" className="ErrorImg" />
      <br></br>
      <br></br>

      <p1>Error, Status 404: Page Not Found</p1>
    </section>
  );
};

export default ErrorPage;
