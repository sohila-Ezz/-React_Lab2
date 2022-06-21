import React from "react";
import { useHistory } from "react-router-dom";

const Contact = (props) => {
  //   console.log(props);
  const history = useHistory();
  const redirectToAbout = () => {
    // props.history.push("/about");//1
    console.log(history);
    history.push("/about"); //2
  };

  return (
    <div>
      <h1>Contact us</h1>

      <button className="btn btn-primary" onClick={() => redirectToAbout()}>
        Go To About Us
      </button>
    </div>
  );
};

export default Contact;
