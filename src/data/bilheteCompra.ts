interface BilheteCompra {
  "id": number,
  "designacao": string,
  "limite_vendas": string,
  "custo": number,
  "disponivel": boolean
}

interface bilheteCompraResponse {
  series : BilheteCompra[],
  success : boolean
}
export {BilheteCompra};
export{bilheteCompraResponse};
