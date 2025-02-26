import { jsx } from '@udecode/plate-test-utils';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
export const ELEMENT_H2 = 'h2';

export const aiValue: any = [
  jsx('element', { type: ELEMENT_H2 }, 'AI Menu'),
  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Generate and refine content with AI.'),
  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Access the AI menu in many ways:'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'decimal' }, 'Press "⌘ + J".'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStart: 2, listStyleType: 'decimal' }, 'Select text and click "Ask AI" in the floating toolbar'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStart: 3, listStyleType: 'decimal' }, 'Right-click a block and select "Ask AI"'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStart: 4, listStyleType: 'decimal' }, 'Press space in an empty block. Try it out:'),
  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Once opened, you can:'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Search commands in the input field:'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Use arrow keys to navigate, Enter to select'),
  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Generating commands:'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Continue writing'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Add a summary'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Explain'),
  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Editing commands:'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Improve writing'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Emojify'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Make it longer or shorter'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Fix spelling & grammar'),
  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Editing suggestions:'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Replace the selection'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Insert below'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Discard'),
  jsx('element', { type: ELEMENT_PARAGRAPH, indent: 1, listStyleType: 'disc' }, 'Try again'),
  jsx('element', { type: ELEMENT_PARAGRAPH }, 'Note: chat history is preserved until the menu is closed.'),
];
