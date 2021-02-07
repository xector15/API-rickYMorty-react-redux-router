const reducer = (state, action) => {
    
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_VIDEO_SOURCE':
            
            const playId = [ ...state.personajes, ...state.robot, ...state.creatures]

            return {
                ...state,
                playing: playId.find(item => item.id === Number(action.payload))
            }
        case 'GET_SEARCH':
            if(action.payload === "") return { ...state, search: []};
            const list = [ ...state.personajes, ...state.robot, ...state.creatures]
            return {
                ...state,
                search: list.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()))
            };
        case 'GET_PERSONAJES':
            return {
                ...state,
                personajes: action.payload 
            }
        case 'SET_PERSONAJES_DEAD':
            return {
                ...state,
                dead: action.payload
            }
        case 'SET_ROBOT':
            return {
                ...state,
                robot: action.payload
            }
        case 'SET_CREATURE':
            return {
                ...state,
                creatures: action.payload
            }
        default:
            return state
    }

}

export default reducer;