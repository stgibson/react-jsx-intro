const Tweet = (props) => {
  return <div>
    <p>
      { props.message } <span>
        By { props.name } ({ props.username }) on { props.date }
      </span>
    </p>
  </div>;
};