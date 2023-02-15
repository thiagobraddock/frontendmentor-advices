const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}`);
  }
  return response.json();
};

export const fetchRandomAdvice = async () =>
  fetchData(`https://api.adviceslip.com/advice`);
