export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
});

export const deleteFavorite = payload => ({
    type:'DELETE_FAVORITE',
    payload
});

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload
});

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload
});

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload
});

export const getVideoSource = payload => ({
    type: 'GET_VIDEO_SOURCE',
    payload
});

export const getSearch = payload => ({
    type: 'GET_SEARCH',
    payload
});

export const getPersonajes = payload => ({
    type: 'GET_PERSONAJES',
    payload
})

export const setPersonajesDead = payload => ({
    type: 'SET_PERSONAJES_DEAD',
    payload
})

export const setRobot = payload => ({
    type: 'SET_ROBOT',
    payload
})

export const setCreature = payload => ({
    type: 'SET_CREATURE',
    payload
})