import { useEffect, useState } from "react";
import Container from "../common/Container";

const UseEffectExample = () =>{
  const [name, setName] = useState<string>('');

  useEffect(() => {
    console.log('UseEffectExample component created and mounted');
    return () => {
      console.log('UseEffectExample component unmounted');      
    }
  }, [])

  useEffect(() => {
    if(!name) return;
    console.log('Name was Updated');
  }, [name])
  
  return (
    <Container title='useEffect example'>
      <h5>See results in console</h5>
      <h5>{name}</h5>
      <button onClick={() => setName('John')}>Set name</button>
    </Container>
  )
}

export default UseEffectExample;