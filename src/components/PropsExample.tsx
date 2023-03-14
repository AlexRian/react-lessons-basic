import Container from "./common/Container";

interface ComponentWithPropsProps{
  title: string,
}

const PropsExample = (props:ComponentWithPropsProps) =>{
  return (
    <Container title="Component with props">
      <div>{props.title}</div>
    </Container>
  )
}

export default PropsExample;