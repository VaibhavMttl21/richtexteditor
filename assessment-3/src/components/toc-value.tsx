import { jsx } from '@udecode/plate-test-utils';

jsx;

export const tocValue: any = [
  jsx('element', { type: 'h1' }, 'Table of Contents'),
  jsx('element', { type: 'p' }, 'The Table of Contents (TOC) feature allows you to create an automatically updated overview of your document\'s structure.'),
  jsx('element', { type: 'p' }, 'How to use the Table of Contents:'),
  jsx('element', { type: 'p', indent: 1, listStyleType: 'disc' }, 'Type "/toc" and press Enter to create the TOC.'),
  jsx('element', { type: 'p', indent: 1, listStyleType: 'disc' }, 'The TOC updates automatically when you modify headings in the document.'),
  jsx('element', { type: 'toc' }, ''),
  jsx('element', { type: 'h2' }, 'Example Content'),
  jsx('element', { type: 'p' }, 'This is an example of content that would be reflected in the Table of Contents.'),
  jsx('element', { type: 'h3' }, 'Subsection'),
  jsx('element', { type: 'p' }, 'Adding or modifying headings in your document will automatically update the TOC.'),
  jsx('element', { type: 'h2' }, 'Benefits of Using TOC'),
  jsx('element', { type: 'p' }, 'A Table of Contents improves document navigation and provides a quick overview of your content structure.'),
];


export const tocPlaygroundValue: any = [
  jsx('element', { type: 'toc' }, ''),
  jsx('element', { type: 'p' }, 'Click on any heading in the table of contents to smoothly scroll to that section.'),
];

