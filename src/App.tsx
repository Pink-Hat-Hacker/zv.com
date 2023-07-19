import React from "react";
import SpaceInvaderShip from "./SpaceInvaderShip";
import LinksRow from "./LinksRow";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <SpaceInvaderShip />
      <LinksRow />
    </div>
  );
};

export default App;
