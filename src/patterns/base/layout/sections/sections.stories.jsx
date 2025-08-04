import parse from 'html-react-parser';

import sections from './sections.twig';
import data from './sections.yml';
import './sections.css';

const component = {
  title: 'Base/Layouts/Sections',
  argTypes: {
    sectionWidth: {
      options: ['Full', 'Regular', 'Narrow'],
      control: { type: 'select' },
    },
  },
};

export const Sections = {
  render: (args) => parse(sections(args)),
  args: { ...data },
};

export default component;