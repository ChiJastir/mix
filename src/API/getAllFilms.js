import axios from "axios";

// S9SE1F5-0YRM6ZE-NYR1BQS-46DD1SP
// PPGDBVZ-4SY4Q6B-MVRZ8DN-FGDCK4Q
// RXAY6A6-91X4EZ9-NM2Z1JC-ENZGZKC
// GENRANJ-ZQ1M4CS-PSW5Y7F-YXQYR4W

export default class getAllFilms{
    static async get(contentType = 'movie', page = 1, search = ''){
        const response = await axios.get('/v1/movie', {
            headers: {
                "accept": "application/json",
                "X-API-KEY": "RXAY6A6-91X4EZ9-NM2Z1JC-ENZGZKC"
            },
            params: {
                type: contentType,
                page: page,
                name: search,
            }
        })
        return response
    }
}