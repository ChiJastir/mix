import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            await setIsLoading(true)
            await callback(...args)
        } catch (error){
            await setError(error.message)
        } finally {
            await setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}