const FEEDS_URL = "http://192.168.0.107:5000/"
const ARQUIVOS_URL = "http://192.168.0.107:80/"

export const acessarUrl = async (url) => {
    let promise = null;

    console.log("acessando: " + url);

    try {
        resposta = await fetch(url, { method: "GET" });
        if (resposta.ok) {
            promise = Promise.resolve(resposta.json());
        } else {
            promise = Promise.reject(resposta);
        }
    } catch (erro) {
        promise = Promise.reject(erro)
    }

    return promise;
}

export const getFeeds = async (pagina) => {
    return acessarUrl(FEEDS_URL + "feeds/" + pagina);
}

export const getFeed = async (feedId) => {
    return acessarUrl(FEEDS_URL + "feed/" + feedId);
}

export const feedAlive = async () => {
    return acessarUrl(FEEDS_URL + "isalive");
}

export const getImagem = (imagem) => {
    return { uri: ARQUIVOS_URL + imagem };
}