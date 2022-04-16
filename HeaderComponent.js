import React from 'react';
import './Header.css';



const Header = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm  justify-content-between">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src='images/R.png' style={{ maxWidth: '50px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-between" id="navbarSupportedContent">
                    <ul className="nav navbar-nav" id="navbar">
                        <li className="nav-item">
                            <a href="/" className="nav-link bi bi-house-door-fill  active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about"  className="nav-link bi bi-book-half">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/products"  className="nav-link bi bi-gear">Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link bi bi-phone">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link bi bi-question-octagon-fill">Help</a>
                        </li>
                        <li className="nav-item">
                            <div className="input-group">
                                <input className=" form-control rounded rounded-2" type="text" placeholder="Search" />
                                <button className=" btn btn-outline-primary">Search</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='button'>
                         <a className='btn btn-outline-warning'>
                             <i className='bi bi-cart4' href="/">Cart (0)</i>
                         </a>
                </div>
                <div>
                    <div className="btn-group">
                        <div className="dropdown">
                            <button className="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown">
                                <i className=" bi bi-person">sign in</i>
                            </button>

                            <ul className="dropdown-menu">

                                <li className="dropdown-item"><span className="bi bi-box-arrow-in-right">Sign in</span></li>
                                <li className="dropdown-item"><span className="bi bi-person-plus-fill">Sign up</span></li>
                                <li className="dropdown-item"><span className="bi bi-unlock-fill">Change Passward</span></li>
                                <li className="dropdown-divider"></li>
                                <li className="dropdown-item"><span className="bi bi-person"></span>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Header;








