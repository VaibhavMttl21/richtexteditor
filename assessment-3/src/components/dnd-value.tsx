import { jsx } from '@udecode/plate-test-utils';

jsx;

export const dndValue: any = [
  jsx('element', { type: 'h2' }, [
    jsx('text', {}, 'Drag and Drop'),
  ]),

  jsx('element', { type: 'p' }, [
    jsx('text', {}, 'Easily reorganize content within your document using drag and drop.'),
  ]),

  jsx('element', { type: 'p' }, [
    jsx('text', {}, 'How to use:'),
  ]),

  jsx('element', { type: 'p', indent: 1, listStyleType: 'disc' }, [
    jsx('text', {}, 'Hover over the left side of a block to see the drag handle (six dots).'),
  ]),

  jsx('element', { type: 'p', indent: 1, listStyleType: 'disc' }, [
    jsx('text', {}, 'Click and hold the handle, then drag the block to a new location.'),
  ]),

  jsx('element', { type: 'p', indent: 1, listStyleType: 'disc' }, [
    jsx('text', {}, 'Release to drop the block in its new position.'),
  ]),

  jsx('element', { type: 'p' }, [
    jsx('text', {}, 'Try it out! Drag these items to reorder them:'),
  ]),

  jsx('element', { type: 'p', indent: 1, listStyleType: 'decimal' }, [
    jsx('text', {}, 'First item'),
  ]),

  jsx('element', { type: 'p', indent: 1, listStart: 2, listStyleType: 'decimal' }, [
    jsx('text', {}, 'Second item'),
  ]),

  jsx('element', { type: 'p', indent: 1, listStart: 3, listStyleType: 'decimal' }, [
    jsx('text', {}, 'Third item'),
  ]),
];
