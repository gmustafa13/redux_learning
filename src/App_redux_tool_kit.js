// import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import {actions} from '../src/redux/storeWithToolKit'


function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // with normal
  // const incrementFn = () => {
  //   dispatch({ type: 'INC' })
  // }
  // const decrementFn = () => {
  //   dispatch({ type: 'DEC' })
  // }
  // const addByFn = () => {
  //   dispatch({ type: 'ADD_BY', value: 10 })
  // }

  // with tool kit
  const incrementFn = () => {
    dispatch(actions.incrementFn())
  }
  const decrementFn = () => {
    dispatch(actions.decrementFn())
  }
  const addByFn = () => {
    dispatch(actions.addByFn({ value: 10 }))
  }
  const clearFn = () => {
    dispatch(actions.reset())
  }
  return (
    <div >
      <h1>counter :  </h1>
      <h2>
        {counter}
      </h2>
      <button onClick={incrementFn}>Increment</button>
      <button onClick={decrementFn}>Decrement</button>
      <button onClick={addByFn}>Add by 10</button>
      <button onClick={clearFn}>clear</button>
    </div>
  );
}

export default App;
