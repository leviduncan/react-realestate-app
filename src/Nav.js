import React from 'react'; 

const Nav = () => {
    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container"><a className="navbar-brand logo" href="#">Realestate Search App</a><button data-toggle="collapse"
          className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span
            className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation"><a className="nav-link active" href="index.html">Home</a></li>
            <li className="nav-item" role="presentation"><a className="nav-link" href="contact-us.html">Contact Us</a></li>
            <li className="nav-item" role="presentation"><a className="nav-link" href="service-page.html">Service</a></li>
          </ul>
        </div>
      </div>
      </nav>
    );
};

export default Nav;

