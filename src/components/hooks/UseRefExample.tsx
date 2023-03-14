import { useRef } from "react";
import Container from "../common/Container";

const UseRefExample = () =>{
  const element = useRef<HTMLDivElement>();
  
  const updateElementText = () => {
    element.current!.innerText = 'Updated value';
  }

  return (
    <Container title='useEffect example'>
      <div ref={element as React.RefObject<HTMLDivElement>}>Initial Value</div>
      <button onClick={() => updateElementText()}>Update value</button>
    </Container>
  )
}

export default UseRefExample;