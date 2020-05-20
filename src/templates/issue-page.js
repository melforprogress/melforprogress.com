import React from 'react'
import { FormattedMessage } from "react-intl";
import Layout from '../components/Layout'
import PageUnderNavbar from '../components/PageUnderNavBar'
import Issue from '../components/Issue'
import { oneLine } from "../translations/stringFileUtils";
import { Link } from 'gatsby'
import { localizedStringsKeypaths } from "../translations/es";
import Housing_bug from '../img/content/policies/Policy-Housing.png'
import GoldenYears_bug from '../img/content/policies/Policy-GoldenYears.png'
import GreenNewDeal_bug from '../img/content/policies/Policy-GreenNewDeal.png'
import M4A_bug from '../img/content/policies/Policy-M4A.png'
import Women_bug from '../img/content/policies/Policy-Women.png'
import UBI_bug from '../img/content/policies/Policy-UBI.png'
import Banking_bug from '../img/content/policies/Policy-Banking.png'
import Campaigns_bug from '../img/content/policies/Policy-CampaignFin.png'
import College_bug from '../img/content/policies/Policy-College.png'
import Education_bug from '../img/content/policies/Policy-Education.png'
import Justice_bug from '../img/content/policies/Policy-Justice.png'
import LGBT_bug from '../img/content/policies/Policy-LGBT.png'
import Marijuana_bug from '../img/content/policies/Policy-Marijuana.png'
import Peace_bug from '../img/content/policies/Policy-Peace.png'
import Immigration_bug from '../img/content/policies/Policy-Immigration.png'
import Privacy_bug from '../img/content/policies/Policy-Privacy.png'
import SESTA_bug from '../img/content/policies/Policy-SESTA.png'
import Veterans_bug from '../img/content/policies/Policy-Veterans.png'
import Labor_bug from '../img/content/policies/Policy-Labor.png'
import GunControl_bug from '../img/content/policies/Policy-GunControl.png'
import ForeignPolicy_bug from '../img/content/policies/Policy-ForeignPolicy.png'
import ReproJustice_bug from '../img/content/policies/Policy-ReproJustice.png'
import Disability_bug from '../img/content/policies/Policy-Disability.png'


