# Anime API
## Preview

## API Base
We does not store any files on our server, we only linked to the media which is hosted on 3rd party services!

`https://www.zoroapi.tk/`
## Authentication
This API doesn't require any Authentication.
## Rate Limits
The number of request is limited to 120 requests per hour, per IP address. I wanted to make it unlimited, but some people like to go wild, so I had to set a limit to guarantee the good functionality for everyone. If you need a higher limit, please contact us on discord. All IPs sending excessive requests will be banned.
If you need help using this API, please don't hesistate to contact us.

## Endpoint 
```
https://www.zoroapi.ml/search?name=<name>
```
### Fetch Example
```js
const axios = require("axios");

const getData = async (animename) => {
    let url = `http://www.zoroapi.ml/search?name=${animename}`;
    await axios.get(url)
    .then(function (response) {
        console.log(response.data);
    })
};

getData("Example"); // Example - Naruto
```
### Sample Response
```js
{
  "status": "success",
  "search": "naruto",
  "amount": "1",
  "anime": {
    "name": "Boruto: Naruto Next Generations",
    "episodes": "266",
    "duration": "23m",
    "languages": "SUB,DUB",
    "link": "https://zoro.to/boruto-naruto-next-generations-8143?ref=search"
  }
}
```
