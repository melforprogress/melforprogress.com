import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary-dark has-text-white-ter">
        <div className="content has-text-centered has-background-primary-dark has-text-white-ter">
          <div className="container has-background-primary-dark has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/issues">
                        Issues
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <OutboundLink className="navbar-item navbar-link"
                            href="https://secure.actblue.com/donate/melforprogress" target="_blank"
                          >
                            Donate
                      </OutboundLink>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" target="_blank" href="https://www.facebook.com/melforprogress/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" target="_blank" href="https://twitter.com/melforprogress">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" target="_blank" href="https://instagram.com/mel.gagarin">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
            <div>Paid for by Committee to Elect Mel Gagarin</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
