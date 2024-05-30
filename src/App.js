import React from 'react';
import './style.css';
import Clickcounter from './Clickcounter';

export default function App(props) {
  const { count, increment } = props;
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Clickcounter />
    </div>
  );
}
