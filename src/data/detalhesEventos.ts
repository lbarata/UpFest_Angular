interface DetalheEvento {
    id : number,
    designacao : string | any,
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
