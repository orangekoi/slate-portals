import parse from 'html-react-parser';

import linkbutton from './linkbutton.twig';
import data from './linkbutton.yml';
import './linkbutton.css';

const component = {
  title: 'Elements/Links/Link - Button',
};

export const LinkButton = {
  render: (args) => parse(linkbutton(args)),
  args: { ...data },
};

/** Text Link Story */
export const Primary = {
  ...LinkButton,
  name: 'Text Link',
  args: {
    ...LinkButton.args,
    button: {
      icon: false,
      modifier: 'button--primary',
      text: 'Primary button',
    },
  },
};
/** Link Button Story */
export const Secondary = {
  ...LinkButton,
  name: 'Link Button',
  args: {
    ...LinkButton.args,
    
  },
};

export default component;