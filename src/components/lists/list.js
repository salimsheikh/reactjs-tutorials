import React from 'react';
import ObjectList from './object_list';
import NameList from './name_list';
// import SimpleList from './simple_list';

export default function List() {
  return (
    <div>
      {/* <SimpleList /> */}
      <ObjectList />
      <hr />
      <NameList />      
    </div>
  );
}
