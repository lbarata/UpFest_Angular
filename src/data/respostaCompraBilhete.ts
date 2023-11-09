
interface Bilhete {
    "id": number,
    "participante": number,
    "evento": number,
    "serie":number,
    "codigo": string | null,
    "pagamento": number
}

interface Pagamento {
    "id": number,
    "entidade": number,
    "referencia": number,
    "valor": number,
    "data_compra": string,
    "data_validado": string | null
}





interface RespostaCompraBilhete {
    message : string;
    bilhete : Bilhete;
    pagamento : Pagamento;
    success : boolean;

}

export {RespostaCompraBilhete};
