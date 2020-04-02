import React from 'react'
import { FormattedMessage } from "react-intl";
import Layout from '../components/Layout'
import PageUnderNavbar from '../components/PageUnderNavBar'
import Resources from '../components/Resource'
import { localizedStringsKeypaths } from "../translations/es";


export default function() {
  return (
    <Layout>
      <PageUnderNavbar>
        <section className="section section--gradient">
          
            <div className="page_title" style={{textAlign: 'center'}}>
              <span className="underlined">
                <FormattedMessage
                  id={localizedStringsKeypaths.issues.title}
                  defaultMessage='Critical Resources for New Yorkers'
                />
              </span>
            </div>
            
            <div className="intro_para">
              Check out the resources below for help and information that can get us all through this time of crisis. If you have resources to add, please <a href="mailto:info@melforprogress.com">get in touch</a>.
            </div>

          <br />
          

          <div className="container">
          <div className="resource_content">
           <Resources />
          </div>
          </div>

            
            
        
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}