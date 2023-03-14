import {createContext, Dispatch, SetStateAction, useState} from "react";
import ComponentExample from './components/ComponentExample'
import ComponentWithProps from './components/PropsExample'
import ComponentWithStyles from './components/StylesExample'
import UseStateExample from './components/hooks/UseStateExample'
import ContextReceiverExample from "./components/ContextReceiverExample";
import UseEffectExample from "./components/hooks/useEffectExample";
import { ArrayExample, ConditionExample } from './components/RenderingExamples'
import UseRefExample from "./components/hooks/UseRefExample";
import UseMemoExample from "./components/hooks/UseMemoExample";
import PassingMethodExample from "./components/PassingMethodExample";

interface ContextData{
  message:string,
  setMessage:Dispatch<SetStateAction<string>>,
}

export const GlobalData = createContext<ContextData>({
  message: '',
  setMessage: ()=>{}
});

const App = () => {
  const [message, setMessage] = useState<string>('Hello from Context!');

  return (
    <GlobalData.Provider value={{message, setMessage}}>
      <div>
        <ComponentExample />
        <ComponentWithProps title={'My title'} />
        <ComponentWithStyles />
        <ArrayExample />
        <ConditionExample />
        <UseStateExample />
        <ContextReceiverExample />
        <UseEffectExample />
        <UseRefExample />
        <UseMemoExample />
        <PassingMethodExample />
      </div>
    </GlobalData.Provider>
  )
}

export default App
