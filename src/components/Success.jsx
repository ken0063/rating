import "../App.scss";

const Success = ({ value }) => {
  return (
    <>
      <div className="ilustarte">
        <img src="../images/illustration-thank-you.svg" alt="icon" />
      </div>
      <div className="rate">
        <p>{`You selected ${value} out of 5`}</p>
      </div>

      <div className="content-next">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default Success;
