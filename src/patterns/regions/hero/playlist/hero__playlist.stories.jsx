import parse from 'html-react-parser';

import heroPlaylist from './hero__playlist.twig';
import data from './hero__playlist.yml';
import './hero__playlist.css';
import '../video_pause.js';

const settings = {
  title: 'Regions/Hero/Video Playlist'
}

export const HeroPlaylist = {
  name: 'Hero',
  render: (args) => parse(heroPlaylist(args)),
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
