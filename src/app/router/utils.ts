export const ROUTES ={
    main: '/',
    auth:{
        login: 'auth/login',
        register: 'auth/register'
    },
    games:{
        roulette: 'games/roulette',
        slots: 'games/slots',
        hummers: 'games/hummers',
    }
}

export const generateUrl=(url:string, params?:any)=>{
    return url;
}