    const myHeaders = new Headers({
        'git-user':'julianamsousa'
    });
    
    const myInit = {
      method: 'GET',
      headers: myHeaders,
    };

    const myRequest = new Request('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', myInit);

    fetch(myRequest).then(response => {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });





