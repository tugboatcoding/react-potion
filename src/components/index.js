import React from 'react';
import Heading from './Heading';
import Text from './Text';
import Strong from './Strong';
import Code from './Code';
import Link from './Link';
import Box from './Box';
import OrderedList from './OrderedList';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import Checkbox from './Checkbox';
import Image from './Image';
import Divider from './Divider';

export const PotionComponent = ({ _type, renderer = (v) => v, ...props }) => {
  // Recursively apply Evergreen to children.
  const newProps = {
    ...props,
    children: Array.isArray(props.children)
      ? props.children.map((child, idx) => (
        <PotionComponent key={idx} renderer={renderer} {...child} />
      ))
      : (Array.isArray(props.children) ? props.children.map(renderer) : renderer(props.children)),
  };

  return (
    <>
      {_type === 'h1' && <Heading {...newProps} />}
      {_type === 'h2' && <Heading {...newProps} />}
      {_type === 'h3' && <Heading {...newProps} />}
      {_type === 'h4' && <Heading {...newProps} />}
      {_type === 'h5' && <Heading {...newProps} />}
      {_type === 'h6' && <Heading {...newProps} />}
      {_type === 'h7' && <Heading {...newProps} />}
      {_type === 'h8' && <Heading {...newProps} />}
      {_type === 'h9' && <Heading {...newProps} />}
      {_type === 'text1' && <Text {...newProps} />}
      {_type === 'text2' && <Text {...newProps} />}
      {_type === 'text3' && <Text {...newProps} />}
      {_type === 'bold1' && <Strong {...newProps} />}
      {_type === 'bold2' && <Strong {...newProps} />}
      {_type === 'bold3' && <Strong {...newProps} />}
      {_type === 'callout' && <Text {...newProps} />}
      {_type === 'quote' && <Text {...newProps} />}
      {_type === 'code' && <Code {...newProps} />}
      {_type === 'todoList' && <Box {...newProps} />}
      {_type === 'toggle' && <Text {...newProps} />}
      {_type === 'link1' && <Link {...newProps} />}
      {_type === 'link2' && <Link {...newProps} />}
      {_type === 'link3' && <Link {...newProps} />}
      {_type === 'image' && <Image {...newProps} />}
      {_type === 'divider' && <Divider {...newProps} />}
      {_type === 'box' && (
        <Box {...newProps} />
      )}
      {_type === 'flex' && (
        <Box {...newProps} />
      )}
      {_type === 'columnList' && (
        <Box display="flex" {...newProps} />
      )}
      {_type === 'column' && (
        <Box {...newProps} />
      )}
      {_type === 'orderedList' && (
        <OrderedList {...newProps} />
      )}
      {_type === 'unorderedList' && (
        <UnorderedList {...newProps} />
      )}
      {_type === 'listItem' && (
        <ListItem {...newProps} />
      )}
      {_type === 'todoListItem' && (
        <Checkbox {...newProps} />
      )}
    </>
  );
};
