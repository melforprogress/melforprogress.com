import React from 'react'
import { FormattedMessage } from "react-intl";
import Layout from '../components/Layout'
import PageUnderNavbar from '../components/PageUnderNavBar'
import Issue from '../components/Resource'
import { oneLine } from "../translations/stringFileUtils";
import { localizedStringsKeypaths } from "../translations/es";
import { OutboundLink } from 'gatsby-plugin-google-analytics';



const issuesDefaults = [
  {
    title: 'SNAP',
    id: 'SNAP',
    text: [
      oneLine(`You can apply for SNAP benefits to help supplement your food budget:`),

    ]
  },
  {
    title: 'Golden Years Security Act',
    id: 'GoldenYears',
    text: [
      oneLine(`Mel believes our elders are owed respect and dignity in their golden years, regardless of their or their family’s financial circumstances.`),
      oneLine(`For many Americans, the ability to enjoy retirement has become increasingly difficult with rising costs of housing and healthcare. Elders who are retired should not be priced out of their homes or be unable to afford long-term quality healthcare. We need to expand the social safety net to fill in the current gaps between Medicare, Medicaid, and Social Security. `),
    oneLine(`Mel believes that everyone deserves to live out their golden years in dignity and will introduce the Golden Years Security Act to make sure that the basic needs of our elders are met: from preventing discrimination of LGBTQIA+ elders in nursing facilities to addressing the specialized medical needs that our current infrastructure fails to. The Golden Years Security Act will also subsidize and expand home care services, increase the number of union nurses and caretakers, provide resources to train caretakers, meet the challenges of end-of-life care, and help families that must choose assisted living facilities.`),
    ]
  },
  {
    title: 'Green New Deal',
    id: 'GND',
    text: [
      oneLine(`Climate change is the defining challenge of our time. Yet as global temperatures continue to rise and extreme weather events become more frequent, vulnerable front-line communities are forced to wait for insufficient market-based solutions. A Green New Deal is not only a possibility, it is now a necessity.`),
      oneLine(`Mel can be trusted to implement bold policies to reform our failing energy infrastructure because he is the only candidate pledging to reject contributions from fossil fuel executives, lobbyists and their front groups.`),
      oneLine(`To start, he will fight for public ownership of utilities to ensure critical access to basic utilities are not at the mercy of for-profit corporations who continue to hike rates while our communities face outages. In an ever-digitized world, access to the internet is a necessity. Mel will fight for a public option to the internet to end the stranglehold monopolies have on Queens’ residents on-line access, creating new jobs for local labor and providing high internet access to all communities.`),
    oneLine(`Mel will lead on policies to ensure workers can transition into new sectors and working families can earn a livable wage. He supports a federal jobs guarantee and jobs training for workers to transition into the new economy, because workers are at the heart of our economy and should be valued as such.`),
    ]
  },
  {
    title: 'Medicare for All',
    id: 'm4a',
    text: [
      oneLine(`In the 1970s, when other countries around the world had implemented or were implementing national health insurance plans, we put our health in the hands of private enterprise. Decades and billions of lobbying dollars later, the results are clear: the United States spends far more on healthcare than any other nation, with significantly worse outcomes — including the highest maternal mortality rate in the developed world.`),
      oneLine(`Executive salaries and compensation packages in the pharmaceutical and health insurance industries are astronomical, while medical bills steadfastly remain the leading cause of bankruptcy in this country. Over 30 million Americans remain uninsured, while tens of millions with coverage still face inadequate or denied care. Healthcare is a right, not a privilege, and it’s time to focus on the American people and their health over the profits of billion-dollar corporations.`),
    oneLine(`Mel supports Medicare for All — a federal universal single-payer program. No longer will our health be weighed against the balance sheets of massive corporations; with a single-payer program, all residents of the United States will be covered for their medical services, including doctor, hospital, preventive, long-term care, mental health, reproductive health care, dental, vision, prescription drug and medical supply costs. Eliminating co-pays, premiums, and deductibles means that lower- and middle-income Americans will no longer have to weigh the cost of paying for life-saving medicine against feeding their families.`),
    ]
  },
  {
    title: 'Women’s Rights',
    id: 'WomensRights',
    text: [
      oneLine(`Mel understands that women’s issues aren’t singular and are affected by the intersection of policy and social norms. Smart policy across multiple areas is needed to correct for the disproportionate burden our society places on women.`),
      oneLine(`Mel supports the unrestricted right to reproductive health care. Conservative state legislatures have stretched the boundaries of federal law and unleashed a cornucopia of impediments to make it functionally and materially impossible, if not technically illegal, to obtain essential healthcare. Mel will work to codify the protections of Roe v. Wade, and use federal legislation to protect pregnant people and healthcare workers. Mel will work to repeal the Hyde Amendment, and supports the EACH Woman Act of 2019, which aims to ensure affordable abortion coverage and care for all.`),
    oneLine(`Each year, women are forced to leave approximately $28.9 billion on the table, in order to take off work in order to care for aging parents. When Mel’s abuela got ill in her final year of life, his mom could not afford to take off work and juggled being a night-shift nurse with caring for her ailing parents. Mel’s desire to introduce a Golden Years Security Act was inspired by this reality, one that is not uncommon for women throughout the country.`),
    oneLine(`Mel worked for an organization that served formerly incarcerated women by connecting them with higher education, and maintaining wrap around services throughout their career. Mel knows that the challenges currently and formerly incarcerated women face are unique, which is why his Criminal Justice Reform positions aim to address the unique needs women face in our broken system.`),
    oneLine(`As technological innovation continues to rapidly reshape the modern workforce, the jobs that are most likely to be replaced by automation first are those most often held by women and people of color. That’s why Mel supports funding experiments in Universal Basic Income which would provide support as the nature of work is redefined. As a stay-at-home parent Mel knows first-hand that caretaking is an uncompensated full-time job essential to the health of our economy and society. Caretaking is meaningful labor, and should be recognized as such. While more mothers are in the labor force today than ever before, they are also spending more time on childcare as well, which is why Mel supports Universal Childcare to ease the burden on families who don’t have a choice between careers and raising a family.`),   
    ]
  },
  {
    title: 'Immigration Justice',
    id: 'Immigration',
    text: [
      oneLine(`The Trump administration has taken pride in policies that rip away children from their families, deprive our undocumented friends and neighbors of due process and dignity, and erode any accountability of immigration agencies. It’s time to shut down detention centers and terminate all of the private prison contracts that profit off them. We must abolish ICE, end the militarization of the CBP, and develop sensible policy when it comes to our borders.`),
      oneLine(`Mel understands that we need to act against the atrocities being committed in our country. Asylum seekers should be fast-tracked and given the chance to build the better life that they came here seeking. America should be a beacon of hope, not a stage for cruel and inhumane acts against refugees and immigrants.`),
      oneLine(`Undocumented immigrants who were brought here as children only know America as their home. These children have grown up in America and are woven into the very fabric of our community. Mel will fight to secure DACA and DAPA, creating a path to citizenship for our DREAMer friends and neighbors. Mel is the descendant of immigrants who understands that America can and must do better for families.`),
    oneLine(`It’s time for America to value the work and contributions of immigrants.  By reforming our immigration infrastructure, Mel believes that we can keep families together, build safer communities, and restore America’s promise as a land of refuge and opportunity.`),
    ]
  },
  {
    title: 'Investing in Public Education',
    id: 'Education',
    text: [
      oneLine(`Education is the cornerstone of our society; a quality education gives students access to opportunity and enables economic mobility. For too long, we’ve failed our public schools; Mel believes that we need to properly invest in free public education from Pre-K on up. But it’s not just about throwing money at the problem, it’s about identifying successful outcomes and investing in the people that ensure them. From increasing teacher pay, to free childcare, Mel recognizes that educational outcomes are not just about schools, they are also dependent on the ability of working-class people to provide for their families and build a good life. The ability of working-class families to live the lives they deserve has been sacrificed in favor of tax breaks for the wealthy, and disinvestment in our public schools is part of that same trend.`),
      oneLine(`Teachers have gone on strike across the country, rallying for a deeper investment in public education. These are teachers who are underpaid, overworked, and paying for needed school supplies out of their own pockets because our country places too little value on their work and on the well-being of the children that they are educating. In 2019, we continue to see segregation in our K–12 schools, and with students of color and students in underserved areas suffering as a result. Mel believes that our teachers should be well compensated, that our underserved students deserve a deeper investment in their future, and that the income of a child’s parent, or their race, should not determine the quality of their education.`),
      oneLine(`If elected, Mel will champion federal investment in our public schools, work to increase Title I funding to ensure underserved schools get the funding they need, fully fund the Department of Education's Office of Civil Rights, work to end student lunch debt and make sure all of our kids have the nourishment they need to learn, increase access to vital to ESL education, and fund school transportation.`),
      oneLine(`Charter schools lack accountability and have drained funding from our public education system, having a disproportionate negative impact on communities of color. Mel supports a ban on for-profit charter schools as well as the NAACP’s moratorium on public funds being used to expand the charter system, until their impact has been fully audited. Furthermore, non-profit charter schools should comply with the same oversight requirements as public schools, increase parent involvement, and support efforts for teachers to unionize.`),
    ]
  },
  {
    title: 'Labor',
    id: 'Labor',
    text: [
      oneLine(`Mel was born into a union household: he understands the importance of the labor movement to working families like his. He will fight to strengthen worker protections, to allow workers to organize in their workplace, and to ensure the needs of all workers are met.`),
      oneLine(`But for too long, members of Congress have assaulted the labor movement and supported management over workers. Mel will fight for legislation that increases labor organizing rights and brings power back to the laborers. He supports the Protect the Right to Organize (PRO) Act and the Employee Free Choice Act, as well as ending “at will” employment — all of which would provide workers more freedom to effectively organize and fight for their rights without fear of retaliation and retribution from their employers.`),
      oneLine(`Mel also supports the Raise the Wage Act and the Fight for $15 — specifically supporting legislation that will require the federal minimum wage to be set to the regional cost of living and matched to inflation. He believes in expanding paid time off and paid family leave in order to ensure needs of working families can be comfortably met. He supports the Butch Lewis Act in addition to legislation that prevents worker pensions from being cut.`),
      oneLine(`Mel is a strong advocate for decreasing class sizes and paying our public school teachers $62K minimum and our adjuncts $7k. He is also a supporter of safe staffing at hospitals. The expansion of public sector work has historically led to well-paying jobs and careers across the country, creating opportunities for inclusive community growth.`),
      oneLine(`As construction booms in the city, Mel understands the need for subsidies to come with reciprocity, and supports prevailing wage standards with public dollars, as well as pathways to apprenticeship and local hire. He will push to pass incentives to grow union apprenticeship programs to meet the construction industry's needs. Mel will always advocate for protecting Davis-Bacon, and expanding definitions of public works when it is possible.`),
      oneLine(`With the amount of non-union jobs increasing every year in the private sector, Mel will fight for a whistleblower visa program that protects immigrant workers who speak out against workplace discrimination, sexual harassment, stolen wages, and unsafe working conditions.`),
      oneLine(`There is also a need to tackle the growing crisis of misclassification and workers’ rights in the gig economy.  The gig economy does not refer just to app-based work, but also domestic work, and other non-traditional forms of employment.  Ensuring workers are classified properly, that employers pay their fair share of taxes, and that access to benefits exists is essential to the well-being of working families.  Mel will stand with workers and against employment misclassification.`),
      oneLine(`This is a campaign aligned with the national labor movement, fully supporting workers who deserve to organize without fearing for their jobs or livelihoods.`),
    ]
  },
  {
    title: 'College for All',
    id: 'College',
    text: [
      oneLine(`Mel believes, like the U.N. does, that education is a human right. Tuition and fees at public universities have ballooned over the past 30 years, leaving an entire generation of young people with an unfair choice: sacrifice higher education or take out tens of thousands of dollars in student debt. The promise of higher pay has created a vicious cycle in which students take out increasingly larger loans only to realize that median hourly wages for college graduates have not kept up.`),
      oneLine(`Mel will fight for public colleges, universities, and trade schools throughout the country to be tuition-free. He also supports a one-time policy of all student debt cancellation, including both federal and private sector student loans. Mel will support legislation the requires the Department of Education to forgive loans guaranteed by the U.S. government, while the federal government directly purchases private student loan debt from private banks and lenders.`),
    ]
  },
  {
    title: 'Public Banking',
    id: 'Banking',
    text: [
      oneLine(`City and state governments currently manage their finances with privately-owned banks, giving Wall Street institutions the power to speculate with public dollars, to lend money to municipalities at high interest rates, and to charge large fees for banking services. This is no surprise as private banks have a responsibility to aggressively maximize short-term profits, not invest in the best interests of the community. We need an alternative financial institution to put people before profit: public banks.`),
      oneLine(`Public banks will answer to the public — not shareholder. By shifting the priority from shareholders to the public, public banks can both manage government finances and prioritize the needs of our communities and the public good.`),
      oneLine(`Mel will fight for public banking because low-interest capital is necessary for a just and equitable economy. In order to thrive in communities, small business owners need access to low-interest loan alternatives — not be held hostage by outrageous rates of private loans.`),
    oneLine(`As a supporter of the Green New Deal, Mel believes public banking is a crucial component of decarbonizing the economy, building green infrastructure projects, and investing in clean energy alternatives. The bottom line is this: so long as the private banks have investments in industries like oil, they have no incentive to put dollars in sustainable, long-term investments into our community or the Green New Deal.`),
    ]
  },
  {
    title: 'Funding Universal Basic Income Experiments',
    id: 'UBI',
    text: [
      oneLine(`Rapid technological innovation has already changed American employment. Advances in automation, artificial intelligence and deep machine learning, continues to eviscerate opportunities for work and is contributing to an already-growing gig economy. As temporary, part-time, and non-traditional jobs redefine the labor market, Mel believes that we need to enable people to live better lives, not leave them to struggle with wage stagnation and income inequality.`),
      oneLine(`Investing in Universal Basic Income experiments can reduce poverty, begin to address the race and gender wealth gap, create opportunities for new types of work, and reinforce a sense of dignity in people’s lives. A basic level of financial stability gives people the freedom to leave a job that doesn’t treat them well, to pursue opportunities such as entrepreneurship, or to the freedom to choose a new, more fulfilling career that may be non-traditional. UBI is not only a necessity to prepare for the continuing transformation of work, but also for the millions of Americans who currently do not have financial security to lead happy and healthy lives.`),
    oneLine(`As a stay at home dad and the son of a single mom, Mel understands how parenthood can be an unrecognized form of labor. He believes Universal Basic Income is a way to value all types work and Mel will only champion UBI policies that will work in tandem with existing social safety nets and increased minimum wage standards. `),
    ]
  },
  {
    title: 'Criminal Justice Reform',
    id: 'Justice',
    text: [
      oneLine(`There is no doubt that we have a broken criminal justice system, with black and brown communities disproportionately represented in the system. America incarcerates nearly 2.5 million individuals, the most of any developed nation. Mel will work to address our nation’s mass incarceration crisis and fight for legislation to address the root causes that fuels the system.`),
      oneLine(`Mel is proud to have worked alongside impacted individuals fighting to eliminate barriers to higher education for currently and formerly incarcerated people. Mel knows that those closest to the problem are closest to the solution and their experiences help form his views on criminal justice reform.  The coalition that Mel worked with succeeded in seeing the introduction of the REAL Act in Congress, which would restore Pell grant access to incarcerated students (the coalition also worked with the Obama DOE which launched the Pell Pilot Program).  However, that bill still languishes in Congress despite studies that show access to higher education while incarcerated leads to lower recidivism rates and improved outcomes for impacted individuals and their families. Mel will make it a priority to fight for its passage to restore the harm done by the 1994 Crime Bill.`),
      oneLine(`Mel believes ending cash bail must be a national priority to ensure that those that have not even been convicted of a crime are not further punished simply for being poor. Much needed reforms must be instituted to end cash bail without furthering the surveillance of individuals while awaiting trial.`),
    oneLine(`The rise in the incarceration rates of women are often left out of the national conversation or absorbed into the general conversation. However, the rate of incarceration for women has actually been increasing nationwide. In New York, while the rate for women has been slowly declining, it has not kept pace with the reduction of rates for men. Many women who find themselves in the system are victims of domestic abuse and prison furthers that trauma. Our jails and prisons are not mental health or counseling facilities. Mel believes the federal government must invest in diversion programs for all, but especially for women who have fewer options available to them, and that they are provided with appropriate trauma informed services.`),
    ]
  },
  {
    title: 'Repealing SESTA-FOSTA',
    id: 'SESTA',
    text: [
      oneLine(`Another priority for Mel is the repeal of SESTA-FOSTA. This law was intended to address human trafficking, but in practice, has only made the situation worse by driving sex workers into the shadows while making it more difficult to combat legitimate traffickers. Sex work is work.`),
      oneLine(`Mel believes that we need to decriminalize (as opposed to legalize) sex work which has led to the disproportionate targeting and prosecution of migrant workers and those in the trans community. Repealing SESTA-FOSTA and bringing sex workers into the policymaking conversation will lead to effective human trafficking legislation that is informed by those closest to the problem, while ensuring that those who rely on selling or trading sex are not prosecuted for simply trying to survive.`),
    ]
  },
  {
  title: 'Marijuana Legalization',
    id: 'Marijuana',
    text: [
      oneLine(`Mel fully supports legalizing marijuana and vacating and expunging all past marijuana-related convictions. Legalized marijuana revenue should be reinvested in the communities that have been most adversely impacted by the War on Drugs and racist broken windows policing. African-Americans are four times as likely to get arrested for marijuana as white Americans, despite both populations having similar rates of marijuana use. This has been a tool of mass incarceration, and a boon to the prison industrial complex. Corporations have profited off of the destruction of lives and communities through the criminalization of marijuana, and are now looking to profit off of its legalization. Impacted communities should be the first to benefit from legalization and the first in line to receive licenses and small business loans.`),
    ]
  },
  {
    title: 'Veterans',
    id: 'Veterans',
    text: [
      oneLine(`As a Congressional aide, Mel worked closely with former service members as a liaison to the Department of Veteran’s Affairs. While Mel believes we need to end the forever wars, and develop foreign policy that puts mutual collaboration and cooperation at the fore, he also understands that our nation still owes a debt to those who have and continue to serve in wars they had no choice in entering. Billions are spent on Defense each fiscal year, but those dollars find themselves in the pockets of defense contractors and private corporations that make up the military industrial complex.`),
      oneLine(`Mel will fight to ensure that the VA is properly funded, reverse legislation that makes it easier to fire VA employees, and strengthen programming that does outreach in order to provide mental health services to servicemembers. Mel will also fight to legislate permanent protections for members of the LGBTQIA community who wish to serve.`),
    ]
  },
  {
    title: 'LGBTQIA Rights',
    id: 'LGBT',
    text: [
      oneLine(`Securing the rights of our LGBTQIA neighbors is vital, and isn’t a single, stand-alone issue. The LGBTQIA community is affected by all the issues addressed above, and that’s why you’ll see specific policies protecting LGBTQIA folks in issues like elder care, veterans, and repealing SESTA-FOSTA. The current administration’s assault on the LGBTQIA community is unacceptable. LGBTQIA people are still forced to fight for their rights in their towns, in congress, and in their day to day lives because they lack basic legal protections in states across the country. Federal law must provide consistent non-discrimination protections based on sexual orientation and gender identity. Mel will work tirelessly to ensure equal rights under the protection of the law to every member of this community. Mel supports the Equality Act which would provide consistent non-discrimination protections for LGBTQ people across key areas of life including education, credit, housing, public spaces, and more. He will be a champion for LGBTQIA rights, because for any of us to be truly free, we all must be. `),
    ]
  },
  {
    title: 'Data & Privacy Protections',
    id: 'Privacy',
    text: [
      oneLine(`The separation between the real world and the digital world has all but disappeared in the last decade, and we need Congress to keep pace with the advances in technological innovation and to craft proactive legislation that defends our 4th Amendment protections. The massive amounts of data collected by corporations and governments — whether they’re tracking our physical movements with smartphone location and facial recognition, or our digital movements with cookies and APIs — means that simply by interacting with the world, we’re acquiescing our right to privacy.`),
      oneLine(`We need smart legislation that responds to the new norm; leaving our corporations to self-regulate our digital landscape is unacceptable. The European Union’s General Data Protection Regulation provides a model for a first step in crafting meaningful data & privacy protection legislation to shield users from being exploited and commodified by the technologies they interact with, both willingly and unwillingly.`),
    ]
  },
  {
    title: 'Publicly Financed Campaigns',
    id: 'Campaigns',
    text: [
      oneLine(`The Supreme Court’s decision in Citizens United opened the door to the influx of dark money and unregulated spending in our campaigns. Equating money with speech and defining corporations as people, the decision stifled the democratic process by drowning out the voices of individuals across the country. `),
      oneLine(`In New York City, first-time and grassroots candidates running for city elected positions can participate in the city’s matching funds program. Mel has long believed that we need to have publicly financed campaigns on the federal level. Each election cycle millions of dollars are spent on advertisements, consultants, and an entire cottage industry that has developed around campaigns that drowns out meaningful debate and careful analysis of candidates’ actual policies. By creating a federal campaign finance program that sets limits on spending and raising, our elections will be fairer and more accessible to candidates and voters alike.`),
    ]
  },
];

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
              Check out the resources below for help and information that can get us all through this time of crisis. If you have resoruces to add, please <a href="mailto:info@melforprogress.com">get in touch</a>.
            </div>
            

            <div className="resource_header">Food</div>
            <div>
            You can apply for <a href="https://www1.nyc.gov/…/hra/…/snap-benefits-food-program.page">SNAP Benefits</a> to help supplement your food budget.
            </div>
            <div>
            <a href="https://www.foodbanknyc.org/get-help/">Food Bank / Pantry locator</a>
            </div><br/>
            
            <div className="resource_header">Work</div>
            <div>
            Cuomo has ended the seven-day waiting period before you can <a href="https://labor.ny.gov/ui/how_to_file_claim.shtm">apply for unemployment</a> if you have lost a W-2 job (restaurant/retail/etc.)
            </div>
            <div>
            If you run a small business (e.g. yoga/pilates, personal training, etc. incorporated as an LLC or other), you can <a href="https://www1.nyc.gov/site/sbs/businesses/covid19-business-outreach.page">apply for a no-interest loan</a> and NYC will cover 40% of payroll costs for businesses with fewer than 5 employees.
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

            
            

          
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}