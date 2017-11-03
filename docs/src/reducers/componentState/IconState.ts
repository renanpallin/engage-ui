import { IDocument } from '../../Types';
import IconExampleFirst from '../../examples/IconExample/IconExampleFirst';
import IconExampleSecond from '../../examples/IconExample/IconExampleSecond';
import IconExampleThird from '../../examples/IconExample/IconExampleThird';

const IconExampleFirstCode = require('!raw-loader!../../examples/IconExample/IconExampleFirst') as string;
const IconExampleSecondCode = require('!raw-loader!../../examples/IconExample/IconExampleSecond') as string;
const IconExampleThirdCode = require('!raw-loader!../../examples/IconExample/IconExampleThird') as string;

const IconState: IDocument = {
  id: 'icon',
  heading: 'Icon Component',
  subheading: `Icons are used to visually communicate core parts of the product and available actions. They can act as wayfinding tools to help merchants more easily understand where they are in the product, and common interaction patterns that are available.
  It is used as different sources i.e.svg or placeholder with different colors.`,
  property: [
    {
      name: 'source',
      type: 'SVGSource | placeholder | keyof typeof BUNDLED_ICONS',
      desc: 'Souce for an icon.',
    }, {
      name: 'color',
      type: 'Color',
      desc: 'To give colors for icons.',
    }, {
      name: 'backdrop',
      type: 'boolean',
      desc: 'Show a backdrop behind the icon.',
    }, {
      name: 'accessibilityLabel',
      type: 'string',
      desc: 'Descriptive text to be read to screenreaders.',
    }, {
      name: 'style',
      type: 'React.CSSProperties',
      desc: 'To provide styling.',
    }, {
      name: 'theme',
      type: 'any',
      desc: 'Theme to be injected via css-themr.',
    },
  ],
  exampleCode: IconExampleFirstCode,
  exampleComponent: IconExampleFirst,
  exampleCodeHeader: '1. Default Icon:',
  exampleCodeDescription: 'Use for the default icon with source as SVG.',
  exampleCode1: IconExampleSecondCode,
  exampleComponent1: IconExampleSecond,
  exampleCodeHeader1: '2. Icon:',
  exampleCodeDescription1: 'Use for the icon with source as placeholder.',
  exampleCode2: IconExampleThirdCode,
  exampleComponent2: IconExampleThird,
  exampleCodeHeader2: '3. Icon with all props:',
  exampleCodeDescription2: 'Use for the icon with source, color, backdrop and accessibilityLabel properties.',
};

export default IconState;
