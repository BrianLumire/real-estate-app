import './chat.scss';
import React, { useState } from 'react';

function Chat() {
    const [chat,setchat]= useState(true)

  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="usericon.jfif" alt="" />
                <span>Jason Weta</span>
                <p>
                I trust this message......
                </p>
            </div>
            <div className="message">
                <img src="usericon.jfif" alt="" />
                <span>Jason Weta</span>
                <p>
                I trust this message......
                </p>
            </div>
            <div className="message">
                <img src="usericon.jfif" alt="" />
                <span>Jason Weta</span>
                <p>
                I trust this message......
                </p>
            </div>
            <div className="message">
                <img src="usericon.jfif" alt="" />
                <span>Jason Weta</span>
                <p>
                I trust this message......
                </p>
            </div>
            <div className="message">
                <img src="usericon.jfif" alt="" />
                <span>Jason Weta</span>
                <p>
                I trust this message......
                </p>
            </div>
        </div>
        {chat &&(
        <div className="chatbox">
            <div className="top">
                <div className="user">
                    <img src="usericon.jfif" alt="" />
                    Jason Weta
                </div>
                <span className='close' onClick={()=>setchat(null)}>X</span>
            </div>
            <div className="centre">
                <div className="chatmessage">
               <p> I trust this message......</p>
               <span>2 minutes ago</span>
                </div>
                <div className="chatmessage own">
               <p> I trust this message......</p>
               <span>2 minutes ago</span>
                </div>
                <div className="chatmessage">
               <p> I trust this message......</p>
               <span>2 minutes ago</span>
                </div>
                <div className="chatmessage own">
               <p> I trust this message......</p>
               <span>2 minutes ago</span>
                </div>
                <div className="chatmessage">
               <p> I trust this message......</p>
               <span>2 minutes ago</span>
                </div>
                <div className="chatmessage own">
               <p> I trust this message......</p>
               <span>2 minutes ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>)}
    </div>
  );
}

export default Chat;