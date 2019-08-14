import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Billboard from '../components/Billboard'

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
                  <div className="title" >
                    <span className="underlined">Mel Gagarin Is Running for Congress</span>
                    </div>
                  </div>
                  <div>
                    <div>Melquiades Gagarin is a stay-at-home dad and community organizer who is running to represent New York’s 6th Congressional District to put people before politics, human dignity above corporate greed, and the needs of the many above the benefit of the wealthy and the powerful.
                  </div>
                  <br />
                  <div>
                    Born in Elmhurst to a Puerto-Rican working-class mother and a Filipino immigrant father, he was raised by his mom and abuela. He went to Resurrection Ascension and Archbishop Molloy in district before attending American University in Washington, DC. From working as a congressional aide representing parts of New York’s 6th Congressional District, to advocating on the Hill alongside criminal justice reformers, Mel has always been dedicated to fighting for progress. He currently resides in Kew Gardens with his wife Aleda, their three children, and their dachshund. </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Billboard>
  </div>
)

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
