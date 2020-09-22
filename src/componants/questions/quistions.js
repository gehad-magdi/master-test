import React from "react";

class Quisez extends React.Component {
  constructor() {
    super();
    const iq = [
      "The rocky planet",
      "Fiery planet",
      "Water planet",
      "Snowy planet",
      "the Gas Giant",
    ];
    console.log(iq[0]);
    console.log(iq[1]);
    console.log(iq[2]);
    console.log(iq[3]);
    console.log(iq[4]);
    console.log((iq[0] = "planet mars nickname ?"));
    console.log((iq[1] = "planet earth nickname ?"));
    console.log((iq[2] = "planet Mercury nickname ?"));
    console.log((iq[3] = "planet Pluto nickname ?"));
    console.log((iq[4] = "planet jupiter nickname ?"));
  }
  render() {
    return (
      <div>
        <div>
          <h1>planet mars nickname ?</h1>
        </div>
        <div>
          <h1>planet earth nickname ?</h1>
        </div>
        <div>
          <h1>planet Mercury nickname ?</h1>
        </div>
        <div>
          <h1>planet Pluto nickname ?</h1>
        </div>
        <div>
          <h1>planet jupiter nickname ?</h1>
        </div>
      </div>
    );
  }
}
export default Quisez;
