import { flatten } from 'flat';
import { getIdFromDotPath, oneLine } from "../stringFileUtils";
import Issue from "../../templates/issue-page";
import React from "react";

const localizedStrings = {
  site: {
    title: 'Mel for progress',
  },
  home: {
    title: 'Inicio',
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
    ],
  },
  donate: {
    title: 'Donate'
  }
};

export default flatten(localizedStrings);
export const localizedStringsKeypaths = getIdFromDotPath(localizedStrings);
