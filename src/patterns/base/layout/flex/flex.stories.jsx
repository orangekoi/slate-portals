import parse from 'html-react-parser';

import flex from './flex.twig';
import data from './flex.yml';
import './flex.css';

const component = {
  title: 'Base/Layouts/Flex',
};

export const Flex = {
  render: (args) => parse(flex(args)),
  args: { ...data },
};

export default component;