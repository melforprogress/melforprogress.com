import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Billboard from '../components/Billboard'
import { FormattedMessage } from "react-intl";
import { localizedStringsKeypaths } from "../translations/es";
import { oneLine } from "../translations/stringFileUtils";

export const IndexPageTemplate = ({
}) => (
  <div>
    <Billboard>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content" >
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="title">
                      <span className="underlined">
                        <FormattedMessage
                          id={localizedStringsKeypaths.home.about.header}
                          defaultMessage="Mel Gagarin Is Running for Congress"
                        />
                      </span>
                    </div>
                  </div>
                  <div>
                    <FormattedMessage
                      id={localizedStringsKeypaths.home.about.summary}
                      defaultMessage={oneLine(`Melquiades Gagarin is a stay-at-home dad and a lifelong advocate who is running
                      for congress in New York’s Sixth Congressional District to be the bold, progressive fighter unbeholden to the
                      political establishment that this moment calls for.`)}
                    />
                  </div>
                  <br />
                  <div>
                    <FormattedMessage
                      id={localizedStringsKeypaths.home.about.background}
                      defaultMessage={oneLine(`He was born in Elmhurst to a Puerto-Rican working-class mother and a Filipino immigrant
                      father, and raised by his mom and abuela. He went to Resurrection Ascension and Archbishop Molloy in district before
                      attending American University in Washington, DC. Mel worked as a congressional aide representing large parts of the
                      6th Congressional District, advocated on the Hill alongside criminal justice reformers, and organized across Queens
                      as part of a movement to build a more just future for the nation’s most diverse county.`)}
                    />
                  </div>
                  <br />
                  <div>
                    <FormattedMessage
                      id={localizedStringsKeypaths.home.about.background}
                      defaultMessage={oneLine(`Mel has always been dedicated to fighting for progress. He is running to fight for working
                      class people, people of color, immigrants, the elderly, and our future.  He won’t be accepting any money from
                      corporations, the fossil fuel industry or real estate developers. The only interests he will ever answer to are those
                      of neighbors in the district. Mel lives in Kew Gardens with his wife Aleda, their three beautiful children, and their
                      dachshund, Chewbacca.`)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Billboard>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = () => {

  return (
    <Layout>
      <IndexPageTemplate
      />
    </Layout>
  )
}

export default IndexPage
