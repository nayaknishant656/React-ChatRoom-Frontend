import React from 'react'
// import Groupsvg from '.../assets/group-icon.svg'
import Characterimg from '../../assets/character-1.png'
import Characterimg1 from '../../assets/character-2.png'
import Characterimg2 from '../../assets/character-3.png'
import Logobencho from '../../assets/logobencho.png'
import Plussvg from '../../assets/plus-icon.svg'
import Emojisvg from '../../assets/emoji.svg'
import Sendsvg from '../../assets/send.svg'
import Create from '../../assets/create.svg'
import File from '../../assets/file.svg'
import './body.css'
export default function body() {
    return (
        <section id='parent-section'>
            <div className='parent-container'>
                <div className='left-small-toggel'>
                    <div className='group-list-parent'>
                        <div className='box-group-list'>
                            <div className='display-bar'>
                                <img src={Logobencho}></img>
                                <div className='text-box-s'><h4>Nishant Nayak</h4><p>hello this is me</p></div><h6 className='time-show'>3hrs ago</h6>
                            </div>
                        </div>
                        <div className='box-group-list'>
                            <div className='display-bar'>
                                <img src={Logobencho}></img>
                                <div className='text-box-s'><h4>Nishant Nayak</h4><p>hello this is me</p></div><h6 className='time-show'>3hrs ago</h6>
                            </div>
                        </div>
                        <div className='box-group-list'>
                            <div className='display-bar'>
                                <img src={Logobencho}></img>
                                <div className='text-box-s'><h4>Nishant Nayak</h4><p>hello this is me</p></div><h6 className='time-show'>3hrs ago</h6>
                            </div>
                        </div>
                        <div className='box-group-list'>
                            <div className='display-bar'>
                                <img src={Logobencho}></img>
                                <div className='text-box-s'><h4>Nishant Nayak</h4><p>hello this is me</p></div><h6 className='time-show'>3hrs ago</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-large-message'>
                    <div className='top-large-box'>
                        <div className='left-small-box'>
                            <div className='box-preview'>
                                <img src={Logobencho}></img>
                                <div className='text-box-bar'>
                                    <h4>Friends</h4><p>3 Members</p>
                                </div>
                            </div>
                        </div>
                        <div className='centre-images-box'>
                            <div className='images-preview-box'>
                                <img src={Characterimg}></img>
                                <img src={Characterimg1}></img>
                                <img src={Characterimg2}></img>
                                <img src={Plussvg}></img>
                            </div>
                        </div>
                        <div className='last-fa-icon'>
                            <div className='centre-fa-icon'>
                                <img src={Plussvg}></img>
                            </div>
                        </div>
                    </div>
                    <div className='meassaging-app-large'>
                        <div className='message-box-display'>
                            <div className='parent-message-box'>
                                <img src={Characterimg}></img>
                                <div className='centre-text'>
                                    <h4>Nishant Nayak</h4>
                                    <p>hello are you there?</p>
                                </div> <h6>7:00</h6>
                            </div>
                        </div>
                        <div className='message-box-display right-pos'>
                            <div className='parent-message-box right-bg-color'>
                                <h6 className='right-time-pos'>7:03</h6>
                                <div className='centre-text'>
                                    <h4>Me</h4>
                                    <p>yes tell me what happen</p>
                                </div>   <img src={Characterimg1}></img>
                            </div>
                        </div>
                        <div className='message-box-display hidden'>
                            <div className='parent-message-box'>
                                <img src={Characterimg2}></img>
                                <div className='centre-text'>
                                    <h4>Suresh Kumar</h4>
                                    <p>bro yaar tum na laudu hai ek no ka</p>
                                </div> <h6>7:10</h6>
                            </div>
                        </div>
                        <div className='message-box-display'>
                            <div className='parent-message-box'>
                                <img src={Characterimg2}></img>
                                <div className='centre-text'>
                                    <h4>Burrjesh Kumar</h4>
                                    <p>hello are you there?</p>
                                </div> <h6>7:12</h6>
                            </div>
                        </div>
                        <div className='message-box-display'>
                            <div className='parent-message-box'>
                                <img src={Characterimg}></img>
                                <div className='centre-text'>
                                    <h4>Nishant Nayak</h4>
                                    <p>hello are you there?</p>
                                </div> <h6>7:13</h6>
                            </div>
                        </div>
                        <div className='message-box-display'>
                            <div className='parent-message-box'>
                                <img src={Characterimg2}></img>
                                <div className='centre-text'>
                                    <h4>Nishant Nayak</h4>
                                    <p>hello are you there?</p>
                                </div> <h6>7:16</h6>
                            </div>
                        </div>
                        <div className='message-box-display'>
                            <div className='parent-message-box'>
                                <img src={Characterimg}></img>
                                <div className='centre-text'>
                                    <h4>Nishant Nayak</h4>
                                    <p>hello are you there?</p>
                                </div> <h6>7:17</h6>
                            </div>
                        </div>
                        <div className='search-bar-parent'><p>Write a Message....</p>
                            <div className='left-bar'>
                                <div className='button-bar'><img src={Plussvg}></img><button>Condition</button>  </div>
                                <img src={Emojisvg}></img> 
                                <img src={File}></img>
                                <img src={Sendsvg}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
