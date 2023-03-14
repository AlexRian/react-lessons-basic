import Container from "./common/Container";
import style from '../styles/modules/RenderingExamples.module.scss'
import { useState } from "react";

export const ArrayExample = () =>{
  const items:string[] = ['Hello', 'World']; 
  
  return (
    <Container title="Component with array">
      <div className={style.list}>
        {items.map((title:string, index:number)=>{
          return <h5 key={index}>{title}</h5>
        })}
      </div>
    </Container>
  )
}

export const ConditionExample = () =>{
  const [visible, setVisible] = useState<boolean>(true);
  
  const switchVisible = () => {
    setVisible(!visible);
  }

  return (
    <Container title="Component with condition">
      <button onClick={switchVisible}>Switch</button>
      {visible ? <h5>I am visible!</h5> : <h5>I am not visible</h5>}
    </Container>
  )
}