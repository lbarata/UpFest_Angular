interface Evento {
  id : number,
  designcao : string,
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

interface ApiResponse {
  eventos : Evento[],
  paginacao : Paginacao,
  success : boolean,
}
