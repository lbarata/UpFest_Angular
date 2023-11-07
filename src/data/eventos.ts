interface Evento {
  id : number,
  designacao : string,
  imagem : string,
  data : string,
  local : string,
  preco_deste : number,
}

interface Paginacao {
  pagina : number,
  paginas : number,
  resultados : number,

}

interface eventoResponse {
  eventos : Evento[],
  paginacao : Paginacao,
  success : boolean,
}


export {eventoResponse};
export {Evento};
