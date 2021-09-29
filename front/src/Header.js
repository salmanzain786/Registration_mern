import React from 'react';
import { NavLink} from 'react-router-dom';
function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand text-light" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NavLink to="/" className="nav-link text-light"><i class="fa fa-home" aria-hidden="true"></i> Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/Contact" className="nav-link text-light"> <i class="fa fa-users" aria-hidden="true"></i> Users</NavLink>
          </li>

          <li class="nav-item">
            <NavLink to="/Registration" className="nav-link text-light"> <i class="fa fa-users" aria-hidden="true"></i> Registration</NavLink>
          </li>


          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-cog" aria-hidden="true"></i> Setup
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Category Master</a>
              <a class="dropdown-item" href="#">Werehouse Master</a>
              <a class="dropdown-item" href="#">Vendor Master</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand">First React App</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav">
    //       <li className="nav-item active">
    //         <NavLink to="/" className="header_link">Home</NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink to="/Contact" className="header_link">Contact</NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
       
  );
}

export default Header;
