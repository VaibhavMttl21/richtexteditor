'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@udecode/cn';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { ParagraphPlugin } from '@udecode/plate/react';
import {
  type PlaceholderProps,
  createNodeHOC,
  createNodesHOC,
  usePlaceholderState,
} from '@udecode/plate/react';

export const Placeholder = (props: PlaceholderProps) => {
  const { children, nodeProps, placeholder } = props;

  const { enabled } = usePlaceholderState(props);

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      className: child.props.className,
      nodeProps: {
        ...nodeProps,
        className: cn(
          enabled &&
            'before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]'
        ),
        placeholder,
      },
    });
  });
};

export const withPlaceholder = createNodeHOC(Placeholder);

export const withPlaceholdersPrimitive = createNodesHOC(Placeholder);

export const withPlaceholders = (components: any) => {
  const [randomText, setRandomText] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text');
        const text = await response.text();
        console.log(text)
        setRandomText(text);
      } catch (error) {
        console.error('Error fetching data:', error);
        setRandomText('Type a paragraph'); 
      }
    };
    fetchData();
  }, [components]);
  return withPlaceholdersPrimitive(components, [
    {
      key: ParagraphPlugin.key,
      hideOnBlur: true,
      placeholder: "type a Paragraph",
      query: {
        maxLevel: 1,
      },
    },
    {
      key: HEADING_KEYS.h1,
      hideOnBlur: false,
      placeholder: 'Untitled',
    },
  ]);
};