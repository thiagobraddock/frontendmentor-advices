export const fetchData = async () => {
  const url = 'https://api.adviceslip.com/advice';
  const response = await fetch(url);
  // console.log('RESPONSE: ',response);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados da API');
  }
  const data = await response.json();

  return data;
};
