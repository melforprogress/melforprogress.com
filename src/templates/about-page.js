import React from 'react'
import { FormattedMessage } from "react-intl";
import Layout from '../components/Layout'
import PageUnderNavbar from '../components/PageUnderNavBar'
import Issue from '../components/Resource'
import { oneLine } from "../translations/stringFileUtils";
import { localizedStringsKeypaths } from "../translations/es";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Mel_Bland from '../img/content/Mel-BlandHouses.jpg'
import Mel_field1 from '../img/content/Field-1.jpg'
import Mel_field2 from '../img/content/Field-QFB.jpg'





export default function() {
  return (
    <Layout>
      <PageUnderNavbar>
        <section className="section section--gradient">
          
            <div className="page_title" style={{textAlign: 'center'}}>
              <span className="underlined">
                <FormattedMessage
                  id={localizedStringsKeypaths.issues.title}
                  defaultMessage='About Mel'
                />
              </span>
            </div>
          <div className="container">
          <div className="resource_content">
          <img src={Mel_Bland}></img>
          <div className="intro_para">
            Melquiades Gagarin is a Queens native, a community organizer, a policy advocate, a father of three, and a punk rocker running for Congress to fight for you.
          </div>
          <img src={Mel_field1}></img>
          <div className="intro_para">
            He was born in Elmhurst to a Puerto-Rican working-class mother and a Filipino immigrant father, and raised by his mom and abuela. He went to Resurrection Ascension and Archbishop Molloy in district before attending American University in Washington, DC. Mel worked as a congressional aide representing large parts of the 6th Congressional District, advocated on the Hill alongside criminal justice reformers, and organized across Queens as part of a movement to build a more just future for the nation’s most diverse county.
          </div>
          <img src={Mel_field2}></img>
          <div className="intro_para">
            Mel has always been dedicated to fighting for progress. He is running to fight for working class people, people of color, immigrants, the elderly, and our future. He won’t be accepting any money from corporations, the fossil fuel industry or real estate developers. The only interests he will ever answer to are those of neighbors in the district. Mel lives in Kew Gardens with his wife Aleda, their three beautiful children, and their dachshund, Chewbacca.
          </div>
          </div>
          </div>

            
            

          
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}