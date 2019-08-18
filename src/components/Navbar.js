import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import {FormattedMessage} from 'react-intl';
import { localizedStringsKeypaths } from "../translations";
import desktop_logo from '../img/content/mel-logo-web-desktop.png'
import mobile_logo from '../img/content/mel-logo-web-mobile.png'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }


  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        id="navbar"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <div className="navbar-title logo">
                <img class="desktop" src={desktop_logo} />
                <img class="mobile" src={mobile_logo} />
              </div>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <Link className="navbar-item navbar-link" to="/">
                <FormattedMessage
                  id={localizedStringsKeypaths.home.title}
                  defaultMessage='Home'
                />
              </Link>
              <Link className="navbar-item navbar-link" to="/issues">
                <FormattedMessage
                  id={localizedStringsKeypaths.issues.title}
                  defaultMessage='Issues'
                />
              </Link>
              <OutboundLink className="navbar-item navbar-link donate"
                    href="https://secure.actblue.com/donate/melforprogress"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                <FormattedMessage
                  id={localizedStringsKeypaths.donate.title}
                  defaultMessage='Donate'
                />
              </OutboundLink>
              <OutboundLink className="navbar-item navbar-link"
                    href="https://act.melforprogress.com/local?filter%5Blocation%5D=queens&page=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                <FormattedMessage
                  id={localizedStringsKeypaths.organize.title}
                  defaultMessage='Organize'
                />
              </OutboundLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
