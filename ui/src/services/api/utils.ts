import Axios, { AxiosInstance } from 'axios'

export type ClientOptions = {
    baseUrl: string
}

export default function instance(options: ClientOptions): AxiosInstance {
    if (!options.baseUrl) {
        throw new Error('Must configure the base url for the ApiClientInstance')
    }

    return Axios.create({
        baseURL: options.baseUrl,
        timeout: 5000,
        headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0
        }
    })
}