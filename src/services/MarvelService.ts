
export class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=08db68c8a8a3b68696c25718986da835'

    getResource = async (url: string) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);      
    }

    getCharacter = (id: number) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);      
    }
}

