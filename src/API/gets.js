import axios from "axios";

// S9SE1F5-0YRM6ZE-NYR1BQS-46DD1SP
// PPGDBVZ-4SY4Q6B-MVRZ8DN-FGDCK4Q
// // RXAY6A6-91X4EZ9-NM2Z1JC-ENZGZKC
// GENRANJ-ZQ1M4CS-PSW5Y7F-YXQYR4W
// NYMR7T7-NC04P3Z-KK0SX7R-6WVF0SX
// NESTZ1Y-ZMW4954-J6VH0JM-9MGT7F8

const key = 'S9SE1F5-0YRM6ZE-NYR1BQS-46DD1SP'

export default class gets {
    static async getMovies(
            contentType = 'movie',
            page = 1,
            search = '',
            filter= 'votes.kp',
            year= '1860-2030',
            genre = '',
            limit = 25,
        ){

        const params = new URLSearchParams()

        params.append('type', contentType)
        params.append('sortField', filter)
        params.append('year', year)
        params.append('page', page.toString())
        params.append('limit', limit.toString())

        if (search)
            params.append('name', search)
        if (genre)
            params.append('genres.name', genre)

        const response = await axios.get('/v1/movie', {
            headers: {
                "accept": "application/json",
                "X-API-KEY": key,
            },
            params: params
        })
        return response
    }

    static async getById(id){
        const response = await axios.get(`/v1/movie/${id}`, {
            headers: {
                "accept": "application/json",
                "X-API-KEY": key
            },
            params: {
                "notNullFields": "facts.value"
            }
        })
        return response
    }
    static async getRandom(){
        // const params = new URLSearchParams()
        // for(let i = 0; i < selectFields.length; i++){
        //     params.append('selectFields', selectFields[i])
        // }
        // console.log(params.toString())
        const response = await axios.get('/v1/movie/random', {
            headers: {
                "accept": "application/json",
                "X-API-KEY": key
            },
        })
        return response
    }
    static async getPersonById(id){
        const response = await axios.get(`/v1/person/${id}`, {
            headers: {
                "accept": "application/json",
                "X-API-KEY": key
            },
        })
        return response
    }
}