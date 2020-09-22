import React from "react";
import Quisez from "../questions/quistions";

class Login extends React.Component {
  constructor(props) {
    super();
    console.log(this.props);
    this.inputVal = React.createRef();
    this.state = {
      value: "",
      userName: "",
    };
  }
  handlingSubmit = (e) => {
    this.setState({ value: this.inputVal.current.value });
    this.setState({ userName: this.inputVal.current.value });
    this.inputVal.current.value
      ? e.preventDefault()
      : alert(this.inputVal.current.value);
  };
  render() {
    return (
      <div className="userLoggedIn">
        <form onSubmit={this.handlingSubmit}>
          <label>
            Enter Your Name{this.state.userName}
            <input
              type="text"
              placeholder="Your Name"
              className="userValue"
              ref={this.inputVal}
            />
            <button>Next</button>
          </label>
        </form>
        <Quisez />
      </div>
    );
  }
}
export default Login;
