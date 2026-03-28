
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SimpleForm from './Learning Journey/Form Handling/FormHandling'
import ValidationForm from './Learning Journey/Form Handling/MultipleInput';
import UncontrolledForm from './Learning Journey/Form Handling/UncontrolledForm';
import ParentInfo from './Learning Journey/Lifting State Up/Parent';
import Composition from './Learning Journey/Composition/Composition';
import Render from './Learning Journey/Render Props/RenderProps';
import Parent from './Learning Journey/Context API/Theme/Parent';

function App() {
  return (
    <>
    <Parent />
    </>
  )
}
export default App;