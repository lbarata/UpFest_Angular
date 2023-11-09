interface ConcertoEvento {
  "id": number,
  "data_hora_inicio": string,
  "data_hora_fim": string
  "artista": string,
  "artista_id": number,
  "palco": string,
  "imagem": string,
}


interface PaginacaoEvento  {
  "pagina": number,
  "paginas": number,
  "resultados": number,
}

interface concertoEventoResponse {
  concertos : ConcertoEvento[];
  paginacao : PaginacaoEvento;
  success : boolean,
}


export {ConcertoEvento};
export {concertoEventoResponse};
