import React from "react";
import "./UserAvatar.css";

function UserAvatar({ img }) {
  return <img src={img} className="user-avatar" alt="" />;
}

export default UserAvatar;
