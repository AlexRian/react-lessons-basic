import { useMemo, useState } from "react";
import Container from "../common/Container";

const ChildElement = (props:{name:string, age:number}) => {
  const calculatedPerson = useMemo(() => `${props.name} ${props.age}`, [props.age]);

  return(
    <h5>{calculatedPerson}</h5>
  )
}

const UseMemoExample = () =>{
  const [name, setName] = useState<string>('Alex');
  const [age, setAge] = useState<number>(20);

  return (
    <Container title='useMemo example'>
      <ChildElement name={name} age={age}/>
      <button onClick={()=>{setName('Bob')}}>Update name</button>
      <button onClick={()=>{setAge(30)}}>Update age</button>
    </Container>
  )
}

export default UseMemoExample;