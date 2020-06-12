import React from 'react'
import { FormattedMessage } from "react-intl";
import Layout from '../components/Layout'
import PageUnderNavbar from '../components/PageUnderNavBar'
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
                  defaultMessage='Sign up for Callhub'
                />
              </span>
            </div>
            
            <iframe src="https://na1.callhub.io/embed/agent-signup/?user=klevenick%40gmail.com&embedkey=a6944a9db95cda9377fdbdf9fdd8c354" frameborder="0" style={{height: '700px', width: '100%'}}></iframe>

          <br />
          

          <div className="container">
          <div className="resource_content">
          </div>
          </div>

            
            
        
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}