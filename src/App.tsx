import { Component } from "react";
import { inject, observer } from "mobx-react";

import Counter from "components/Counter";
import SuperMarket from "components/SuperMarket";

@inject("counter")
@observer
class App extends Component {
  render() {
    return (
      <>
        <Counter />
        <hr />
        <SuperMarket />
      </>
    );
  }
}

export default App;
