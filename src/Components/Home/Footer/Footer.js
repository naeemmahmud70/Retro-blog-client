import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'
import FooterColumn from '../../FooterColumn/FooterColumn';

const Footer = () => {
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const ourLinks = [
        { name: "Our services", link: "/service" },
        { name: "Our Team", link: "/service" },
        { name: "New Blogs", link: "/" },
        { name: "Clients list", link: "/service" },
        { name: "Brochure", link: "/service" },
        { name: "Get In Touch", link: "/service" }
    ]
    const services = [
        { name: "Summer Blog", link: "/service" },
        { name: "Winter Blog", link: "/service" },
        { name: "Fashion Blog", link: "/service" },
        { name: "Midnight Party", link: "/service" },
        { name: "Press conference", link: "/service" },
        { name: "shooting", link: "/service" },
       
    ]
    return (
        <footer className="footer-area clear-both footer-bg mt-3">
            <div className="container pt-5 ">
                <div className="row py-5 d-flex justify-content-center">
                    <FooterColumn key={2} menuTitle="Services" menuItems={services} />
                    <FooterColumn key={3} menuTitle="Quick Links" menuItems={ourLinks} />
                    <FooterColumn key={4} menuTitle="Keep In Touch" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="text-white">
                            <h6>Call now</h6>
                            <button className="btn btn-brand text-white">+2025550295</button>
                        </div>
                    </FooterColumn>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;