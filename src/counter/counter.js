export function counter(path) {
  console.log("token =", import.meta.env.APP_TOKEN)

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      token: import.meta.env.APP_TOKEN,
      url: path
    })
  };

  var url = '';
  if (import.meta.env.APP_MODE === "dev") {
    url = "http://localhost:8080/api/v1/counter/increment";
  } else {
    url = "https://counter.hegemonies.site/api/v1/counter/increment";
  }
  console.log("APP_MODE =", import.meta.env.APP_MODE)
  console.log("url =", url);
  
  fetch(url, requestOptions)
    .then(result => result.json())
    .then(value => {
      console.log(value);
    }, error => {
      console.log(error)
    })
};
