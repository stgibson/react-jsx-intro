const Alert = (props) => {
  const style = { backgroundColor: props.color, padding: "10px" };
  return <div className="alert" style={ style }>{ props.message }</div>;
};