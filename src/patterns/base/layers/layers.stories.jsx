import parse from 'html-react-parser';

import layers from './layers.twig';
import data from './layers.yml';
import './layers.css';

const component = {
  title: 'Base/Layers',
};

export const Layers = {
  render: (args) => parse(layers(args)),
  args: { ...data },
};

export default component;