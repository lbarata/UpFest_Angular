interface DetalheEvento {
    id : number,
    designacao : string,
    imagem : string,
    data : string,
    local : string,
    descricao : string
}

interface detalheEventoResponse {
    evento : DetalheEvento,
    success : boolean

}


export {DetalheEvento};
export {detalheEventoResponse};
