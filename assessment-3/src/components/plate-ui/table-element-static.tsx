import React from 'react';

import type { SlateElementProps } from '@udecode/plate';

import { cn } from '@udecode/cn';
import { SlateElement } from '@udecode/plate';
import { type TTableElement, BaseTablePlugin } from '@udecode/plate-table';

export const TableElementStatic = ({
  children,
  className,
  ...props
}: SlateElementProps<TTableElement>) => {
  const { disableMarginLeft } = props.editor.getOptions(BaseTablePlugin);

  const marginLeft = disableMarginLeft ? 0 : props.element.marginLeft;

  return (
    <SlateElement
      className={cn(className, 'overflow-x-auto py-5')}
      style={{ paddingLeft: marginLeft }}
      {...props}
    >
      <div className="group/table relative w-fit">
        <table className="mr-0 ml-px table h-px table-fixed border-collapse bg-gray-100 border border-gray-300">
          <tbody className="min-w-full">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                className: cn(child.props.className, 'border border-gray-300 bg-white'),
              })
            )}
          </tbody>
        </table>
      </div>
    </SlateElement>
  );
};