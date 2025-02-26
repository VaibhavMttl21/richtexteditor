import { jsx } from '@udecode/plate-test-utils';

const listItem = (text: string, indent = 1, listStyleType = 'disc') =>
  jsx('element', { type: 'p', indent, listStyleType }, text);

export const autoformatValue: any = [
  jsx('element', { type: 'h2' }, 'Autoformat'),
  jsx('element', { type: 'p' }, 'Empower your writing experience by enabling autoformatting features. Add Markdown-like shortcuts that automatically apply formatting as you type.'),
  jsx('element', { type: 'p' }, 'While typing, try these mark rules:'),

  listItem('Type ** or __ on either side of your text to add bold mark.'),
  listItem('Type * or _ on either side of your text to add italic mark.'),
  listItem('Type ` on either side of your text to add inline code mark.'),
  listItem('Type ~~ on either side of your text to add strikethrough mark.'),
  listItem('Note that nothing happens when there is a character before, try on: *bold*'),
  listItem('We even support smart quotes, try typing "hello" \'world\'.'),

  jsx('element', { type: 'p' }, 'At the beginning of any new block or existing block, try these (block rules):'),

  listItem('Type *, - or + followed by space to create a bulleted list.'),
  listItem('Type 1. or 1) followed by space to create a numbered list.'),
  listItem('Type [] or [x] followed by space to create a to-do list.'),
  listItem('Type > followed by space to create a block quote.'),
  listItem('Type ``` to create a code block.'),
  listItem('Type --- to create a horizontal rule.'),

  listItem('Type # followed by space to create an H1 heading.'),
  listItem('Type ### followed by space to create an H3 sub-heading.'),
  listItem('Type #### followed by space to create an H4 sub-heading.'),
  listItem('Type ##### followed by space to create an H5 sub-heading.'),
  listItem('Type ###### followed by space to create an H6 sub-heading.'),
];
