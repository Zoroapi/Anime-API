# Anime API Wrapper

## API Base

`https://www.zoroapi.tk/`

## Authentication
This API doesn't require any Authentication As We does not store any files on our server,
we only linked to the media which is hosted on 3rd party services!

## Rate Limits
The number of request is limited to 120 requests per hour, per IP address. I wanted to make it unlimited, but some people like to go wild, so I had to set a limit to guarantee the good functionality for everyone. If you need a higher limit, please contact us on discord. All IPs sending excessive requests will be banned.
If you need help using this API, please don't hesistate to contact us. BUT while using auotcode Endpoint There Is no limits!

<h2>Endpoint</h2>

<kbd>GET</kbd> `https://www.zoroapi.tk/search?name=<name>`
<h3>Fetch Example</h3> 

```js
const axios = require("axios");
 const getData = async (animename) => {
     let url = `http://www.zoroapi.tk/search?name=${animename}`;
     await axios.get(url)
     .then(function (response) {
         console.log(response.data);
     })
 };
 getData("Example"); // Example - Naruto
 ```
 
<h3>Sample Response <kbd>JSON</kbd></h3>

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
