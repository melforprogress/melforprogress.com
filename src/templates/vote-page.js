import React from 'react'
import { FormattedMessage } from "react-intl";
import Layout from '../components/Layout'
import PageUnderNavbar from '../components/PageUnderNavBar'
import Vote from '../components/Vote'
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
                  defaultMessage='Voting Information for New Yorkers'
                />
              </span>
            </div>
            
            <div className="intro_para">
              The information below is the latest available on how to vote in the June 23 election. If you have resources to add, please <a href="mailto:info@melforprogress.com">get in touch</a>.
            </div>

          <br />
          

          <div className="container">
          <div className="resource_content">
           <Vote />
          </div>
          </div>

            
            
        
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}