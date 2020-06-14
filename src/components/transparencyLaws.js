/**
 * Transparency Law Objects
 * {
 *   key: kebab casing of state transparency law name
 *   name: full formal name
 *   abbr: abbreviation of transparency law
 *   state: lowercase abbreviation of applicable state
 *   responseWithinDays: number of days a RAO must respond within
 *   rcGuideUrl: Reporter Committee guide link
 * }[]
 */

 export default [
  {
    key: 'open-public-records-act',
    name: 'Open Public Records Act',
    abbr: 'OPRA',
    state: 'nj',
    responseWithinDays: 7,
    rcGuideUrl: 'https://www.rcfp.org/open-government-guide/new-jersey/#open-records',
  },
  {
    key: 'freedom-of-information-law',
    name: 'Freedom of Information Law',
    abbr: 'FOIL',
    state: 'ny',
    responseWithinDays: null,
    rcGuideUrl: 'https://www.rcfp.org/open-government-guide/new-york/#open-records',
  },
];
