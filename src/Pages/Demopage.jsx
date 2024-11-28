import React from 'react';
import '../css/style.css';
import '../css/swiper.min.css'
const Header = ({ darkLogoUrl, singleMenuFile }) => {
  const defaultLogoUrl = darkLogoUrl || 'assets/images/resources/logo-3.png';
  const defaultMenuFile = singleMenuFile || './Menu';

  return (
    <>
      <div className="page-wrapper">
        {/* Start Main Header Three */}
        <header className="main-header main-header-three">
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-header-three__top">
                  <div className="container">
                    <div className="main-header-three__top-inner">
                      <div className="header-contact-style1">
                        <ul>
                          <li>
                            <div className="icon">
                              <span className="icon-phone"></span>
                            </div>
                            <div className="text-box">
                              <p>
                                <span>Talk to Us</span> <a href="tel:1234567890">[+123 456 789]</a>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-email"></span>
                            </div>
                            <div className="text-box">
                              <p>
                                <span>Mail Us</span>{' '}
                                <a href="mailto:yourmail@email.com">[support@logistra.com]</a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="main-header-three__right">
                        <div className="main-header__language-switcher">
                          <div className="icon">
                            <span className="fa fa-globe"></span>
                          </div>
                          <div className="language-switcher clearfix">
                            <form className="clearfix">
                              <div className="select-box clearfix">
                                <select className="selectmenu wide">
                                  <option selected>ENG</option>
                                  <option>FRA</option>
                                  <option>GER</option>
                                  <option>BAN</option>
                                </select>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="header-social-links">
                          <a href="#"><span className="icon-facebook-f"></span></a>
                          <a href="#"><span className="icon-twitter1"></span></a>
                          <a href="#"><span className="icon-instagram"></span></a>
                          <a href="#"><span className="icon-linkedin"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-header-three__bottom">
                  <div className="container">
                    <div className="main-header-three__bottom-inner">
                      <div className="main-header-three__bottom-left">
                        <div className="logo-box">
                          <a href="index.php">
                            <img src={defaultLogoUrl} alt="Logo" />
                          </a>
                        </div>
                      </div>

                      <div className="main-header-three__bottom-middle">
                        <div className="main-header-three__menu">
                          <div className="main-menu__main-menu-box">
                            <a href="#" className="mobile-nav__toggler">
                              <i className="fa fa-bars"></i>
                            </a>
                            <div>{/* Include your menu component here */}</div>
                          </div>
                        </div>
                      </div>

                      <div className="main-header-three__bottom-right">
                        <div className="header-search-box-two">
                          <a href="#" className="main-menu__search search-toggler icon-search"></a>
                        </div>
                        <div className="btn-box">
                          <a className="thm-btn" href="contact.php">
                            Track Order
                            <i className="icon-right-arrow21"></i>
                            <span className="hover-btn hover-bx"></span>
                            <span className="hover-btn hover-bx2"></span>
                            <span className="hover-btn hover-bx3"></span>
                            <span className="hover-btn hover-bx4"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* End Main Header Three */}

        <div className="stricky-header stricky-header--style3 stricked-menu main-menu">
          <div className="sticky-header__content"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
