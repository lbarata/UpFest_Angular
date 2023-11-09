interface ConcertoArtista {
  "id": number,
  "data_hora_inicio": string,
  "data_hora_fim": string,
  "evento": string,
  "palco": string,
  "imagem": string,
  "evento_id": number
}


interface PaginacaoArtista  {
  "pagina": number,
  "paginas": number,
  "resultados": number
}

interface concertoArtistaResponse {
  concertos : ConcertoArtista[];
  paginacao : PaginacaoArtista;
  success : boolean,
}


export {ConcertoArtista};
export {concertoArtistaResponse};
