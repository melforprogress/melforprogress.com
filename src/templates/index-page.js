import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Billboard from '../components/Billboard'
import DonatePicker from '../components/DonatePicker'
import { FormattedMessage } from 'react-intl'
import { localizedStringsKeypaths } from '../translations/es'
import { oneLine } from '../translations/stringFileUtils'
import { Link } from 'gatsby'
import Housing_bug from '../img/content/policies/Policy-Housing.png'
import GoldenYears_bug from '../img/content/policies/Policy-GoldenYears.png'
import GreenNewDeal_bug from '../img/content/policies/Policy-GreenNewDeal.png'
import M4A_bug from '../img/content/policies/Policy-M4A.png'

export const IndexPageTemplate = ({}) => (
  <div>
    <Billboard>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div>
              <div className="content">
                <div className="content">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                      dachshund, Chewbacca. `)}
                    />
                  </div>
                  <br />



                  <div className="content">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="title">
                       <span className="underlined">
                          <FormattedMessage
                            id={localizedStringsKeypaths.home.about.header}
                            defaultMessage="Policy for the People"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="intro_para">
                    <FormattedMessage
                      id={localizedStringsKeypaths.home.about.summary}
                      defaultMessage={oneLine(`Mel advocates for a government that puts people before politics, human interest above corporate
                        greed, and the needs of the many above the benefit of the wealthy and powerful. `)}
                    />
                    <Link className="readmore" to="/issues">
                        <FormattedMessage
                          id = "issues.readmore"
                          defaultMessage="Read Mel’s Platform&nbsp;>"
                        />
                      </Link>
                    </div>
                    <div className="issue_teaser_container">
                      <div className="issue_teaser">
                        <div className="issue-bug_container">
                        <img className="issue-bug_teaser" src={Housing_bug} />
                        </div>
                        <div className="issue_blurb">
                          <FormattedMessage
                          id={localizedStringsKeypaths.home.about.summary}
                          defaultMessage={oneLine(`Housing is a human right and guaranteed affordable housing should be a national priority. `)}
                            />
                        <Link className="readmore" to="/issues#Housing">
                          <FormattedMessage
                            id = "issues.readmore"
                            defaultMessage="Read More&nbsp;>"
                          />
                        </Link>
                        </div>
                      </div>
                      <div className="issue_teaser">
                        <div className="issue-bug_container">
                        <img className="issue-bug_teaser" src={GoldenYears_bug} />
                        </div>
                        <div className="issue_blurb">
                          <FormattedMessage
                          id={localizedStringsKeypaths.home.about.summary}
                          defaultMessage={oneLine(`Our elders are owed respect and dignity in their golden years, regardless of their or their family’s financial circumstances. `)}
                            />
                        <Link className="readmore" to="/issues#GoldenYears">
                          <FormattedMessage
                            id = "issues.readmore"
                            defaultMessage="Read More&nbsp;>"
                          />
                        </Link>
                        </div>
                      </div>
                      <div className="issue_teaser">
                        <div className="issue-bug_container">
                        <img className="issue-bug_teaser" src={GreenNewDeal_bug} />
                        </div>
                        <div className="issue_blurb">
                          <FormattedMessage
                          id={localizedStringsKeypaths.home.about.summary}
                          defaultMessage={oneLine(`Climate change is the defining challenge of our time. A Green New Deal is not only a possibility, it is now a necessity.`)}
                            />
                        <Link className="readmore" to="/issues#GND">
                          <FormattedMessage
                            id = "issues.readmore"
                            defaultMessage="Read More&nbsp;>"
                          />
                        </Link>
                        </div>
                      </div>
                      <div className="issue_teaser">
                        <div className="issue-bug_container">
                        <img className="issue-bug_teaser" src={M4A_bug} />
                        </div>
                        <div className="issue_blurb">
                          <FormattedMessage
                          id={localizedStringsKeypaths.home.about.summary}
                          defaultMessage={oneLine(`Healthcare is a right, not a privilege, and it’s time to focus on the American people and their health over the profits of billion-dollar corporations.`)}
                            />
                        <Link className="readmore" to="/issues#M4A">
                          <FormattedMessage
                            id = "issues.readmore"
                            defaultMessage="Read More&nbsp;>"
                          />
                        </Link>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link className="readmore" to="/issues">
                        <FormattedMessage
                          id = "issues.readmore"
                          defaultMessage="More Issues&nbsp;>"
                        />
                      </Link>
                    </div>
                  </div>
                  <DonatePicker/>
                  <div className="content">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="title">
                       <span className="underlined">
                          <FormattedMessage
                            id={localizedStringsKeypaths.home.about.header}
                            defaultMessage="In the Press"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="press_clipping">
                      <div className="press_headline">
                      <a className="press_headline" href="https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html">
                        The House challengers everybody’s going to be talking about
                        </a>
                      </div>
                      <div className="press_credit">
                        City & State New York
                      </div>
                      <div className="press_date">
                        November 10, 2019
                      </div>
                    </div>
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
      <IndexPageTemplate />
    </Layout>
  )
}

export default IndexPage
