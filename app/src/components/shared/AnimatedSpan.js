import * as React from 'react';

const AnimatedSpan = ({ children, innerRef }) => {
  return (
    <p>
      {children.split('').map((letter, index) => (
        <span
          ref={ref => {
            innerRef[index] = ref;
          }}
        >
          {letter}
        </span>
      ))}
    </p>
  );
};

export default AnimatedSpan;
