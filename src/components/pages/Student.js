import React from "react";
import Announcements from "../MainApp/Announcements";
import { ChatApp } from "../MainApp/ChatApp";
import Nav from "../MainApp/Nav";

function Student() {
  return (
    <div>
      <ChatApp />
      <Announcements />
    </div>
  );
}

export default Student;
