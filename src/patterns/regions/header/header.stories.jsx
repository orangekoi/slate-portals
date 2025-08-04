import parse from 'html-react-parser';

import header from './header.twig';
import data from './header.yml';
import './header.css';

const settings = {
  title: 'Regions/Header'
}

export const Header = {
  name: 'Header',
  render: (args) => parse(header(args)),
  argTypes: {
    headerPosition: {
      name: "Header Position",
      options: ['Overlay', 'Regular'],
      control: { type: 'select' },
    },
    args: { ...data },
  },
};


// export const header = {
//   render: (args) => parse(header(args)),
//   args: { ...data },
// };

// export const Reminder = {
//   ...header,
//   name: 'header Reminder',
//   args: {
//     ...data,
//     headerType: 'is-reminder',
//   },
// };

export default settings;