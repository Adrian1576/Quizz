const nomes = ["Pedro", "Adrian", "Henrique", "Maria", "Amanda", "Neymar", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)