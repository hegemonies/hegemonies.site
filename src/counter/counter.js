export function counter(path) {
  console.log("token =", process.env.REACT_APP_TOKEN)

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      token: process.env.REACT_APP_TOKEN,
      url: path
    })
  };

  var url = '';
  if (process.env.REACT_MODE === "dev") {
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
