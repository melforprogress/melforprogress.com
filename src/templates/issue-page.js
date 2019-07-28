import React from 'react'
import Layout from '../components/Layout'
import PageUnderNavbar from '../components/PageUnderNavbar'
import Issue from '../components/Issue'

export default function() {
  return (
    <Layout>
      <PageUnderNavbar>
        <section className="section section--gradient">
          <div className="content">
            <div className="title">Policy for the People</div>
            <Issue title="Affordable Housing for All"
              paragraphs={['Mel believes that housing is a human right and that access to affordable housing should be a national priority. While an improving economy has benefited real estate and land development corporations, wages are not keeping up with rising housing prices and rent. In Queens alone, countless working families are being priced out of their neighborhoods, and the number of people experiencing homelessness is increasing. When the scales are tipped in favor of wealthy developers, a new vision for social housing in America is necessary. Expanding on the recommendations of the People’s Policy Project, Mel will introduce legislation to create 25 million new environmentally sustainable social housing units by 2050, and create affordable housing for all.',
              'He supports expanding funding for existing programs, creating guaranteed housing with wrap around services to address homelessness, desegregating poverty by making housing accessible to all, and lifting barriers to housing for justice involved individuals. Furthermore, Mel will ensure that this legislation provides employment opportunities to local labor at prevailing wages and guarantees high safety standards for workers.', 'By refusing contributions from all corporations including real estate, Mel can be trusted to fight to keep housing in reach for working class families.']}
            />
            <Issue title="Immigration Justice"
              paragraphs={['The Trump administration has taken pride in policies that rip away children from their families, deprive our undocumented friends and neighbors of due process and dignity, and erode any accountability of immigration agencies. It’s time to shut down detention centers and terminate the private prison contracts that profit off them. We must abolish ICE, end the militarization of the CBP, and develop sensible policy that does not restrict movement while preserving safety.',
              'Mel understands that we need to act against the atrocities being committed in our country. Asylum seekers should be fast-tracked and given the chance to build the better life that they came here seeking. America should be a beacon of hope, not a stage for cruel and inhumane acts against refugees and immigrants.',
              'By reforming our immigration infrastructure, Mel believes that we can keep families together, build safer communities, and restore America’s promise as a land of refuge and opportunity.']}
            />
            <Issue title="Universal Basic Income"
              paragraphs={
                ['Rapid technological innovation has already changed American employment. Automation continues to eviscerate opportunities for work and is contributing to an already-growing gig economy. As temporary, part-time, and non-traditional jobs redefine the meaning of career, it’s time to be prepared for the future.',
                'Mel understands that we need to enable people to live better lives, not leave them to struggle with wage stagnation and income inequality. Investing in Universal Basic Income experiments can reduce poverty, create opportunities for new types of work, and reinforce a sense of dignity in people’s lives.'
                ]
              }
            />
            <Issue title="Support Seniors"
              paragraphs={
                ['For many Americans, the ability to enjoy retirement has become increasingly difficult with rising costs of housing and healthcare. Mel believes that everyone deserves to live out their golden years in dignity. Seniors who are retired should not be priced out of their homes or unable to afford long-term quality healthcare, which is why Mel also supports Medicare for All.',
                'Mel will introduce the Golden Years Security Act to make sure that the specialized needs of our elders are met, from preventing discrimination of LGBTQIA seniors in nursing facilities to addressing the urgent medical needs that our current infrastructure fails to. Whether subsidizing home care services, meeting the challenges of end-of-life care, or improving the support of assisted living facilities, Mel believes our seniors are owed respect and dignity in their golden years, regardless of financial circumstances. '
                ]
              }
            />
          </div>
        </section>
      </PageUnderNavbar>
    </Layout>
  )
}
