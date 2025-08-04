import parse from 'html-react-parser';

import heroCTA from './hero__cta.twig';
import data from './hero__cta.yml';
import './hero__cta.css';
import '../video_pause';

const settings = {
  title: 'Regions/Hero/Call to Action'
}

export const HeroCTA = {
  name: 'Hero',
  render: (args) => parse(heroCTA(args)),
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
