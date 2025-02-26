import { jsx } from '@udecode/plate-test-utils';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

export const ELEMENT_H2 = 'h2';

const listItem = (text: string, indent = 1, listStyleType = 'disc', listStart?: number) =>
  jsx('element', { type: ELEMENT_PARAGRAPH, indent, listStyleType, listStart }, text);

export const aiValue: any = [
  jsx('element', { type: ELEMENT_H2 }, 'AI Menu'),
  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Generate and refine content with AI.'),
  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Access the AI menu in many ways:'),

  listItem('Press "⌘ + J".', 1, 'decimal', 1),
  listItem('Select text and click "Ask AI" in the floating toolbar', 1, 'decimal', 2),
  listItem('Right-click a block and select "Ask AI"', 1, 'decimal', 3),
  listItem('Press space in an empty block. Try it out:', 1, 'decimal', 4),

  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Once opened, you can:'),
  listItem('Search commands in the input field:'),
  listItem('Use arrow keys to navigate, Enter to select'),

  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Generating commands:'),
  listItem('Continue writing'),
  listItem('Add a summary'),
  listItem('Explain'),

  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Editing commands:'),
  listItem('Improve writing'),
  listItem('Emojify'),
  listItem('Make it longer or shorter'),
  listItem('Fix spelling & grammar'),

  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Editing suggestions:'),
  listItem('Replace the selection'),
  listItem('Insert below'),
  listItem('Discard'),
  listItem('Try again'),

  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Note: chat history is preserved until the menu is closed.'),
];
