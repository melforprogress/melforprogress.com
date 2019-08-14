import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href={'https://actionnetwork.org/css/style-embed-v3.css'} rel={'stylesheet'} type={'text/css'} />
        <link rel="stylesheet" href="https://use.typekit.net/fcx7eur.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <link rel="icon"
              type="image/png"
              href="/img/favicon-mel.jpg"
        ></link>
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/ogimage.jpg" />
      </Helmet>
      <Navbar />
      <div className="template-content">{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
