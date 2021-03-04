const Button = (props) => {
  const style = { backgroundColor: props.color };
  return <button style={ style }>{ props.text }</button>;
};