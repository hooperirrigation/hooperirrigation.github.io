import React from 'react'
import './Home.css'
import sprinklers from '../../Assets/sprinklers.jpeg'
import meetingNotice from '../../Assets/Annual_Mtg_Notice_2022.pdf'
import directorApplication from '../../Assets/Application for Director.pdf'
import directorCodeOfEthics from '../../Assets/Director Code of Ethics.pdf'

function Home() {
    return (
        <div className='container'>
            <div className="content home-content">
                <h1>Welcome to Hooper Irrigation</h1>
                {/* <div className='notice'>
                    <h1>2022 Annual Stockholder's Meeting of Hooper Irrigation Company</h1>
                    <h1>Hooper City Civic Center</h1>
                    <h1>Monday April 25th, 2022 at 7:00 p.m.</h1>
                    <div className='content-container'>
                        <div className='link-box'>
                        <h2>Official Meeting Notice</h2>
                        <a href={meetingNotice} target='_blank' rel="noopener noreferrer">View Here</a>
                        </div>       
                    </div>          
                </div> */}

                
                <div className='notice' >
                    <h1 id='black-txt'>Secondary Pressurized Water bill begins on May 15th, 2022.</h1>
                </div>
                
                <div className="content-container">
                    <div className="home-text">
                        <p className='intro'>
                            Hooper Irrigation Company is a non-profit irrigation company providing Hooper City and Taylor with secondary irrigation water and flood irrigation water to specific areas in western Weber and Davis Counties. This website is intended to help you find the information you are looking for regarding your irrigation water.
                        </p>
                        <p className='status'>
                            </p>
                        <div className="contact">
                            <h2 id='contact-us'>
                                Contact Us
                            </h2>   
                            <h4 className='subheader'>Hours</h4>
                            <div className="hours">
                                <p className='left-align'>Monday - Thursday</p>
                                <p className='left-align'>9am - 4:30pm</p>
                            </div>
                            <div className="hours">
                                <p className='left-align'>Friday</p>
                                <p className='left-align'>9am - 12pm</p>
                            </div>
                            <div className="hours">
                                <p className='left-align'>Saturday - Sunday</p>
                                <p className='left-align'>Closed</p>
                            </div>

                            <h4 className="subheader">Phone</h4>
                            <p className='left-align'>(801) 985-8429</p>

                            <h4 className="subheader">Email</h4>
                            <p className='left-align'>hooperirrigationco@msn.com</p>

                            <h4 className="subheader">Address</h4>
                                <p className='left-align'>
                                    5375 S 5500 W, Hooper, UT 84315
                                </p>
                        </div>

                    </div>

                    <img class='sprinkler-image' src={sprinklers} alt='sprinkler image' />
                </div>
            </div>
        </div>
    )
}

export default Home
