import React from "react";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";

function App() {
  return (
    <div className="">

    <Provider store={appStore} >
      <Body />
    </Provider>
    </div>
  );
}

export default App;
