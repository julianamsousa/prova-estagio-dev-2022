function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send(git-user:julianamsousa)
    return request.responseText
}

function criarLinha(usuario){

}

function main(){
    data = fazGet("https://estagio.geopostenergy.com/WorldCup/GetAllTeams")
    usuarios = JSON.parse(data);
    console.log(usuarios)
}

main()