import React,{useCallback} from 'react';
import App from './App';
import "./styles.css";

export default function MainApp() {
  const [name, setName] = React.useState<string|null|undefined>(null);
  const onChangeCallback = useCallback(
    (event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    },
    [],
  )
  
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>{ name ? <p>Your name is: {name}</p> : null }</h3>
      <App onChange={onChangeCallback} />
    </>
  );
}