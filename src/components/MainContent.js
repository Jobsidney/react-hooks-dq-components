import React from "react";
import MenuLinks from "./MenuLinks";
import TopMenu from "./TopMenu";
import GenrePicker from "./GenrePicker";
import AlbumCard from "./AlbumCard";
import AlbumList from "./AlbumList";


function MainContent() {
  return <main>
    <div><TopMenu/></div>
    <div><GenrePicker/></div>
    <div><AlbumList/></div>
    </main>;
}

export default MainContent;
