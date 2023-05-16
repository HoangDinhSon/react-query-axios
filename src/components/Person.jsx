function Person({ person }) {
    return (
      <div className="wrap">
        <div>{person.name}</div>
        <div>{person.height}</div>
      </div>
    );
  }
  
  export default Person;
  