const Person = (props) => {
  // Reviewed how to use substring at https://www.w3schools.com/jsref/jsref_substring.asp
  return <div>
    <p>Learn some information about this person</p>
    <p>
      Name: { props.name.length > 8 ? props.name.substring(0, 6) : props.name }
    </p>
    <h3>{ props.age >= 18 ? "please go vote!" : "you must be 18" }</h3>
    Hobbies:
    <ul>
      { props.hobbies.map(hobby => <li>{ hobby }</li>)}
    </ul>
  </div>;
};