const issuesDefaults = [
  {
    title: 'Affordable Housing for All',
    id: 'Housing',
    bugurl: Housing_bug,
    text: [
      oneLine(`A housing guarantee affirms Mel’s belief that housing is a human right. While an improving economy has benefited real estate and land development corporations, wages are not keeping up with rising housing prices and rent. In Queens alone, countless working families are being priced out of their neighborhoods, and the number of people experiencing homelessness is increasing. `),
      oneLine(`When the scales are tipped in favor of wealthy developers, a new vision for social housing in America is necessary. Mel will introduce legislation to create 25 million new social housing units by 2050 building upon recommendations by the People’s Policy Project and The People’s Action Homes Guarantee. `),
	  oneLine(`This comprehensive plan aims to meet the sustainability goals of the Green New Deal, create new jobs that pay prevailing wages, desegregate poverty, eliminate re-entry barriers for formerly incarcerated people, and create housing that is affordable to all. `),
    ]
  },
  {
    title: 'Golden Years Security Act',
    id: 'GoldenYears',
    bugurl: GoldenYears_bug,
    text: [
      oneLine(`Mel believes our elders are owed respect and dignity in their golden years, regardless of their or their family’s financial circumstances.`),
      oneLine(`For many Americans, the ability to enjoy retirement has become increasingly difficult with rising costs of housing and healthcare. Elders who are retired should not be priced out of their homes or be unable to afford long-term quality healthcare. We need to expand the social safety net to fill in the current gaps between Medicare, Medicaid, and Social Security. `),
	  oneLine(`Mel believes that everyone deserves to live out their golden years in dignity and will introduce the Golden Years Security Act to make sure that the basic needs of our elders are met: from preventing discrimination of LGBTQIA+ elders in nursing facilities to addressing the specialized medical needs that our current infrastructure fails to. The Golden Years Security Act will also subsidize and expand home care services, increase the number of union nurses and caretakers, provide resources to train caretakers, meet the challenges of end-of-life care, and help families that must choose assisted living facilities.`),
    ]
  },
  {
    title: 'Green New Deal',
    id: 'GND',
    bugurl: GreenNewDeal_bug,
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
    bugurl: M4A_bug,
    text: [
      oneLine(`In the 1970s, when other countries around the world had implemented or were implementing national health insurance plans, we put our health in the hands of private enterprise. Decades and billions of lobbying dollars later, the results are clear: the United States spends far more on healthcare than any other nation, with significantly worse outcomes — including the highest maternal mortality rate in the developed world.`),
      oneLine(`Executive salaries and compensation packages in the pharmaceutical and health insurance industries are astronomical, while medical bills steadfastly remain the leading cause of bankruptcy in this country. Over 30 million Americans remain uninsured, while tens of millions with coverage still face inadequate or denied care. Healthcare is a right, not a privilege, and it’s time to focus on the American people and their health over the profits of billion-dollar corporations.`),
	  oneLine(`Mel supports Medicare for All — a federal universal single-payer program. No longer will our health be weighed against the balance sheets of massive corporations; with a single-payer program, all residents of the United States will be covered for their medical services, including doctor, hospital, preventive, long-term care, mental health, reproductive health care, dental, vision, prescription drug and medical supply costs. Eliminating co-pays, premiums, and deductibles means that lower- and middle-income Americans will no longer have to weigh the cost of paying for life-saving medicine against feeding their families.`),
    ]
  },
  {
    title: 'Foreign Policy',
    id: 'ForeignPolicy',
    bugurl: ForeignPolicy_bug,
    text: [
      oneLine(`A foreign policy based on human rights and justice is the best foreign policy to ensure America’s national security. Mel believes that the Iraq invasion, our quagmire in Afghanistan, US support for right-wing regime change in Latin America, escalation with Iran, and our lockstep support for Israeli occupation have made us less safe and have caused undue harm around the world.`),
      oneLine(`The US must stand for justice everywhere, whether it is for Muslims in India threatened by state-supported supremacist violence, Uighurs and Tibetans oppressed by China, Palestinians living under Israeli apartheid, Iranians and Venezuelans whose lives are choked by punitive US sanctions, or people living under right-wing regimes in Bolivia and Brazil. We must stop selling arms to oppressive regimes like Saudi Arabia, who are using them to bomb civilians in other countries.`),
    oneLine(`In Palestine and Israel, we must take special responsibility for the harms caused by decades of one-sided US support for Israel. We must stop fueling the conflict and end all military aid to Israel, and instead work for solutions that guarantee security, justice, and full equality to Israelis and Palestinians, so that Israeli and Palestinian children alike can live in peace and have the chance to grow and prosper.`),
    oneLine(`Mel also believes that money matters. He is the only candidate in NY-6 that has signed CODEPINK’s pledge to divest from war, and the only candidate refusing any donations from defense contractors. By contrast, the opponent takes thousands of dollars from defense contractors and bombs manufacturers like Raytheon, Lockeheed Martin, Boeing, and Northrop Grumman, while consistently voting against reducing our military budget by a meager 1%.`),
    oneLine(`We must not foster, support, aid or abet in oppression anywhere. Not home, not abroad. We must invest in a future beyond war.`)
    ]
  },
  {
    title: 'Women’s Rights',
    id: 'WomensRights',
    bugurl: Women_bug,
    text: [
      oneLine(`Mel understands that women’s issues aren’t singular and are affected by the intersection of policy and social norms. Smart policy across multiple areas is needed to correct for the disproportionate burden our society places on women.`),
      oneLine(`Mel supports the unrestricted right to reproductive health care. Conservative state legislatures have stretched the boundaries of federal law and unleashed a cornucopia of impediments to make it functionally and materially impossible, if not technically illegal, to obtain essential healthcare. Mel will work to codify the protections of Roe v. Wade, and use federal legislation to protect pregnant people and healthcare workers. Mel will work to repeal the Hyde Amendment, and supports the EACH Woman Act of 2019, which aims to ensure affordable abortion coverage and care for all.`),
	  oneLine(`Each year, women are forced to leave approximately $28.9 billion on the table, in order to take off work in order to care for aging parents. When Mel’s abuela got ill in her final year of life, his mom could not afford to take off work and juggled being a night-shift nurse with caring for her ailing parents. Mel’s desire to introduce a Golden Years Security Act was inspired by this reality, one that is not uncommon for women throughout the country.`),
	  oneLine(`Mel worked for an organization that served formerly incarcerated women by connecting them with higher education, and maintaining wrap around services throughout their career. Mel knows that the challenges currently and formerly incarcerated women face are unique, which is why his Criminal Justice Reform positions aim to address the unique needs women face in our broken system.`),
	  oneLine(`As technological innovation continues to rapidly reshape the modern workforce, the jobs that are most likely to be replaced by automation first are those most often held by women and people of color. That’s why Mel supports funding experiments in Universal Basic Income which would provide support as the nature of work is redefined. As a stay-at-home parent Mel knows first-hand that caretaking is an uncompensated full-time job essential to the health of our economy and society. Caretaking is meaningful labor, and should be recognized as such. While more mothers are in the labor force today than ever before, they are also spending more time on childcare as well, which is why Mel supports Universal Childcare to ease the burden on families who don’t have a choice between careers and raising a family.`),		
    ]
  },
  {
    title: 'Reproductive Justice',
    id: 'ReproJustice',
    type: 'list',
    bugurl: ReproJustice_bug,
    text: [
      oneLine(`No-cost contraception: All contraceptive services must be cost-free, including prescriptive consultations, contraceptive products, and surgeries.`),
      oneLine(`Fund research for long-acting and reversible birth control for people with testes and sperm: We must end the unequal burden of contraception only available to those with uteruses and eggs, and provide dependable, safe, and long acting reversible birth control that can be used by those with testes and sperm.`),
      oneLine(`Universal comprehensive sex education: High quality, sex-positive, consent-based sex education is essential to building a community able to make informed decisions.`),
      oneLine(`Cost-free STI prevention and care: To quell transmission rates and improve quality of life, STI prevention and care must be easily accessed by all.`),
      oneLine(`Repeal the Hyde Amendment: We must repeal the Hyde Amendement and ensure that abortion (elective and non-elective) is legally understood as a necessary medical procedure.`),
      oneLine(`No-cost abortion services: In order for a person to assert their right to choose, there must be no financial impediment to their ability to access essential abortion services.`),
      oneLine(`No cost contraception: All contraceptive services must be cost-free, including prescriptive consultations, contraceptive products, and surgeries.`),
      oneLine(`No state shall have the ability to place restriction on abortion services or providers: For too long states and forced-birth advocates have nibbled around the edges of Roe v Wade. We must legislate abortion as a right and redefine “undue burden” specifically in order to eliminate the opportunity for bad actors to corrupt the intent of the law. We must also eliminate any trimester or fetal viability restrictions.`),
      oneLine(`No-cost, high-quality, universal pre- & post-natal care: To improve maternal and infant health and birth outcomes pre- and post-natal care must be guaranteed.`),
      oneLine(`Labor support stipend: A stipend given to the birthing parent to be used for doula care, or to ensure a family member or friend is able and prepared to assist with labor and birth.`),
      oneLine(`Strengthening the midwifery profession: For years BIPOC have been excluded from midwifery. We must strengthen the profession by eliminating white and male supremacy. Providing scholarships and study stipends for communities that are traditionally excluded and therefore experience the worst birth outcomes.`),
      oneLine(`Postpartum depression screenings for every new parent in America: Postpartum depression can severely limit the ability of a new parent to care for themselves and their child. Screening can do much to identify and provide resources to a new parent who may be suffering.`),
      oneLine(`Legalize gestational surrogacy and support surrogate unionization across all 50 states: Criminalizing an economic choice serves no one. Surrogates should enjoy the benefits of unionization to prevent exploitation while retaining agency over their bodies.`),
      oneLine(`2-year parental leave for the birthing/lactating parent, 4 months for the supportive partner, to be distributed however best serves the interests of the family: It’s time we join the rest of the world in providing our parents and children with time to bond, rest, and grow together without the worry of losing a job or income.`),
      oneLine(`NICU leave: Paid time off or a stipend for parents with infants in the NICU. This is time in addition to the two-year and four-month guaranteed parental leave to help support the incredibly stressful NICU period.`),
      oneLine(`Free childcare 0-5 years old: High-quality universal childcare is essential for building stable, successful families.`),
      oneLine(`Free Universal Pre-K: All children should have access to high-quality early childhood education in order to close the achievement gap.`),
      oneLine(`Raise the wages of every childcare worker & pre-school teacher: Let’s reward those who care for our most valuable and vulnerable.`),
      oneLine(`Domestic violence assistance: Healthy families need safe homes.`),
      oneLine(`None of this is enough without adequate wages to support families, a homes guarantee to end homelessness and a larger scope of economic and social justice.`),
    ]
  },
  {
    title: 'Immigration Justice',
    id: 'Immigration',
    bugurl: Immigration_bug,
    text: [
      oneLine(`The Trump administration has taken pride in policies that rip away children from their families, deprive our undocumented friends and neighbors of due process and dignity, and erode any accountability of immigration agencies. It’s time to shut down detention centers and terminate all of the private prison contracts that profit off them. We must abolish ICE, end the militarization of the CBP, and develop sensible policy when it comes to our borders.`),
      oneLine(`Mel understands that we need to act against the atrocities being committed in our country. Asylum seekers should be fast-tracked and given the chance to build the better life that they came here seeking. America should be a beacon of hope, not a stage for cruel and inhumane acts against refugees and immigrants.`),
      oneLine(`Undocumented immigrants who were brought here as children only know America as their home. These children have grown up in America and are woven into the very fabric of our community. Mel will fight to secure DACA and DAPA, creating a path to citizenship for our DREAMer friends and neighbors. Mel is the descendant of immigrants who understands that America can and must do better for families.`),
    oneLine(`It’s time for America to value the work and contributions of immigrants.  By reforming our immigration infrastructure, Mel believes that we can keep families together, build safer communities, and restore America’s promise as a land of refuge and opportunity.`),
    ]
  },
  {
    title: 'Disability Justice',
    id: 'Disability',
    bugurl: Disability_bug,
    text: [
      oneLine(`Thirty years after the passage of the Americans with Disabilities Act (ADA), people with disabilities still face poverty rates nearly three times higher than people without disabilities; are disproportionately more likely to live and work in conditions that are hazardous to their health and are hugely overrepresented in our nation’s prisons and jails.`),
      oneLine(`The nexus of disability policy must be recognition that each disability is unique, with unique needs that existing policies have failed to address. I will fight to ensure American laws, statistics and programs finally recognize developmental, hearing, mental, mobility, vision issues are unique and reject the ableism that shapes present inclusion initiatives. I recognize that accessibility will spur new jobs, programs, products and services that will create opportunities for everyone to pursue rich lives.`),
      oneLine(`We must guarantee:`),
      oneLine(`• Health care, including mental health care, home- and community-based services and supports without waitlists, asset or income restrictions, as a human right to everyone in America.`),
      oneLine(`• Ensure Medicaid coverage of hearing, magnification, and mobility aids.`),
      oneLine(`• Expand funding for research into treatments and cures, such as the passage of H.R. 2620, the Faster Treatments and Cures for Eye Diseases Act`),
      oneLine(`• End subminimum wage for workers with disabilities while guaranteeing jobs and living wages in the community for all.`),
      oneLine(`• Expand, and increase effective enforcement of the ADA.`),
      oneLine(`• End the use of arbitration clauses in employment agreements which prevent disabled people from ensuring employers provide adequate accommodations.`),
      oneLine(`• Pass the Disability Integration Act, to establish a clear standard for the delivery of high-quality services.`),
      oneLine(`• Enact the Social Security Caregiver Credit Act to compensate the more than 43 million unpaid caregivers for their work.`),
      oneLine(`• Protect and expand the Social Security Disability Insurance and Supplemental Security Income`),
      oneLine(`• Eliminate the SSDI benefits cliff.`),
      oneLine(`• Eliminate the SSI asset test.`),
      oneLine(`• Expand benefits across-the-board for all Social Security beneficiaries, including SSI, and increase and index the SSI benefit level so that it is equal to 125 percent of the poverty line.`),
      oneLine(`• Remove the marriage penalty from SSI benefits.`),
      oneLine(`• Ensure all people with disabilities and older Americans will possess the right to convert their existing home- and community-based services into a self-directed model of service, where those receiving support may choose who provides them with assistance.`),

    ]
  },
  {
    title: 'Investing in Public Education',
    id: 'Education',
    bugurl: Education_bug,
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
    bugurl: Labor_bug,
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
    bugurl: College_bug,
    text: [
      oneLine(`Mel believes, like the U.N. does, that education is a human right. Tuition and fees at public universities have ballooned over the past 30 years, leaving an entire generation of young people with an unfair choice: sacrifice higher education or take out tens of thousands of dollars in student debt. The promise of higher pay has created a vicious cycle in which students take out increasingly larger loans only to realize that median hourly wages for college graduates have not kept up.`),
      oneLine(`Mel will fight for public colleges, universities, and trade schools throughout the country to be tuition-free. He also supports a one-time policy of all student debt cancellation, including both federal and private sector student loans. Mel will support legislation the requires the Department of Education to forgive loans guaranteed by the U.S. government, while the federal government directly purchases private student loan debt from private banks and lenders.`),
    ]
  },
  {
    title: 'Public Banking',
    id: 'Banking',
    bugurl: Banking_bug,
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
    bugurl: UBI_bug,
    text: [
      oneLine(`Rapid technological innovation has already changed American employment. Advances in automation, artificial intelligence and deep machine learning, continues to eviscerate opportunities for work and is contributing to an already-growing gig economy. As temporary, part-time, and non-traditional jobs redefine the labor market, Mel believes that we need to enable people to live better lives, not leave them to struggle with wage stagnation and income inequality.`),
      oneLine(`Investing in Universal Basic Income experiments can reduce poverty, begin to address the race and gender wealth gap, create opportunities for new types of work, and reinforce a sense of dignity in people’s lives. A basic level of financial stability gives people the freedom to leave a job that doesn’t treat them well, to pursue opportunities such as entrepreneurship, or to the freedom to choose a new, more fulfilling career that may be non-traditional. UBI is not only a necessity to prepare for the continuing transformation of work, but also for the millions of Americans who currently do not have financial security to lead happy and healthy lives.`),
    oneLine(`As a stay at home dad and the son of a single mom, Mel understands how parenthood can be an unrecognized form of labor. He believes Universal Basic Income is a way to value all types work and Mel will only champion UBI policies that will work in tandem with existing social safety nets and increased minimum wage standards. `),
    ]
  },
  {
    title: 'Criminal Justice Reform',
    id: 'Justice',
    bugurl: Justice_bug,
    text: [
      oneLine(`There is no doubt that we have a broken criminal justice system, with black and brown communities disproportionately represented in the system. America incarcerates nearly 2.5 million individuals, the most of any developed nation. Mel will work to address our nation’s mass incarceration crisis and fight for legislation to address the root causes that fuels the system.`),
      oneLine(`Mel is proud to have worked alongside impacted individuals fighting to eliminate barriers to higher education for currently and formerly incarcerated people. Mel knows that those closest to the problem are closest to the solution and their experiences help form his views on criminal justice reform.  The coalition that Mel worked with succeeded in seeing the introduction of the REAL Act in Congress, which would restore Pell grant access to incarcerated students (the coalition also worked with the Obama DOE which launched the Pell Pilot Program).  However, that bill still languishes in Congress despite studies that show access to higher education while incarcerated leads to lower recidivism rates and improved outcomes for impacted individuals and their families. Mel will make it a priority to fight for its passage to restore the harm done by the 1994 Crime Bill.`),
      oneLine(`Mel believes ending cash bail must be a national priority to ensure that those that have not even been convicted of a crime are not further punished simply for being poor. Much needed reforms must be instituted to end cash bail without furthering the surveillance of individuals while awaiting trial.`),
	  oneLine(`The rise in the incarceration rates of women are often left out of the national conversation or absorbed into the general conversation. However, the rate of incarceration for women has actually been increasing nationwide. In New York, while the rate for women has been slowly declining, it has not kept pace with the reduction of rates for men. Many women who find themselves in the system are victims of domestic abuse and prison furthers that trauma. Our jails and prisons are not mental health or counseling facilities. Mel believes the federal government must invest in diversion programs for all, but especially for women who have fewer options available to them, and that they are provided with appropriate trauma informed services.`),
    ]
  },
  {
    title: 'Gun Control',
    id: 'GunControl',
    bugurl: GunControl_bug,
    text: [
      oneLine(`Despite what the NRA and their right-wing network of politicians and lobbyists say, millions of dollars are being spent to achieve one goal: to increase gun sales. These lobbying efforts have attacked common-sense gun legislation and its advocates in order to protect industry profits over saving lives.`),
      oneLine(`Mel supports strict gun control legislation, universal background checks, regulating gun manufacturers, and a ban on assault weapon sales. Additionally, he supports the Violence Against Women Act and federal Red Flag legislation, which can temporarily remove firearms from individuals who pose a clear danger to themselves, their families, and their communities.`),
      oneLine(`Gun violence is a threat to the safety of those in our communities and our schools. We must hold the firearms industry accountable to federal regulations instead of protecting it from liability. It’s time to take actions, not offer thoughts and prayers.`),
    ]
  }, 
  {
    title: 'Repealing SESTA-FOSTA',
    id: 'SESTA',
    bugurl: SESTA_bug,
    text: [
      oneLine(`Another priority for Mel is the repeal of SESTA-FOSTA. This law was intended to address human trafficking, but in practice, has only made the situation worse by driving sex workers into the shadows while making it more difficult to combat legitimate traffickers. Sex work is work.`),
      oneLine(`Mel believes that we need to decriminalize (as opposed to legalize) sex work which has led to the disproportionate targeting and prosecution of migrant workers and those in the trans community. Repealing SESTA-FOSTA and bringing sex workers into the policymaking conversation will lead to effective human trafficking legislation that is informed by those closest to the problem, while ensuring that those who rely on selling or trading sex are not prosecuted for simply trying to survive.`),
    ]
  },
  {
  title: 'Marijuana Legalization',
    id: 'Marijuana',
    bugurl: Marijuana_bug,
    text: [
      oneLine(`Mel fully supports legalizing marijuana and vacating and expunging all past marijuana-related convictions. Legalized marijuana revenue should be reinvested in the communities that have been most adversely impacted by the War on Drugs and racist broken windows policing. African-Americans are four times as likely to get arrested for marijuana as white Americans, despite both populations having similar rates of marijuana use. This has been a tool of mass incarceration, and a boon to the prison industrial complex. Corporations have profited off of the destruction of lives and communities through the criminalization of marijuana, and are now looking to profit off of its legalization. Impacted communities should be the first to benefit from legalization and the first in line to receive licenses and small business loans.`),
    ]
  },
  {
    title: 'Veterans',
    id: 'Veterans',
    bugurl: Veterans_bug,
    text: [
      oneLine(`As a Congressional aide, Mel worked closely with former service members as a liaison to the Department of Veteran’s Affairs. While Mel believes we need to end the forever wars, and develop foreign policy that puts mutual collaboration and cooperation at the fore, he also understands that our nation still owes a debt to those who have and continue to serve in wars they had no choice in entering. Billions are spent on Defense each fiscal year, but those dollars find themselves in the pockets of defense contractors and private corporations that make up the military industrial complex.`),
      oneLine(`Mel will fight to ensure that the VA is properly funded, reverse legislation that makes it easier to fire VA employees, and strengthen programming that does outreach in order to provide mental health services to servicemembers. Mel will also fight to legislate permanent protections for members of the LGBTQIA community who wish to serve.`),
    ]
  },
  {
    title: 'LGBTQIA Rights',
    id: 'LGBT',
    bugurl: LGBT_bug,
    text: [
      oneLine(`Securing the rights of our LGBTQIA neighbors is vital, and isn’t a single, stand-alone issue. The LGBTQIA community is affected by all the issues addressed above, and that’s why you’ll see specific policies protecting LGBTQIA folks in issues like elder care, veterans, and repealing SESTA-FOSTA. The current administration’s assault on the LGBTQIA community is unacceptable. LGBTQIA people are still forced to fight for their rights in their towns, in congress, and in their day to day lives because they lack basic legal protections in states across the country. Federal law must provide consistent non-discrimination protections based on sexual orientation and gender identity. Mel will work tirelessly to ensure equal rights under the protection of the law to every member of this community. Mel supports the Equality Act which would provide consistent non-discrimination protections for LGBTQ people across key areas of life including education, credit, housing, public spaces, and more. He will be a champion for LGBTQIA rights, because for any of us to be truly free, we all must be. `),
    ]
  },
  {
    title: 'Data & Privacy Protections',
    id: 'Privacy',
    bugurl: Privacy_bug,
    text: [
      oneLine(`The separation between the real world and the digital world has all but disappeared in the last decade, and we need Congress to keep pace with the advances in technological innovation and to craft proactive legislation that defends our 4th Amendment protections. The massive amounts of data collected by corporations and governments — whether they’re tracking our physical movements with smartphone location and facial recognition, or our digital movements with cookies and APIs — means that simply by interacting with the world, we’re acquiescing our right to privacy.`),
      oneLine(`We need smart legislation that responds to the new norm; leaving our corporations to self-regulate our digital landscape is unacceptable. The European Union’s General Data Protection Regulation provides a model for a first step in crafting meaningful data & privacy protection legislation to shield users from being exploited and commodified by the technologies they interact with, both willingly and unwillingly.`),
    ]
  },
  {
    title: 'Publicly Financed Campaigns',
    id: 'Campaigns',
    bugurl: Campaigns_bug,
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
                  defaultMessage='Policy for the People'
                />
              </span>
            </div>
            <div className="intro_para">
              Mel advocates for a government that puts people before politics, human interest above corporate greed, and the needs of the many above the benefit of the wealthy and powerful.
            </div>
            <div className="issue_links">
                {
                  issuesDefaults.map((example, exampleIdx) =>
                    <Link className="issue_link" to={`/issues/#${example.id}`}>
                <FormattedMessage 
                  id = {example.title}
                  defaultMessage={example.title}
                />
              </Link>
                )}
            </div>
            <>
              {
                issuesDefaults.map((example, exampleIdx) =>
                  <Issue
                    title={example.title}
                    id={example.id}
                    type={example.type}
                    paragraphs={
                      example.text.map(
                        ((paragraph, paragraphIdx) =>
                          <FormattedMessage
                            id={
                              localizedStringsKeypaths.issues
                                .examples[exampleIdx].text[paragraphIdx]
                            }
                            defaultMessage={
                              paragraph
                            }
                          />
                        )
                      )
                    }
                    bugurl={example.bugurl}
                  />
                )}
            </>
          
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}