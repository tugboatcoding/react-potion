import React, { useRef, useEffect } from 'react';
import * as typeformEmbed from '@typeform/embed'

const TypeformComponent = (props) => {
  const ref = useRef(null);
  const width = props.width || '100%';
  const height = props.height || '500px';

  useEffect(() => {
    typeformEmbed.makeWidget(ref.current, props.src, {
      hideFooter:  props.hideFooter || true,
      hideHeaders: props.hideHeaders || true,
      opacity: props.opactiy || 1
    });
  }, [ref]);

  return (
    <div ref={ref} style={{ width, height }}></div>
  );
};

export default TypeformComponent;
