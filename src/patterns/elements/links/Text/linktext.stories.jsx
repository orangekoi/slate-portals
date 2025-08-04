import parse from 'html-react-parser';

import linktext from './linktext.twig';
import data from './linktext.yml';
import './linktext.css';

const component = {
  title: 'Elements/Links/Link - Text',
};

export const Link = {
  render: (args) => parse(linktext(args)),
  args: { ...data },
};

/** Text Link Story */
export const Primary = {
  ...Link,
  name: 'Text Link',
  args: {
    ...Link.args,
    button: {
      icon: false,
      modifier: 'button--primary',
      text: 'Primary button',
    },
  },
};
/** Link Button Story */
export const Secondary = {
  ...Link,
  name: 'Link Button',
  args: {
    ...Link.args,
    
  },
};

export default component;