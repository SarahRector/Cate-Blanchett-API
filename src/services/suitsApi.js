export const postSuit = async(suit) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/suits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(suit)
  });

  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};
