import * as React from 'react';

interface IProps {
  name: string;
  enthusiasmLevel?: number; // ? means optional number
}

function Hello({ name, enthusiasmLevel = 1 }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join('!');
}
