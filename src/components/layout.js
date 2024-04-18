import React from 'react';
import { Link } from 'gatsby';

const Layout = props => {
  const { title, children } = props; // TODO add paragraph where current "title" uses italics etc.
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a className="nav-burger" href={`#`} onClick={() => setToggleNav(!toggleNav)}>
            <div className="hamburger hamburger--collapse" aria-label="Menu" role="button" aria-controls="navigation">
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              {/* use className nav-current to bold the currently selected link */}
              <li className="nav-home" role="menuitem">
                <Link to={`/`}>About</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/writing`}>Writing</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/press`}>Press</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/juliacpike"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://twitter.com/juliapike14" title="Twitter" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>
      </footer>
    </div>
  );
};

export default Layout;
