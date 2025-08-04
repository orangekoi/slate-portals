import parse from 'html-react-parser';

import grid from './grid.twig';
import data from './grid.yml';
import './grid.css';

const component = {
  title: 'Base/Layouts/Grid',
};

export const Grid = {
  render: (args) => parse(grid(args)),
  args: { ...data },
};

export default component;