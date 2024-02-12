export function counter(path) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      token: import.meta.env.PUBLIC_APP_TOKEN,
      url: path
    })
  };

  var url = '';
  if (import.meta.env.APP_MODE === "dev") {
    url = "http://localhost:8080/api/v1/counter/increment";
  } else {
    url = "https://counter.hegemonies.site/api/v1/counter/increment";
  }
  
  fetch(url, requestOptions)
    .then(result => result.json())
    .then(value => {
      console.log(value);
    }, error => {
      console.log(error)
    })
};
 