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
                  defaultMessage='In the Press'
                />
              </span>
            </div>
          <div className="container">
            <div className="content" id="press">

              <div className="press_clipping">
                <div className="press_headline">
                  <OutboundLink className="press_headline"
                    href="https://www.theverge.com/2020/5/4/21244667/election-candidates-zoom-campaign-social-media-politicians-rally"
                    target="_blank"
                    >
                    Candidates can’t campaign, so they’re trying to go viral
                  </OutboundLink>
                </div>
                <div className="press_quote">
                  For now, those phone conversations and virtual town halls are all campaigns have during the pandemic. Gagarin’s team feels confident they can make the leap. &ldquo;When it comes down to it, whether turnout is low or high, we’re confident in our ability to get our voters out,&rdquo; Sahlin said.
                  <OutboundLink
                    className="readmore"
                    href="https://www.theverge.com/2020/5/4/21244667/election-candidates-zoom-campaign-social-media-politicians-rally"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Read More >
                  </OutboundLink>
                </div>
                <OutboundLink
                  href="https://www.theverge.com/2020/5/4/21244667/election-candidates-zoom-campaign-social-media-politicians-rally"
                  target="_blank"
                  >
                  <div className="press_credit">
                    The Verge
                    <div className="press_date">
                      May 4, 2020
                    </div>
                  </div>
                </OutboundLink>
              </div>

              <div className="press_clipping">
                <div className="press_headline">
                  <OutboundLink className="press_headline"
                    href="https://balitangamerica.tv/fil-am-democrat-campaigns-for-new-york-congressional-election/"
                    target="_blank"
                    >
                    Fil-Am Democrat Campaigns for New York Congressional Election
                  </OutboundLink>
                </div>
                <div className="press_quote">
                  &ldquo;We’re living in the most dangerous time in American history. I’ve been saying that pretty much at the beginning of the campaign, and I think it has been reinforced by what we’re witnessing right now in the midst of this coronavirus crisis.&rdquo;
                  <OutboundLink
                    className="readmore"
                    href="https://balitangamerica.tv/fil-am-democrat-campaigns-for-new-york-congressional-election/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Read More >
                  </OutboundLink>
                </div>
                <OutboundLink
                  href="https://balitangamerica.tv/fil-am-democrat-campaigns-for-new-york-congressional-election/"
                  target="_blank"
                  >
                  <div className="press_credit">
                    Balitang America
                    <div className="press_date">
                      April 15, 2020
                    </div>
                  </div>
                </OutboundLink>
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
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}