import { jsx } from '@udecode/plate-test-utils';

jsx;

export const softBreakValue: any = [
  jsx('element', { type: 'h2' }, 'Soft Break'),
  jsx('element', { type: 'p' }, 'Customize how soft breaks (line breaks within a paragraph) are handled using configurable rules.'),
  jsx('element', { type: 'p', indent: 1, listStyleType: 'disc' }, 'hotkey – Use hotkeys like ⇧⏎ to insert a soft break anywhere within a paragraph.'),
  jsx('element', { type: 'p', indent: 1, listStyleType: 'disc' }, 'query – Define custom rules to limit soft breaks to specific block types.'),
  jsx('element', { type: 'blockquote' }, 'Try here ⏎'),
  jsx('element', { type: 'code_block' }, [
    jsx('element', { type: 'code_line' }, 'And here ⏎ as well.'),
  ]),
];
