import React, { useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SessionContext = React.createContext({})

export function useSessionContext() {
    return useContext(SessionContext)
}

function SessionProvider({ children }) {

    const [session, setSession] = useState()
    
    const defaultPosts = [
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Imperial_Academy_of_Arts_Panorama.jpg',
            name: 'Matteo Renzi',
            description: "questa non è la sede dell'ITS Academy"
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/014_Wild_Red_Deer_Switzerland_Photo_by_Giles_Laurent.jpg',
            name: 'Matteo Renzi',
            description: 'Il cervo di tua sorella!!!'
        },

    ]

    const [posts, setPosts] = useState(defaultPosts)

    useEffect(() => { loadSession() }, [])

    async function loadSession() {
        const savedSession = await AsyncStorage.getItem('@user_session')
        if (savedSession) {
            setSession(JSON.parse(savedSession))
        }
    }

    async function login(newSession) {
        await AsyncStorage.setItem('@user_session', JSON.stringify(newSession))
        setSession(newSession)
    }

    function addPosts ( newPosts ) {
        const uptadePosts = [ newPosts, ...posts]
        setPosts( uptadePosts )
    }

    async function logout() {
        await AsyncStorage.removeItem('@user_session')
        setSession(null)
    }

    const data = {
        session: session,
        login: login,
        logout: logout,

        posts: posts,
        addPosts: addPosts
    }

    return (
        <SessionContext.Provider value={data}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider