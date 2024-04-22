import axios from "axios";

const $GATEWAY_ENDPOINT = process.env.NEXT_PUBLIC_BASE_URL;

export const GATEWAY_ENDPOINT = axios.create({
    baseURL: $GATEWAY_ENDPOINT
})

GATEWAY_ENDPOINT.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        if (typeof err.response === "undefined") {
            console.log("network error")
            return "ERROR";
        }
        console.log(err.response.data.message)
        return "ERROR";
    }
)

