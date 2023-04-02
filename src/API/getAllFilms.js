import axios from "axios";

// S9SE1F5-0YRM6ZE-NYR1BQS-46DD1SP
// PPGDBVZ-4SY4Q6B-MVRZ8DN-FGDCK4Q
// RXAY6A6-91X4EZ9-NM2Z1JC-ENZGZKC
// GENRANJ-ZQ1M4CS-PSW5Y7F-YXQYR4W
// NYMR7T7-NC04P3Z-KK0SX7R-6WVF0SX
// NESTZ1Y-ZMW4954-J6VH0JM-9MGT7F8

export default class getAllFilms{
    static async get(
            contentType = 'movie',
            page = 1,
            search = '',
            filter= 'votes.kp',
            year= '1860-2030',
            genre = '',
        ){

        const params = new URLSearchParams()

        params.append('type', contentType)
        params.append('sortField', filter)
        params.append('year', year)
        params.append('page', String(page))

        if (search)
            params.append('name', search)
        if (genre)
            params.append('genres.name', genre)

        console.log('resp!')

        const response = await axios.get('/v1/movie', {
            headers: {
                "accept": "application/json",
                "X-API-KEY": "RXAY6A6-91X4EZ9-NM2Z1JC-ENZGZKC"
            },
            params: params
        })
        return response
    }

    static async getById(id){
        const response = await axios.get(`/v1/movie/${id}`, {
            headers: {
                "accept": "application/json",
                "X-API-KEY": "RXAY6A6-91X4EZ9-NM2Z1JC-ENZGZKC"
            },
        })
        return response
    }
}