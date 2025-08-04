import parse from 'html-react-parser';

import heroBreadcrumb from './hero__breadcrumb.twig';
import data from './hero__breadcrumb.yml';
import './hero__breadcrumb.css';

const settings = {
  title: 'Regions/Hero/Breadcrumb'
}

export const HeroBreadcrumb = {
  name: 'Hero',
  render: (args) => parse(heroBreadcrumb(args)),
  // argTypes: {
  //   heroType: {
  //     options: ['Error', 'Reminder', 'Hint'],
  //     control: { type: 'select' },
  //   },
    args: { ...data },
};


// export const hero = {
//   render: (args) => parse(hero(args)),
//   args: { ...data },
// };

// export const Reminder = {
//   ...hero,
//   name: 'hero Reminder',
//   args: {
//     ...data,
//     heroType: 'is-reminder',
//   },
// };

export default settings;
