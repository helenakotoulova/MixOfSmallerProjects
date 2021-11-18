function Gol(props) {
  return (
    <section>
      <h1>{props.isGoal ? 'Goal!' : 'Missed'}</h1>
    </section>
  )
}

export default Gol;

/*
function MissedGoal() {
    return <h1>MISSED!</h1>;
  }
  
  function MadeGoal() {
    return <h1>Goal!</h1>;
  }
  
  function Goal(props) {
    const dalGol = props.isGoal;
    if (dalGol) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
  }

export default Goal;
*/