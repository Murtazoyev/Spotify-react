import { createContext } from "react";

const spotify = createContext({
    client_id: "f2e286ece2574ad6b334b55d03764483",
    REDIRECT_URI: "https://weprospoty.netlify.app/",
    // REDIRECT_URI: "http://localhost:3000",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token",
    token: ""
})

export default spotify