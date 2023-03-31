import axios from "axios";

// S9SE1F5-0YRM6ZE-NYR1BQS-46DD1SP
// PPGDBVZ-4SY4Q6B-MVRZ8DN-FGDCK4Q
// RXAY6A6-91X4EZ9-NM2Z1JC-ENZGZKC
// GENRANJ-ZQ1M4CS-PSW5Y7F-YXQYR4W
// NYMR7T7-NC04P3Z-KK0SX7R-6WVF0SX
// NESTZ1Y-ZMW4954-J6VH0JM-9MGT7F8

export default class getAllFilms{
    static async get(contentType = 'movie', page = 1, search = ''){
        const response = await axios.get('/v1/movie', {
            headers: {
                "accept": "application/json",
                "X-API-KEY": "PPGDBVZ-4SY4Q6B-MVRZ8DN-FGDCK4Q"
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