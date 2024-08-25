import React from 'react'
import './header.css'
import Characterimg from '../assets/character-1.png'
import Emojisvg from '../assets/emoji.svg'
import Bellsvg from '../assets/bell.svg'
export default function header() {
    return (
        <header>
            <div className="parent-header">
                <div className="left-l-logo"> <h4>TESTLOGO</h4></div>
                <div className="centre-chats-profile">
                    <ul>
                        <li>Home</li>
                        <li>Create</li>
                        <li>Workspace</li>
                    </ul>
                </div>
                <div className="right-login-profile">
                    <div className='parent-left-login'>
                        <img src={Bellsvg}></img>
                        <img src={Emojisvg}></img>
                        <img src={Characterimg}></img>
                    </div>
                </div>
            </div>
        </header>
    )
}
