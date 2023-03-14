import { GlobalData } from "../App";
import { useContext } from "react";
import Container from "./common/Container";

const ContextReceiverExample = () =>{
  const context = useContext(GlobalData);

  return (
    <Container title="Component that received context!">
      <div>I got message from context!</div>
      <div>{context.message}</div>
      <button onClick={()=>context.setMessage('I updated context')}>Update context</button>
    </Container>
  )
}

export default ContextReceiverExample;