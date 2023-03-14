import { useMemo, useState } from "react";
import Container from "./common/Container";

const ChildElement = (props:{updateName:(name:string) => void}) => {
  return(
    <button onClick={()=>{props.updateName('Dan')}}>Update name</button>
  )
}

const PassingMethodExample = () =>{
  const [name, setName] = useState<string>('Alex');

  return (
    <Container title='Passing Method Example example'>
      <h5>{name}</h5>
      <ChildElement updateName={setName}/>
    </Container>
  )
}

export default PassingMethodExample;