import parse from 'html-react-parser';

import footer from './footer.twig';
import data from './footer.yml';
import './footer.css';

const component = {
  title: 'Components/Cards/Footer',
};

export const Footer = {
  render: (args) => parse(footer(args)),
  args: { ...data },
};

export default component;