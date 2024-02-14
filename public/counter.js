export function counter(path) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      token: "grafting-rekindle-blurred-renovator9-dedicate",
      url: path
    })
  };

  var url = "https://counter.hegemonies.site/api/v1/counter/increment";
  
  fetch(url, requestOptions)
    .then(result => result.json())
    .then(value => {
      console.log(value);
    }, error => {
      console.log(error)
    })
};
 