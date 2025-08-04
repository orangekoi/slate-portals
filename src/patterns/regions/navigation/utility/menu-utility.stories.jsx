import parse from 'html-react-parser';

import utility from './menu-utility.twig';
import { Search } from '../../../components/search/sitewide/search-sitewide.stories';

// import data from './utility.yml';
import './menu-utility.css';

const settings = {
  title: 'Regions/Navigation/Utility'
}

export const Utility = {
  name: 'Utility Navigation',
  render: (args) => parse(utility(args)),
  imports: Search,
  // argTypes: {
  //   args: { ...data },
  // },
};


// export const utility = {
//   render: (args) => parse(utility(args)),
//   args: { ...data },
// };

// export const Reminder = {
//   ...utility,
//   name: 'utility Reminder',
//   args: {
//     ...data,
//     utilityType: 'is-reminder',
//   },
// };

export default settings;