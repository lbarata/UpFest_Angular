interface DetalheArtista {
    id : number,
    nome : string,
    estilo : string,
    imagem : string,
    biografia : string,
}

interface detalheArtistaResponse {
    artista : DetalheArtista,
    success : boolean

}


export {DetalheArtista};
export {detalheArtistaResponse};
