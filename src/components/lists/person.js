import React from 'react';

export default function Person({person}) {
    //{/*<li key={person.id}>{person.name}</li> */}
  return (    
    <li style={{textAlign:'left'}}>I am {person.name}. I am {person.age} years  old. I know {person.skill}</li>
  );
}
