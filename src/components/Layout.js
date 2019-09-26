import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import WithIntl from './Intl'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <WithIntl>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="stylesheet" href="https://use.typekit.net/fcx7eur.css"></link>
          <link
            href="https://fonts.googleapis.com/css?family=Oswald&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" type="image/png" href="/img/favicon-mel.jpg"></link>
          <meta name="theme-color" content="#fff" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@melforprogress" />
          <meta name="twitter:creator" content="@melforprogress" />
          <meta property="og:type" content="website" />

          <meta
            property="og:description"
            content="Mel Gagarin is running to represent New York’s 6th Congressional
          District to put people before politics, human dignity above corporate greed, and the needs of the many
           above the benefit of the wealthy and the powerful."
          />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="https://melforprogress.com/img/ogimage.png" />
        </Helmet>
        <Navbar />
        <div className="template-content">{children}</div>
        <Footer />
      </div>
    </WithIntl>
  )
}

export default TemplateWrapper
