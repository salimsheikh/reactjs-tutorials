import React from 'react';

function SimpleList() {
    // const skills = ['HTML','CSS','Javascript'];
    const skills = ["HTML","CSS","JavaScript"];
    const output = skills.map(skill => <li>{skill}</li>)

  return <ul>{output}</ul>;
}

export default SimpleList;
