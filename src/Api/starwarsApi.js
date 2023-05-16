export const fetchData = async (key , page) => {
  const res = await fetch(`http://swapi.dev/api/${key}/?page=${page}`);
  return res.json();
};
