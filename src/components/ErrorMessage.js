const ErrorMessage = (props) => {
  if (props.message) {
    return <section className="ErrorMessage">{props.message}</section>;
  } else {
    return "";
  }
};

export default ErrorMessage;
