import React from "react";
import { Link } from "react-router-dom";

// Now converting class based components in function based components.
// The class based code is already pushed to github.

const NavBar = () => {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsApp
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item"><Link className='nav-link' to='/Science'>Science</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/Business'>Business</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/Entertainment'>Entertainment</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/General'>General</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/Health'>Health</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/Technology'>Technology</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/Sports'>Sports</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  
}

export default NavBar;
