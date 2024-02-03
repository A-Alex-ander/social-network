import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrjYmArEmG4k9u9QtS3YbM1wL8dc_2hscUg&usqp=CAU"
                    alt="nike"/>
            </header>

            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div><img
                    src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                    alt=""/>
                </div>
                <div>
                    ava + descriptions
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>


        </div>

    );
}


export default App;
