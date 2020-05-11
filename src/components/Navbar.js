import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FormattedMessage } from 'react-intl'
import { localizedStringsKeypaths } from '../translations'
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
        <Link className="resources_alert" to="/resources">
          COVID-19 Resources for Constituents and Neighbors &gt;
        </Link>
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <div className="navbar-title logo">
                <img className="desktop" src={desktop_logo} />
                <img className="mobile" src={mobile_logo} />
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
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start">
              <Link className="navbar-item navbar-link" to="/">
                <FormattedMessage id={localizedStringsKeypaths.home.title} defaultMessage="Home" />
              </Link>
              <Link className="navbar-item navbar-link" to="/about">
                <FormattedMessage
                  id={localizedStringsKeypaths.issues.title}
                  defaultMessage="About"
                />
              </Link>
              <Link className="navbar-item navbar-link" to="/issues">
                <FormattedMessage
                  id={localizedStringsKeypaths.issues.title}
                  defaultMessage="Issues"
                />
              </Link>
              <Link className="navbar-item navbar-link" to="/vote">

                <FormattedMessage
                  id={localizedStringsKeypaths.issues.title}
                  defaultMessage="Vote"
                />
              </Link>
              <OutboundLink
                className="navbar-item navbar-link"
                href="https://act.melforprogress.com/local"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id={localizedStringsKeypaths.organize.title}
                  defaultMessage="Organize"
                />
              </OutboundLink>              
              <Link className="navbar-item navbar-link" to="/press">
                <FormattedMessage
                  id={localizedStringsKeypaths.press.title}
                  defaultMessage="Press"
                />
              </Link>
              <OutboundLink
                className="navbar-item navbar-link"
                href="http://melforprogress.square.site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id={localizedStringsKeypaths.organize.title}
                  defaultMessage="Store"
                />
              </OutboundLink>
              <OutboundLink
                className="navbar-item navbar-link donate"
                href="https://secure.actblue.com/donate/melforprogress"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id={localizedStringsKeypaths.donate.link}
                  defaultMessage="Donate"
                />
              </OutboundLink>
            </div>
            <div className="nav-buttons">
              <OutboundLink
                className="register-vote"
                href="https://vote.nyc/page/register-vote"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id={localizedStringsKeypaths.organize.title}
                  defaultMessage="Register to Vote"
                />
              </OutboundLink>
              <OutboundLink
                className="phonebank-now"
                href="https://act.melforprogress.com/events/phonebank-for-mel-35"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id={localizedStringsKeypaths.organize.title}
                  defaultMessage="Phonebank Now"
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
