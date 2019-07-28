import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

import styles from './Footer.module.css'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary-dark has-text-white-ter">
        <div className="content has-text-centered has-background-primary-dark has-text-white-ter">
          <div className="container has-background-primary-dark has-text-white-ter">
            <div className="social">
                <OutboundLink title="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/melforprogress/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </OutboundLink>
                <OutboundLink title="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/melforprogress">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </OutboundLink >
                <OutboundLink title="instagram" target="_blank" rel="noopener noreferrer" href="https://instagram.com/mel.gagarin">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </OutboundLink >
            </div>
            <div className={styles.footerInfo}>
              <div className={styles.contactLine}><a href="mailto:info@melforprogress.com">General inquiries: info@melforprogress.com</a></div>
              <div className={styles.contactLine}><a href="mailto:press@melforprogress.com">Press inquiries: press@melforprogress.com</a></div>
              <div className={styles.paidForMessage}>Paid for by Committee to Elect Mel Gagarin</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
