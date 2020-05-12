import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Billboard from '../components/Billboard'
import DonatePicker from '../components/DonatePicker'
import { FormattedMessage } from 'react-intl'
import { localizedStringsKeypaths } from '../translations/es'
import { oneLine } from '../translations/stringFileUtils'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Housing_bug from '../img/content/policies/Policy-Housing.png'
import GoldenYears_bug from '../img/content/policies/Policy-GoldenYears.png'
import GreenNewDeal_bug from '../img/content/policies/Policy-GreenNewDeal.png'
import M4A_bug from '../img/content/policies/Policy-M4A.png'
import BNC from '../img/content/endorsements/BNC_logo-400px.png'
import FTD from '../img/content/endorsements/FTD_logo-200px.png'
import OPF from '../img/content/endorsements/OPF_logo-200px.png'
import PFB from '../img/content/endorsements/PFB_logo.png'
import QUIP from '../img/content/endorsements/QUIP-transparent.png'
import NYPAN from '../img/content/endorsements/NYPAN-logo.png'
import DUH from '../img/content/endorsements/DUH_logo.png'
import IncomeMvmt from '../img/content/endorsements/IncomeMvmt_logo.png'
import APIS from '../img/content/endorsements/APIS_logo.png'
import ActionNetworkWidget from '../components/ActionNetworkWidget.js'




export const IndexPageTemplate = ({}) => (
  <div>
    <Billboard>

    <div class="display-banner">
      <div class="vote-banner-main">
          <div className="vote-banner-container">
              <div className="vote-banner">
                VOTE BY <br />
                JUNE 23
              </div>
          </div>
          <div class="vote-ballot-button-container">
            <a class="vote-ballot-button" href="http://www.nycabsentee.com">Request your ballot&nbsp;></a>
          </div>
          <div class="links-container">
            <a class="link-black" href="/vote">More information for voters&nbsp;></a>
          </div>
      </div>
    </div>


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
                  <div className="video-container-container">
                    <div className="video-container">
                      <iframe width="560" height="315"
                      src="https://www.youtube.com/embed/Zmd8f3-XCv0" 
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
                    </div>
                  </div>
                  <div className="intro_para">
                    <FormattedMessage
                      id={localizedStringsKeypaths.home.about.summary}
                      defaultMessage={oneLine(`Melquiades Gagarin is a Queens native, a community organizer, a policy advocate, a father of three, and a punk rocker running for Congress in New York’s Sixth Congressional District to fight for you.`)}
                    />
                    <Link className="readmore" to="/about">
                        <FormattedMessage
                          id = "about.readmore"
                          defaultMessage="About Mel&nbsp;>"
                        />
                      </Link>
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
                        <Link className="readmore" to="/issues#m4a">
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

                  <div className="content" id="endorsements">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="title">
                        <span className="underlined">
                          <FormattedMessage
                            id={localizedStringsKeypaths.home.about.header}
                            defaultMessage="Endorsed by"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="endorsement_container">
                      <OutboundLink className="endorsement"
                        href="https://twitter.com/People4Bernie/status/1207735843911340034"
                        target="_blank"
                      >
                        <img className="endorsement_bug" src={PFB} alt="The People for Bernie" />
                      </OutboundLink>
                      <OutboundLink className="endorsement"
                        href="http://forwardthinkingdemocracy.com/index.php/2019/12/18/forward-thinking-democracy-announces-endorsement-of-mel-gagarin-ny-06/"
                        target="_blank"
                      >
                        <img className="endorsement_bug" src={FTD} alt="Forward Thinking Democracy" />
                      </OutboundLink>
                      <OutboundLink className="endorsement"
                        href="https://twitter.com/ProgressiveOur/status/1161000854566113281"
                        target="_blank"
                      >
                        <img className="endorsement_bug" src={OPF} alt="Our Progressive Future" />
                      </OutboundLink>
                      <OutboundLink className="endorsement"
                        href="https://www.facebook.com/QUIPClub/photos/a.389336338564077/653594858804889/?type=3&theater"
                      >
                        <img className="endorsement_bug" src={QUIP} alt="Queens United Independent Progressives" />
                      </OutboundLink>
                      <OutboundLink className="endorsement"
                        href="https://twitter.com/MelforProgress/status/1248235036610084870"
                      >
                        <img className="endorsement_bug" src={NYPAN} alt="New York Progressive Action Network" />
                      </OutboundLink>
                      <OutboundLink className="endorsement"
                        href="https://duh4all.org/us-house-senate-candidates/us-congress-house-senate.html"
                      >
                        <img className="endorsement_bug" src={DUH} alt="Demand Universal Healthcare" />
                      </OutboundLink>
                      <OutboundLink className="endorsement"
                        href="https://brandnewcongress.org/Mel-Gagarin"
                        target="_blank"
                      >
                        <img className="endorsement_bug" src={BNC} alt="Brand New Congress" />
                      </OutboundLink>
                      <OutboundLink className="endorsement"
                        href="https://www.incomemovement.com/politics"
                        target="_blank"
                      >
                        <img className="endorsement_bug" src={IncomeMvmt} alt="Income Movement" />
                      </OutboundLink>
                      <OutboundLink className="endorsement"
                        href="https://twitter.com/MelforProgress/status/1250050186530996226"
                        target="_blank"
                      >
                        <img className="endorsement_bug" src={APIS} alt="American Progressives in STEM" />
                      </OutboundLink>
                    </div>
                  </div>
                  <div className="content" id="signup">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="title">
                        <span className="underlined">
                          <FormattedMessage
                            id={localizedStringsKeypaths.home.about.header}
                            defaultMessage="Join Our Movement"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="an_widget" id="action-network-section">
                      <ActionNetworkWidget />
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
