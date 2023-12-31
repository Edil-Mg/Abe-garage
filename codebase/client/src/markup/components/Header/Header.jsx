import React from 'react';
import {Link} from  'react-router-dom';

import icon1 from '../../../assets/images/custom/logo.png';
import bricon from "../../../assets/images/icons/icon-bar.png";

const Header = () => {
  return (
		<header className="main-header header-style-one">
			<div className="header-top">
				<div className="auto-container">
					<div className="inner-container">
						<div className="left-column">
							<div className="text">Enjoy the Beso while we fix your car</div>
							<div className="office-hour">
								Monday - Saturday 7:00AM - 6:00PM
							</div>
						</div>
						<div className="right-column">
							<div className="phone-number">
								Schedule Your Appontment Today : <strong>1800 456 7890</strong>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="header-upper">
				<div className="auto-container">
					<div className="inner-container">
						<div className="logo-box">
							<div className="logo">
								<Link to="/">
									<img src={icon1} />
								</Link>
							</div>
						</div>
						<div className="right-column">
							<div className="nav-outer">
								<div className="mobile-nav-toggler">
									<img src={bricon} alt="" />
								</div>

								<nav className="main-menu navbar-expand-md navbar-light">
									<div
										className="collapse navbar-collapse show clearfix"
										id="navbarSupportedContent"
									>
										<ul className="navigation">
											<li className="dropdown">
												<Link to="/">Home</Link>
											</li>
											<li className="dropdown">
												<Link to="/about">About Us</Link>
											</li>
											<li className="dropdown">
												<Link to="/services">Services</Link>
											</li>
											<li>
												<Link to="/contact">Contact Us</Link>
											</li>
										</ul>
									</div>
								</nav>
							</div>
							<div className="search-btn"></div>
							<div className="link-btn">
								<Link to="/login" className="theme-btn btn-style-one">
									Login
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="sticky-header">
				<div className="header-upper">
					<div className="auto-container">
						<div className="inner-container">
							<div className="logo-box">
								<div className="logo">
									<Link to="/">
										<img src="assets/images/custom/logo.png" alt="" />
									</Link>
								</div>
							</div>
							<div className="right-column">
								<div className="nav-outer">
									<div className="mobile-nav-toggler">
										<img src="assets/images/icons/icon-bar.png" alt="" />
									</div>

									<nav className="main-menu navbar-expand-md navbar-light"></nav>
								</div>
								<div className="search-btn"></div>
								<div className="link-btn">
									<Link to="/login" className="theme-btn btn-style-one">
										Login
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mobile-menu">
				<div className="menu-backdrop"></div>
				<div className="close-btn">
					<span className="icon flaticon-remove"></span>
				</div>

				<nav className="menu-box">
					<div className="nav-logo">
						<Link to="index.html">
							<img src="assets/images/logo-two.png" alt="" title="" />
						</Link>
					</div>
					<div className="menu-outer"></div>
				</nav>
			</div>

			<div className="nav-overlay">
				<div className="cursor"></div>
				<div className="cursor-follower"></div>
			</div>
		</header>
	);
}

export default Header