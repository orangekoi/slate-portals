import parse from 'html-react-parser';

import spacing from './spacing.twig';
import data from './spacing.yml';
import './spacing.css';

const component = {
  title: 'Base/Spacing',
};

export const Spacing = {
  render: (args) => parse(spacing(args)),
  args: { ...data },
};

export default component;