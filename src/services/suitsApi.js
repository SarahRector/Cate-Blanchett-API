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

export const getSuits = async() => {
  const res = await fetch(`${process.env.API_URL}/api/v1/suits`);
  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};

export const deleteSuit = async(id) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/suits/${id}`, {
    method: 'DELETE'
  });
  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};
