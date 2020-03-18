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
            <p>
            You can apply for <a href="https://www1.nyc.gov/site/hra/help/snap-benefits-food-program.page" target="_blank">SNAP Benefits</a> to help supplement your food budget.
            </p>
            <p>
            <a href="https://www.foodbanknyc.org/get-help/" target="_blank">Food Bank / Pantry locator</a>
            </p>
            <p>
            <span>La Jornada, the Greater Flushing Chamber of Commerce, Kissena Synergy, Mel for Progress, Gutsier Living, Flushing Interfaith Council</span>, and other community organizations are mobilizing volunteers to call and deliver food to local residents. If you need emergency food assistance, <a href="https://forms.gle/Qx1Z3jN9u3EQc7RZA">fill out this form</a>.
            </p><br/>
            
            <div className="resource_header">Work</div>
            <p>
            Gov. Cuomo has ended the seven-day waiting period before you can <a href="https://labor.ny.gov/ui/how_to_file_claim.shtm" target="_blank">apply for unemployment</a> if you have lost a W-2 job (restaurant/retail/etc.)
            </p>
            <p>
            If you run a small business (incorporated as an LLC or other), you can <a href="https://www1.nyc.gov/site/sbs/businesses/covid19-business-outreach.page" target="_blank">apply for a no-interest loan</a> and NYC will cover 40% of payroll costs for businesses with fewer than 5 employees.
            </p><br/>

            <div className="resource_header">Rent/Housing</div>
            <p>
            There is a 90-day moratorium on evictions, so if you cannot pay rent you won't be kicked out. If your landlord issues a notice of eviction, call 311 to get help.
            </p>

            <br/>

            <div className="resource_header">Schools</div>
            <p>
            <a href="https://www.schools.nyc.gov/school-life/health-and-wellness/coronavirus-update" target="_blank">NYC Coronavirus public school updates</a>
            </p>
            <p>
            <a href="https://www.businessinsider.com/coronavirus-free-spectrum-internet-wifi-offer-student-households-promotion-2020-3" target="_blank">Spectrum</a> is providing free internet for students.
            </p><br/>

             <div className="resource_header">Domestic Violence</div>
            <p>
              <a href="https://www.thehotline.org/2020/03/13/staying-safe-during-covid-19/" target="_blank">
                National Domestic Violence Hotline: Staying Safe During Covid-19
              </a>
            </p>
            <p>
              <a href="https://www.thehotline.org/help/path-to-safety/" target="_blank">
                National Domestic Violence Hotline: Path to Safety
              </a>
            </p>

            <br/>

            <div className="resource_header">Health & Medical</div>
            <p>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank">
                Centers for Disease Control and Prevention (CDC)  COVID-19 Recommendations & Guidelines
              </a>
            </p>
            <p>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">World Health Organization (WHO) COVID-19 Information Dashboard</a>
            </p>
            <p>
            <a href="https://coronavirus.health.ny.gov/home" target="_blank">NY State COVID-19 Information Page (State level updates)</a>
            </p>
            <p>
            <a href="https://www1.nyc.gov/site/doh/health/health-topics/coronavirus.page" target="_blank">NYC Health COVID-19 Information Page</a>
            </p>
            <p>
              <a href="https://acl.gov/COVID-19" target="_blank">
                Information for Older Adults & People with Disabilities
              </a>
            </p>
            <p>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html" target="_blank">Information for those at higher risk</a>
            </p>
            <p>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/pregnant-women-and-children.html" target="_blank">Information for Pregnant People and Children</a>
            </p>
            <p>
            <a href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2" target="_blank">EPA Recommended List of Disinfectants</a>
            </p>
            <p>
            <a href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/" target="_blank">How COVID-19 Spreads and how to “Flatten the Curve”</a>
            </p>
            <p>
            <a href="https://drive.google.com/file/d/1L7BsIaZtYHyd5aK_wpCktfEBrb2dmiN_/view" target="_blank">Safer Drug Use Guidelines</a> from the Harm Reduction Coalition
            </p>
            <br/>

            <div className="resource_header">Crisis Hotlines</div>
            <p>
            The <a href="https://suicidepreventionlifeline.org/" target="_blank">National Suicide Prevention Lifeline</a> is 24/7, confidential and free: <strong>1-800-273-8255</strong> and through chat.
            </p>
            <p>
            The <a href="https://www.thehotline.org/" target="_blank">National Domestic Violence Hotline</a> is 24/7, confidential and free: <strong>1-800-799-7233</strong> and through chat.
            </p>
            <p>
            The <a href="https://hotline.rainn.org/online" target="_blank">National Sexual Assault Hotline</a> is 24/7, confidential and free: <strong>800.656.HOPE (4673)</strong> and through chat.
            </p>
            <p>
            The <a href="https://www.strongheartshelpline.org/" target="_blank">StrongHearts Native Helpline</a> for domestic/sexual violence is available 7am-10pm CT, confidential, and specifically for Native communities: <strong>1−844-762-8483</strong>.
            </p>
            <p>
            The <a href="https://www.translifeline.org/" target="_blank">Trans LifeLine</a> is staffed exclusively by trans operators is the only crisis line with a policy against non-consensual active rescue. 9am-3am CT: <strong>1-877-565-8860</strong>.
            </p>
            <p>
            <a href="https://www.nationalparenthelpline.org/" target="_blank">National Parent Helpline</a> Monday-Friday 12pm-9am CT emotional support and advocacy for parents: <strong>1-855-427-2736</strong>.
            </p>

            
            <br/>

            <div className="resource_header">Further Reading</div>
            <p>
            <a href="https://www.theguardian.com/world/2020/mar/13/coronavirus-latest-at-a-glance" target="_blank">
            The Guardian’s Latest At A Glance 
            </a></p><p>
            <a href="https://www.verywellmind.com/managing-coronavirus-anxiety-4798909" target="_blank">
            How To Cope With Anxiety During Coronavirus COVID-19 
            </a></p><p>
            <a href="https://www.theatlantic.com/ideas/archive/2020/03/who-gets-hospital-bed/607807/?utm_source=share&utm_campaign=share" target="_blank">
            The Extraordinary Decisions Facing Italian Doctors 
            </a></p><p>
            <a href="https://www.theatlantic.com/ideas/archive/2020/03/coronavirus-cancel-everything/607675/" target="_blank">
            Cancel Everything</a> by Yascha Mounk (The Atlantic)
            </p><p>
            <a href="https://www.commondreams.org/views/2020/03/10/six-quick-very-important-points-about-coronavirus-and-poverty-us" target="_blank">
            Six Quick—But Very Important—Points About Coronavirus and Poverty in the US
            </a></p><p>
            <a href="https://www.vox.com/2020/3/10/21171481/coronavirus-us-cases-quarantine-cancellation" target="_blank">
            How cancelled events and self-quarantines save lives  in one chart</a> (Vox)
            </p><p>
            <a href="https://www.wwltv.com/article/news/health/coronavirus/hospitality-workers-derail-new-orleans-coronavirus-news-conference/289-514f20ba-1f73-414a-ae6e-616650f740dd?fbclid=IwAR3SsNOU6mw-087F-FNsYF3I4MUeCtyHl81W8ZySxI4yDIxct2gMHc9Mm_0" target="_blank">
            New Orleans Hospitality Workers Alliance disrupt mayoral press conference “If We Work Sick, You Get Sick.”
            </a></p><p>
            <a href="https://www.upworthy.com/coronavirus-doctor-hospital-italy" target="_blank">
            “Every Ventilator Becomes Like Gold”
            </a></p><p>
            <a href="https://www.theatlantic.com/photo/2020/03/empty-spaces-due-coronavirus-fears/607666/" target="_blank">
            When Everyone Stays Home
            </a>
            </p>
            
            <br/>
          </div>
          </div>

            
            

          
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}