const fetchData = async function (url) {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWU3MjMzMWZkMjI4ZjU4MzNlOGEwMmMwY2VlMGM2ZCIsInN1YiI6IjY0ZmY0MzA1ZGI0ZWQ2MTA0MzA4OTVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.weXhkFHUXbAKluGa2cDiY0QmMg5osdnK9gdbMeKz8OE",
      },
    });
    const data = await res.json();
    // if (data.length < 1) {
    //   throw new Error(`No data found for this request`);
    // }

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
