function Planet({ planet }) {
  return (
    <div className="wrap">
      <div>{planet.name}</div>
      <div>{planet.climate}</div>
      <div>{planet.diameter}</div>
    </div>
  );
}

export default Planet;
