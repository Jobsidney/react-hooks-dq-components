import React from "react";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import MenuLinks from "./MenuLinks";
import Search from "./Search";
import MainContent from "./MainContent";

function App() {
  return <div className="app-container">{
    <div className="navbar">
      <SideMenu/>
      <MainContent/>
      
    </div>
  }</div>;
}

export default App;
