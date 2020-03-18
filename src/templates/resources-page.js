import React from 'react'
import { FormattedMessage } from "react-intl";
import Layout from '../components/Layout'
import PageUnderNavbar from '../components/PageUnderNavBar'
import Issue from '../components/Resource'
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
            <div className="resource_header">Food</div>
            <div>
            You can apply for <a href="https://www1.nyc.gov/…/hra/…/snap-benefits-food-program.page">SNAP Benefits</a> to help supplement your food budget.
            </div>
            <div>
            <a href="https://www.foodbanknyc.org/get-help/">Food Bank / Pantry locator</a>
            </div><br/>
            
            <div className="resource_header">Work</div>
            <div>
            Gov. Cuomo has ended the seven-day waiting period before you can <a href="https://labor.ny.gov/ui/how_to_file_claim.shtm">apply for unemployment</a> if you have lost a W-2 job (restaurant/retail/etc.)
            </div>
            <br />
            <div>
            If you run a small business (incorporated as an LLC or other), you can <a href="https://www1.nyc.gov/site/sbs/businesses/covid19-business-outreach.page">apply for a no-interest loan</a> and NYC will cover 40% of payroll costs for businesses with fewer than 5 employees.
            </div><br/>

            <div className="resource_header">Rent/Housing</div>
            <div>
            There is a 90-day moratorium on evictions, so if you cannot pay rent you won't be kicked out. If your landlord issues a notice of eviction, call 311 to get help.
            </div>
            <div>
            <a href="https://www.foodbanknyc.org/get-help/">Food Bank / Pantry locator</a>
            </div>
            <div>
              <a href="https://www.thehotline.org/2020/03/13/staying-safe-during-covid-19/">
                National Domestic Violence Hotline: Staying Safe During Covid-19
              </a>
            </div>
            <div>
              <a href="https://www.thehotline.org/help/path-to-safety/">
                National Domestic Violence Hotline: Path to Safety
              </a>
            </div>
            <div>
              <a href="https://acl.gov/COVID-19">
                Information for Older Adults & People with Disabilities
              </a>
            </div>

            <br/>

            <div className="resource_header">Schools</div>
            <div>
            <a href="https://www.schools.nyc.gov/school-life/health-and-wellness/coronavirus-update">NYC Coronavirus public school updates</a>
            </div>
            <div>
            <a href="https://www.businessinsider.com/coronavirus-free-spectrum-internet-wifi-offer-student-households-promotion-2020-3">Spectrum</a> is providing free internet for students.
            </div><br/>

            <div className="resource_header">Health & Medical</div>
            <div>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
                Centers for Disease Control and Prevention (CDC)  COVID-19 Recommendations & Guidelines
              </a>
            </div>
            <div>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">World Health Organization (WHO) COVID-19 Information Dashboard</a>
            </div>
            <div>
            <a href="https://coronavirus.health.ny.gov/home">NY State COVID-19 Information Page (State level updates)</a>
            </div>
            <div>
            <a href="https://www1.nyc.gov/site/doh/health/health-topics/coronavirus.page">NYC Health COVID-19 Information Page</a>
            </div>
            <div>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html">Information for those at higher risk</a>
            </div>
            <div>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/pregnant-women-and-children.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fspecific-groups%2Fpregnant-women.html">Information for Pregnant People and Children</a>
            </div>
            <div>
            <a href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">EPA Recommended List of Disinfectants</a>
            </div>
            <div>
            <a href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/">How COVID-19 Spreads and how to “Flatten the Curve”</a>
            </div>
            <div>
            <a href="https://drive.google.com/file/d/1L7BsIaZtYHyd5aK_wpCktfEBrb2dmiN_/view">Safer Drug Use Guidelines</a> from the Harm Reduction Coalition
            </div>
            <br/>

            <div className="resource_header">Crisis Hotlines</div>
            <div><ul>
            <li>The National Domestic Violence Hotline is 24/7, confidential and free: 1-800-799-7233 and through chat.</li>
            <li>The National Sexual Assault Hotline is 24/7, confidential and free: 800.656.HOPE (4673) and through chat.</li>
            <li>The StrongHearts Native Helpline for domestic/sexual violence is available 7am-10pm CT, confidential, and specifically for Native communities: 1−844-762-8483.</li>
            <li>The Trans LifeLine. This hotline is staffed exclusively by trans operators is the only crisis line with a policy against non-consensual active rescue. 9am-3am CT: 1-877-565-8860 </li>
            <li>National Parent Helpline Monday-Friday 12pm-9am CT emotional support and advocacy for parents: 1-855-427-2736.</li>

            </ul>
            </div><br/>

            <div className="resource_header">Further Reading</div>
            <div>
            <a href="https://www.theguardian.com/world/2020/mar/13/coronavirus-latest-at-a-glance">
            The Guardian’s Latest At A Glance 
            </a></div><div>
            <a href="https://www.verywellmind.com/managing-coronavirus-anxiety-4798909">
            How To Cope With Anxiety During Coronavirus COVID-19 
            </a></div><div>
            <a href="https://www.theatlantic.com/ideas/archive/2020/03/who-gets-hospital-bed/607807/?utm_source=share&utm_campaign=share">
            The Extraordinary Decisions Facing Italian Doctors 
            </a></div><div>
            <a href="https://www.theatlantic.com/ideas/archive/2020/03/coronavirus-cancel-everything/607675/">
            Cancel Everything by Yascha Mounk (in The Atlantic)
            </a></div><div>
            <a href="https://www.commondreams.org/views/2020/03/10/six-quick-very-important-points-about-coronavirus-and-poverty-us?utm_campaign=shareaholic&utm_medium=referral&utm_source=facebook&fbclid=IwAR19FUDKWwN88qXSyLeU9Uf-TAfPKg0de3BhqjVHN-mUsD3RRIqjYBU0-b4">
            Six Quick—But Very Important—Points About Coronavirus and Poverty in the US
            </a></div><div>
            <a href="https://www.vox.com/2020/3/10/21171481/coronavirus-us-cases-quarantine-cancellation">
            How cancelled events and self-quarantines save lives – in one chart
            </a></div><div>
            <a href="https://www.wwltv.com/article/news/health/coronavirus/hospitality-workers-derail-new-orleans-coronavirus-news-conference/289-514f20ba-1f73-414a-ae6e-616650f740dd?fbclid=IwAR3SsNOU6mw-087F-FNsYF3I4MUeCtyHl81W8ZySxI4yDIxct2gMHc9Mm_0">
            New Orleans Hospitality Workers Alliance disrupt mayoral press conference “If We Work Sick, You Get Sick.”
            </a></div><div>
            <a href="https://www.upworthy.com/coronavirus-doctor-hospital-italy">
            “Every Ventilator Becomes Like Gold”
            </a></div><div>
            <a href="https://www.theatlantic.com/photo/2020/03/empty-spaces-due-coronavirus-fears/607666/">
            When Everyone Stays Home
            </a>
            </div>
            
            <br/>
          </div>
          </div>

            
            

          
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}