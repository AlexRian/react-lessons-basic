import Container from "./common/Container";
import style from '../styles/modules/StylesExample.module.scss'

const StylesExample = () =>{
  return (
    <Container title="Component with styles">
      <div className={style.title}>Hello from component with style</div>
    </Container>
  )
}

export default StylesExample;