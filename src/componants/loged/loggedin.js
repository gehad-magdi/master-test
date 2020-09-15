import React from "react";
import useRef from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // let inputVal = useRef(null);
    this.inputVal = React.createRef();
  }
  useClick() {
    let x = this.inputVal.value;
    alert(x);
  }
  render() {
    return (
      <div className="userLoggedIn">
        <label>
          Enter Your Name
          <input
            type="text"
            placeholder="Your Name"
            className="userValue"
            ref={this.props.inputVal}
          />
          <button onClick={this.useClick}>Next</button>
        </label>
      </div>
    );
  }
}
export default Login;
