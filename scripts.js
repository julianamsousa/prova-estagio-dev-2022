    const myHeaders = new Headers({
        'git-user':'julianamsousa'
    });
    
    const myInit = {
      method: 'GET',
      headers: myHeaders,
    };

    const myRequest = new Request('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', myInit);

    //relação de todos os times no console
    fetch(myRequest).then(response => {
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
/*
    //testando o retorno da requisição
    const [avaLocal, setAvaLocal] = useState([]);
    if(avaLocal.descri == undefined){
        console.log('avaLocal.descri ainda é undefined');
    } else {
        console.log('avaLocal.descri está pronto');
    }
*/
    //relação de todos os times no html
    fetch(myRequest)
    .then(res => {
        res.json().then(data => {
            const chars = data.result;

            return chars.map(char => {
                const ul = document.getElementById('info');
                const li = document.createElement('li');
                const h4 = document.createElement('h4');
                h4.innerHTML = `${char.name}`;
                ul.appendChild(li);
                li.appendChild(h4);
            });    
        })
    })
    .catch(err => console.error('Não foi possível achar a informação', err));

    //requisição de um elemento no json para o html
    const requisicao = fetch(myRequest)
    .then(response => {
        return response.json();
    })
    .then(jsonBody => {
        document.querySelector("grupoA").innerHTML = jsonBody[0].name;
        console.log(jsonBody);
    });

    console.log(requisicao);
