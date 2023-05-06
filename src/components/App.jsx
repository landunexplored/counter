import { connect } from "react-redux";
import { increment, decrement } from "../actions";

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

function App({ count, increment, decrement }) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const CounterComponent = connect(mapStateToProps, mapDispatchToProps)(App);
export default CounterComponent;
