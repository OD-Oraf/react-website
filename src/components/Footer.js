import React from 'react';
import './Footer.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className = "footer-container">
            <section className="footer-subscription">

                <p className="footer-subscription-heading">

                    Join the adventure newsletter to recieeve our best vacation deals 
                </p>

                <p className="footer-subscription-text">
                    You can unsubcribe at anytime                     
                </p>

                <div className="input-areas">
                <form> 
                    <input  className="footer-input"
                        name="email"
                        type= "email"  
                        placeholder="Your Email"/>
                        
                    <Button buttonStyle = "btn--outline"> Subscribe </Button>
                </form>
                </div>

            </section>

            <div className="footer-links"> 
                <div className="footer-link-wrapper">

                    <div className="footer-link-items">
                        <h2> About US </h2>
                        <Link to = '/sign-up'> How it works </Link>
                        <Link to= '/'> Testimonials </Link>
                        <Link to= '/'> Careers </Link>
                        <Link to= '/'> Investors </Link>
                        <Link to= '/'> Terms of service </Link>                       
                    </div>

                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>                   
                    </div>

                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Videos</h2>
                            <Link to='/'>Submit Video</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influencer</Link>
                        </div>
                   </div>

                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>

                
            </div>

        </div>  

        <section className="social-media"> 
            <div className="social-media-wrap">
                <div className="footer-logo">

                    <Link to= '/' className="social-logo">
                        TRVL <i className="fab fa-typo3"> </i>
                    </Link>
                </div>

                <samll className="website-rights"> TRVL 2020</samll>
                <div className="social-icons">

                    <Link className="social-icon-link facebook"
                    to = '/'
                    target = 'blank'
                    aria-label = 'Facebook' 
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>



                    <Link className="social-icon-link instagram"
                    to = '/'
                    target = 'blank'
                    aria-label = 'Instagram' 
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>



                    <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i className='fab fa-twitter' />
                    </Link>
                </div>
                
            </div>
        </section>
    </div>
    );
}

export default Footer;
