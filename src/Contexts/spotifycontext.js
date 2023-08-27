import { createContext } from "react";

const spotify = createContext({
    client_id: "44f2d95737104a19943990a814afccbd",
    REDIRECT_URI: "https://main--delightful-daifuku-f7f604.netlify.app/",
    // REDIRECT_URI: "http://localhost:3000",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token",
    token: ""
})

export default spotify