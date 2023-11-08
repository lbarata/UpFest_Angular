interface Artista {
  id : number,
  nome : string,
  estilo : string,
  imagem : string,
}

interface Paginacao {
  pagina : number,
  paginas : number,
  resultados : number,
}

interface artistaResponse {
  artistas : Artista[],
  paginacao : Paginacao,
  success : boolean,
}

export {Artista};
export {artistaResponse};
