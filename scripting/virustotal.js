let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // handle submit
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("URL");

  if (URL.value == "" || password.value == "") {
    // throw error
  } else {
	  
    const options = {
		 method: 'POST',
		 headers: {
		 accept: 'application/json',
		'content-type': 'application/x-www-form-urlencoded',
		'x-apikey' : '84c6cb1270f35688a0a3b394a0e45500126eb9555533dcd8b3bb6db477e5dbde'
		 }
		};
	let baseurl = 'https://www.virustotal.com/api/v3/urls' + '/' + "URL.value"
	fetch(baseurl, options)
	  .then(response => response.json())
	  .then(response => console.log(response))
	  .catch(err => console.error(err));
	  }
	  
	fetch('https://www.virustotal.com/api/v3/analyses/')
});

