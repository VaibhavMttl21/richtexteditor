import { jsx } from '@udecode/plate-test-utils';

jsx;

export const createTable = (spanning?: boolean): any => [
  jsx('element', { type: 'table', colSizes: [100, 100, 100, 100], marginLeft: 20 }, [
    spanning
      ? jsx('element', { type: 'tr' }, [
          jsx('element', { type: 'th', colSpan: 4 }, [jsx('element', { type: 'p', bold: true }, 'Plugin')]),
        ])
      : jsx('element', { type: 'tr' }, [
          jsx('element', { type: 'th' }, [jsx('element', { type: 'p', bold: true }, 'Plugin')]),
          jsx('element', { type: 'th' }, [jsx('element', { type: 'p', bold: true }, 'Element')]),
          jsx('element', { type: 'th' }, [jsx('element', { type: 'p', bold: true }, 'Inline')]),
          jsx('element', { type: 'th' }, [jsx('element', { type: 'p', bold: true }, 'Void')]),
        ]),

    jsx('element', { type: 'tr' }, [
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p', bold: true }, 'Heading')]),
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p' }, '')]),
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p' }, '')]),
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p' }, 'No')]),
    ]),

    jsx('element', { type: 'tr' }, [
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p', bold: true }, 'Image')]),
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p' }, 'Yes')]),
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p' }, 'No')]),
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p' }, 'Yes')]),
    ]),

    jsx('element', { type: 'tr' }, [
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p', bold: true }, 'Mention')]),
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p' }, 'Yes')]),
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p' }, 'Yes')]),
      jsx('element', { type: 'td' }, [jsx('element', { type: 'p' }, 'Yes')]),
    ]),
  ]),
];


export const tableValue: any = [
  jsx('element', { type: 'h2' }, 'Table'),
  jsx('element', { type: 'p' }, 'Create customizable tables with resizable columns and rows, allowing you to design structured layouts.'),
  ...createTable(),
];

export const tableMergeValue: any = [
  jsx('element', { type: 'h3' }, 'Table Merge'),
  jsx('element', { type: 'p' }, 'You can disable merging using `disableMerge: true` option. Try it out:'),
  ...createTable(true),
];

