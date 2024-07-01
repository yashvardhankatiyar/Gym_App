

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'c6bbf0be22msh92a69fa5a7922d7p19603ejsn5be6a51b6dee',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
