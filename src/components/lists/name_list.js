import React from 'react';

export default function NameList() {
    const names = [
        'Bruce',
        'Clark',
        'Diana',
        'Peter',
        'Tony',
        'Steve',
        'Natasha',
        'Wanda',
        'Thor',
        'Loki',
        'Stephen',
        'Scott',
        'Scott',
    ];

    const output = names.map((name, index) => <li style={{textAlign:'left'}} key={index}>{index +1} {name}</li>);
  return (
    <div>
      <ol>{output}</ol>
    </div>
  );
}
