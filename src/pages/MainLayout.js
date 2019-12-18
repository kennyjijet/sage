import React from "react";
import BodyMainLayout from "../components/MainLayout/BodyMainLayout";

import "../assets/MainLayout.css";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    if (process.env.NODE_ENV !== "production") {
      console.log("this is not production");
    }
  }

  render() {
    return (
      <div className="mainLayout">
        <BodyMainLayout />
      </div>
    );
  }
}

export default MainLayout;
