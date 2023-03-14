import { useState } from "react";
import Container from "../common/Container";

interface Person{
  name: string,
  age: number
}

const UseStateExample = () =>{
  const [person, setPerson] = useState<Person>({
    name: 'Alex',
    age: 21,
  });

  const [interests, setInterests] = useState<string[]>(['bicycle', 'computers']);

  const updateData = () => {
    setPerson({...person, name: 'Dan', age: 22})
    setInterests([...interests, 'girls']);
  }

  return (
    <Container title="useState usage example">
      <button onClick={updateData}>Update Data</button>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div style={{'display': 'flex', 'gap':'10px'}}>
        {interests.map((interest:string, index:number)=>{
          return <h5 key={index}>{interest}</h5>
        })}
      </div>
    </Container>
  )
}

export default UseStateExample;