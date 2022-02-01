import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="address">
                  <h3>Travel Avengers</h3>
                  <p className="mb-4 mt-4">
                    Farmgate,Dhaka-1212, Bangladesh                                   </p>
                  <p><strong>Phone:</strong> 01 333 666 980 (10AM-5PM)</p>
                  <p><strong>Email:</strong> info@travelavengers.com</p>
                </div>
              </div>

              {/* // */}

              <div className="col-lg-3 col-sm-6 footer-menus">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Blog</HashLink></li>
                  <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Action Camera</HashLink></li>
                  <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Cuisine</HashLink></li>
                  <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Travel Insurance</HashLink></li>
                  <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">And More...</HashLink></li>
                </ul>
              </div>

              <div className="col-lg-4 col-sm-6 newsletter">
                <h4>Our Newsletter</h4>
                <p className='text-white'>Subscribe to our newsletter to receive latest updates</p>
                <form action="" method=""><input type="email" name="email" /><input type="submit" value="Subscribe" /></form>


              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom border-top text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className='text-white'>
                  Copyright &copy; <span id="currentYear"></span> Travel Avewngers | A Travel Blog Website
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;