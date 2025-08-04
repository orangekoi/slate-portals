import parse from 'html-react-parser';

import colors from './colors.twig';
import data from './colors.yml';
import './colors.css';

const component = {
  title: 'Base/Colors',
};

export const Colors = {
  render: (args) => parse(colors(args)),
  args: { ...data },
};

export default component;