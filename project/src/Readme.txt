** STATES **
// Components State Updates //
State Updates May Be Asynchronous. React may batch multiple setState() calls
into a single update for performance, because 'this.props' and 'this.state' may be
updated asynchronously, you should not rely on their values for calculating the next state.

// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

To fix it, use a second form of setState() that accepts a function rather than an object.
That function will receive the previous state as the first argument,
and the props at the time the update is applied as the second argument.

// -------------------------------- //
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

We used an arrow function above, but it also works with regular functions:

// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
// -------------------------------- //

// setState() //
The merging is shallow, which mean variables inside the state are only replaced
if they are directly updated inside a 'setState()' statement.
ALL OTHER VARIABLES ARE MAINTAINED AS THEY ARE
