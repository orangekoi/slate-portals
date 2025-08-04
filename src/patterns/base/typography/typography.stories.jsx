import parse from 'html-react-parser';

import typography from './typography.twig';
import data from './typography.yml';
import './typography.css';

const component = {
  title: 'Base/Typography',
};

export const Typography = {
  render: (args) => parse(typography(args)),
  args: { ...data },
};

export default component;