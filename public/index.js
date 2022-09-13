const axios = require('axios');
module.exports = async (search, context) => {
  console.log(search);
  let url = `https://www.zoroapi.tk/search?name=${search}`;
  let status = `success`;
  let amount = `1`;
  console.log(url);
  let response = await axios.get(url);
  console.log(response.data);
  let query =
    response.data?.results.length > 0 ? response.data.results[0] : null;
  if (query == null) {
    throw new Error(`Invalid: "${search}" No Anime Found!`);
    return (response) => response.data();
  }
  return {
    status: `${status}`,
    search: `${search}`,
    amount: `${amount}`,
    anime: {
      name: `${query.title}`,
      episodes: `${query.episodes}`,
      duration: `${query.duration}`,
      languages: `${query.languages}`,
      link: `${query.link}`,
    },
  };
}
