import React from "react"; 
import { Link } from "react-router-dom";  
import ChatContent from "../../components/Apps/Chat/ChatContent";

const Chat = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Chat</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Apps</li>
          <li>Chat</li>
        </ul>
      </div>

      <ChatContent />
    </>
  );
};

export default Chat;
