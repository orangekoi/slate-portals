import parse from 'html-react-parser';

import title from './buttons.twig';
import data from './buttons.yml';

/**
 * Next we define a default configuration for the component to use.
 * These settings will be inherited by all stories of the component,
 * shall the component have multiple variations.
 * `component` is an arbitrary name assigned to the default configuration.
 * `title` determines the location and name of the story in Storybook's sidebar.
 * `render` uses the parser extension to render the component's html to react.
 * `args` uses the variables defined in title.yml as react arguments.
 */
const component = {
  title: 'Elements/Buttons',
  render: (args) => parse(title(args)),
  args: { ...data },
};

/**
 * Export the Title and render it in Storybook as a Story.
 * The `name` key allows you to assign a name to each story of the component.
 * For example: `Title`, `Title dark`, `Title light`, etc.
 */
export const TitleElement = {
  name: 'Buttons',
};

/**
 * Finally export the default object, `component`. Storybook/React requires this step.
 */
export default component;