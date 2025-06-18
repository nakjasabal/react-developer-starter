import FrontComp from './components/FrontComp'
import BackComp from './components/BackComp'
import FormComp from './components/FormComp'

function App() {
  return (<>
    <h2>React-Modules</h2>
    <ol>
      <FrontComp></FrontComp>
      <BackComp />
    </ol>
    <FormComp />
  </>)
}

export default App
