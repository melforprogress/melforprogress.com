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
                        href="https://brandnewcongress.org/Mel-Gagarin"
                        target="_blank"
                      >
                        <img className="endorsement_bug" src={BNC} alt="Brand New Congress" />
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
                    </div>
                  </div>

                  <div className="content" id="press">
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
                      <OutboundLink className="press_headline"
                        href="https://www.ny1.com/nyc/all-boroughs/politics/2020/03/13/nyc-elections-2020-petitioning-to-get-on-the-ballot-new-york-coronavirus-latest"
                        target="_blank"
                      >
                        NY Politicians Demand Petitioning Changes Amid Coronavirus
                      </OutboundLink>
                      </div>
                      <div className="press_quote">
                      &ldquo;Until they do that, we're still forced to comply with the law. So campaigns — both incumbents and challengers — are going to be out there collecting signatures,&rdquo; said Mel Gagarin, who is running for a House seat. &ldquo;For us, this isn't about the difficulties in petitioning; it's really about the public health and safety concern that it poses.&rdquo;
                        <OutboundLink
                          className="readmore"
                          href="https://www.ny1.com/nyc/all-boroughs/politics/2020/03/13/nyc-elections-2020-petitioning-to-get-on-the-ballot-new-york-coronavirus-latest"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More >
                        </OutboundLink>
                      </div>
                      <OutboundLink
                        href="https://www.ny1.com/nyc/all-boroughs/politics/2020/03/13/nyc-elections-2020-petitioning-to-get-on-the-ballot-new-york-coronavirus-latest"
                        target="_blank"
                      >
                      <div className="press_credit">
                        NY1
                        <div className="press_date">
                          March 12, 2020
                        </div>
                      </div>
                      </OutboundLink>
                    </div>
                    <div className="press_clipping">
                      <div className="press_headline">
                      <OutboundLink className="press_headline"
                        href="https://queenseagle.com/all/coronavirus-queens-pols-cancel-petitioning-in-person-campaigning"
                        target="_blank"
                      >
                        Coronavirus prompts Queens pols to cancel petitioning and in-person campaigning
                      </OutboundLink>
                      </div>
                      <div className="press_quote">
                      “Given the seriousness of the Covid-19 outbreak, I and the undersigned are writing to ask that the petitioning requirements be suspended or altered for the upcoming election for declared candidates,” wrote Gagarin in the letter signed by nearly 40 other candidates for elected office in Queens.
                        <OutboundLink
                          className="readmore"
                          href="https://queenseagle.com/all/coronavirus-queens-pols-cancel-petitioning-in-person-campaigning"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More >
                        </OutboundLink>
                      </div>
                      <OutboundLink
                        href="https://queenseagle.com/all/coronavirus-queens-pols-cancel-petitioning-in-person-campaigning"
                        target="_blank"
                      >
                      <div className="press_credit">
                        Queens Daily Eagle
                        <div className="press_date">
                          March 12, 2020
                        </div>
                      </div>
                      </OutboundLink>
                    </div>
                    <div className="press_clipping">
                      <div className="press_headline">
                      <OutboundLink className="press_headline"
                        href="https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html"
                        target="_blank"
                      >
                        The House challengers everybody’s going to be talking about
                      </OutboundLink>
                      </div>
                      <div className="press_quote">
                      &ldquo;We can’t afford to have Democrats that are going to run to the middle and play it safe, side with Republicans. And it’s not that I’m opposed to bipartisanship, but what does it get you when that bipartisanship has always been compromising Democratic values?&rdquo;
                        <OutboundLink
                          className="readmore"
                          href="https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More >
                        </OutboundLink>
                      </div>
                      <OutboundLink
                        href="https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html"
                        target="_blank"
                      >
                      <div className="press_credit">
                        City & State New York
                        <div className="press_date">
                          November 10, 2019
                        </div>
                      </div>
                      </OutboundLink>
                    </div>
                    <div className="press_clipping">
                      <div className="press_headline">
                      <OutboundLink className="press_headline"
                        href="https://www.punknews.org/article/71199/interviews-punks-on-politics-getting-to-know-mel-gagarin"
                        target="_blank"
                      >
                        Punks on Politics: Getting to know Mel Gagarin
                      </OutboundLink>
                      </div>
                      <div className="press_quote">
                      &ldquo;Donald Trump isn’t an anomaly. He is a natural result of a broken political and economic system that allows him to rise. This is a part of the complicity of the Democratic establishment that continues to play politics as usual...&rdquo;
                        <OutboundLink
                          className="readmore"
                          href="https://www.punknews.org/article/71199/interviews-punks-on-politics-getting-to-know-mel-gagarin"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More >
                        </OutboundLink>
                      </div>
                      <OutboundLink
                        href="https://www.punknews.org/article/71199/interviews-punks-on-politics-getting-to-know-mel-gagarin"
                        target="_blank"
                      >
                      <div className="press_credit">
                        punknews.org
                        <div className="press_date">
                          November 4, 2019
                        </div>
                      </div>
                      </OutboundLink>
                    </div>
                    <div className="press_clipping">
                      <div className="press_headline">
                      <OutboundLink className="press_headline"
                        href="https://queenseagle.com/all/mel-gagarin-queens-democratic-primary-us-rep-grace-meng"
                        target="_blank"
                      >
                        U.S. Rep Meng to face first primary challenge since taking office
                      </OutboundLink>
                      </div>
                      <div className="press_quote">
                      Gagarin will reject corporate donations. Meng has not. “Since 2013 our district hasn't had a choice, and I'm going to provide that choice,” Gagarin said.
                        <OutboundLink
                          className="readmore"
                          href="https://queenseagle.com/all/mel-gagarin-queens-democratic-primary-us-rep-grace-meng"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More >
                        </OutboundLink>
                      </div>
                      <OutboundLink
                        href="https://queenseagle.com/all/mel-gagarin-queens-democratic-primary-us-rep-grace-meng"
                        target="_blank"
                      >
                      <div className="press_credit">
                        Queens Daily Eagle
                        <div className="press_date">
                          July 23, 2019
                        </div>
                      </div>
                      </OutboundLink>
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
