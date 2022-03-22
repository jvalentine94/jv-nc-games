import errorImg from "../images/error-image.png";

const Loading = () => {
  return (
    <section>
      <p>...Loading</p>
      <img src={errorImg} alt="Error" id="loadingimage" />
    </section>
  );
};

export default Loading;
