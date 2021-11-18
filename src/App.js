import Todo from './Components/Todo';
import Gol from './Components/Gol';
import Garage from './Components/Garaz';
import MyForm from './Components/Formular';
import Pokusy from './Components/pokusy';
import Garaz from './Components/Auto';
import ButtonGroup from './Components/ButtonGroup';
import NovaTlacitka from './Components/NovaTlacitka';


function App() {
  function printButtonLabel(e) {
    console.log(e.target.innerText);
  }
  return (
    
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' anotherText='Delete - 1'/>
      <Todo text='Master React' anotherText='Delete - 2'/>
      <Todo text= 'React Course' anotherText='Delete - 3'/>
      <Gol isGoal={true} />
      <Garage />
      <MyForm />
      <Pokusy color='red'/>
      <Garaz/>
      <br />
      <ButtonGroup nazvy={['1','2', '3']} doSomethingAfterClick={printButtonLabel} />
      <br />
      <NovaTlacitka />
    </div>
  );
}

export default App;

/*
<Goal isGoal={true} />
<Goal isGoal={false} />
*/