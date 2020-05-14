import React from 'react'
import { FormattedMessage } from "react-intl";
import Layout from '../components/Layout'
import PageUnderNavbar from '../components/PageUnderNavBar'
import Sources from '../components/Source'
import { oneLine } from "../translations/stringFileUtils";
import { localizedStringsKeypaths } from "../translations/es";
import { OutboundLink } from 'gatsby-plugin-google-analytics';


export default function() {
  return (
    <Layout>
      <PageUnderNavbar>
        <section className="section section--gradient">
          
            <div className="page_title" style={{textAlign: 'center'}}>
              <span className="underlined">
                <FormattedMessage
                  id={localizedStringsKeypaths.issues.title}
                  defaultMessage='Our Sources'
                />
              </span>
            </div>
            
            <div className="intro_para">
              Check out the sources below. If you have questions, please <a href="mailto:press@melforprogress.com">get in touch</a>.
            </div>

          <br />
          

          <div className="container">
          <div className="resource_content">
           <Sources />
          </div>
          </div>

            
            
        
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}