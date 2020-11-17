import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/project-23ac0.appspot.com/o/flower-logo.png?alt=media&token=5944aa33-a796-45bc-9c62-28d998e3a505' alt='logo'/>
            </header>
            <nav className="nav">
                <div>
                    <a href='#'>Profile</a>
                </div>
                <div><a href='#'>Messages</a></div>
                <div><a href='#'>News</a></div>
                <div><a href='#'>Music</a></div>
                <div><a href='#'>Settings</a></div>
            </nav>
            <div className="content">
                <div>
                <img className='main-img' src="https://images.pexels.com/photos/545042/pexels-photo-545042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                </div>
                <div>my posts
                <div>new post</div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
                </div>
        </div>
);
}


export default App;
