import * as React from 'react';
import "./styles.css";

interface Props{
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function App({ onChange }:Props) {
  return (
    <div className="MicroApp">
      <h1>Micro App</h1>
      <input onChange={onChange} type="text" placeholder="Enter your name" />
    </div>
  );
}