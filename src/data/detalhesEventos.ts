interface DetalheEvento {
    id : number,
    designacao : string,
    imagem : string,
    data : string,
    local : string,
    descricao : string
}

interface detalheResponse {
    evento : DetalheEvento,
    sucess : boolean

}



export {DetalheEvento};
export {detalheResponse};
