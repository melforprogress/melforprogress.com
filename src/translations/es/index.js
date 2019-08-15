import { flatten } from 'flat';
import { getIdFromDotPath, oneLine } from "../stringFileUtils";

const localizedStrings = {
  site: {
    title: 'Mel for progress',
  },
  home: {
    title: 'Inicio',
    about: {
      header: 'Mel Gagarin Is Running for Congress',
      summary: oneLine(`Melquiades Gagarin is a stay-at-home dad and community organizer who is 
        running to represent New York’s 6th Congressional District to put people before politics, 
        human dignity above corporate greed, and the needs of the many above the benefit of the 
        wealthy and the powerful.`),
      background: oneLine(`Born in Elmhurst to a Puerto-Rican working-class mother and a 
        Filipino immigrant father, he was raised by his mom and abuela. He went to Resurrection 
        Ascension and Archbishop Molloy in district before attending American University in 
        Washington, DC. From working as a congressional aide representing parts of New York’s 
        6th Congressional District, to advocating on the Hill alongside criminal justice 
        reformers, Mel has always been dedicated to fighting for progress. He currently resides 
        in Kew Gardens with his wife Aleda, their three children, and their dachshund. `),
    },
  },
  issues: {
    title: 'Issues',
    heading: 'Policy for the People',
    examples: [
      {
        title: 'Affordable Housing for All',
        text: [
          oneLine(`Mel believes that housing is a human right and that access to affordable
            housing should be a national priority. While an improving economy has benefited real 
            estate and land development corporations, wages are not keeping up with rising housing 
            prices and rent. In Queens alone, countless working families are being priced out of 
            their neighborhoods, and the number of people experiencing homelessness is increasing. 
            When the scales are tipped in favor of wealthy developers, a new vision for social housing 
            in America is necessary. Expanding on the recommendations of the People’s Policy Project, 
            Mel will introduce legislation to create 25 million new environmentally sustainable social 
            housing units by 2050, and create affordable housing for all.`),
          oneLine(`He supports expanding funding for existing programs, creating guaranteed 
            housing with wrap around services to address homelessness, desegregating poverty by 
            making housing accessible to all, and lifting barriers to housing for justice involved 
            individuals. Furthermore, Mel will ensure that this legislation provides employment 
            opportunities to local labor at prevailing wages and guarantees high safety standards 
            for workers.', 'By refusing contributions from all corporations including real estate,
             Mel can be trusted to fight to keep housing in reach for working class families.`),
        ]
      },
      {
        title: 'Immigration Justice',
        text: [
          oneLine(`The Trump administration has taken pride in policies that rip away children 
        from their families, deprive our undocumented friends and neighbors of due process and 
        dignity, and erode any accountability of immigration agencies. It’s time to shut down 
        detention centers and terminate the private prison contracts that profit off them. We must 
        abolish ICE, end the militarization of the CBP, and develop sensible policy that does not 
        restrict movement while preserving safety.`),
          oneLine(`Mel understands that we need to act against the atrocities being committed in our 
        country. Asylum seekers should be fast-tracked and given the chance to build the better life 
        that they came here seeking. America should be a beacon of hope, not a stage for cruel and 
        inhumane acts against refugees and immigrants.`),
          oneLine(`By reforming our immigration infrastructure, Mel believes that we can keep 
        families together, build safer communities, and restore America’s promise as a land of 
        refuge and opportunity.`)
        ]
      },
      {
        title: 'Universal Basic Income',
        text: [
          oneLine(`Rapid technological innovation has already changed American employment. Automation 
        continues to eviscerate opportunities for work and is contributing to an already-growing gig 
        economy. As temporary, part-time, and non-traditional jobs redefine the meaning of career, 
        it’s time to be prepared for the future.`),
          oneLine(`Mel understands that we need to enable people to live better lives, not leave them 
        to struggle with wage stagnation and income inequality. Investing in Universal Basic Income 
        experiments can reduce poverty, create opportunities for new types of work, and reinforce a 
        sense of dignity in people’s lives.`),
        ]
      },
      {
        title: 'Support Seniors',
        text: [
          oneLine(`For many Americans, the ability to enjoy retirement has become increasingly 
        difficult with rising costs of housing and healthcare. Mel believes that everyone 
        deserves to live out their golden years in dignity. Seniors who are retired should not 
        be priced out of their homes or unable to afford long-term quality healthcare, which is 
        why Mel also supports Medicare for All.`),
          oneLine(`Mel will introduce the Golden Years Security Act to make sure that the specialized 
        needs of our elders are met, from preventing discrimination of LGBTQIA seniors in nursing 
        facilities to addressing the urgent medical needs that our current infrastructure fails to. 
        Whether subsidizing home care services, meeting the challenges of end-of-life care, or 
        improving the support of assisted living facilities, Mel believes our seniors are owed 
        respect and dignity in their golden years, regardless of financial circumstances.`),
        ]
      },
    ],
  },
  donate: {
    title: 'Donate'
  },
  join: {
    header: "Join Our Campaign for Progress!",
  },
  footer: {
    inquiries: {
      general: "General inquiries: info@melforprogress.com",
      press: "Press inquiries: press@melforprogress.com",
    },
    finance: "Paid for by Committee to Elect Mel Gagarin",
  },
};

export default flatten(localizedStrings);
export const localizedStringsKeypaths = getIdFromDotPath(localizedStrings);
