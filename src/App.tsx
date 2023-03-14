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
  name:string,
  updateValues: (message:string, name:string) => void,
}

export const GlobalData = createContext<ContextData>({
  message: '',
  name: '',
  updateValues: (message:string, name:string)=>{},
});

const App = () => {
  const [message, setMessage] = useState<string>('Hello from Context!');
  const [name, setName] = useState<string>('mark');

  const updateValues = (message:string, name:string) => {
    setName(name);
    setMessage(message);
  }

  return (
    <GlobalData.Provider value={{message, name, updateValues}}>
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
