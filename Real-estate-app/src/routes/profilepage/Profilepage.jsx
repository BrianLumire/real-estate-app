import './profilepage.scss';
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';

function Profilepage() {
  return (
    <div className='profilepage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update profile</button>
          </div>
          <div className="info">
            <span>Avatar: <img src="usericon.jfif" alt="" /></span>
             <span>Username: <b>Jason Weta</b> </span>
             <span>E-mail: <b>jasonweta@gmail.com</b> </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List/>
          <div className="title">
            <h1>Saved List </h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatbox">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default Profilepage;
