import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../store/middleware"

export function UserProfile(){
    const state = useSelector(state => state)

    console.log((state));
    const user = state.user.user;
    const pending = state.user.pending;
    const error = state.user.error;
    const dispatch = useDispatch()

    console.log({user});

    useEffect(()=> {
        dispatch(fetchUser())
    }, [])

    if(pending){
        return <h2 style={{color: 'white'}}>Loading....</h2>
    }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/1')
    //     // .then(console.log)
    //     .then(data => data.json())
    //     .then((userInfo) => {
    //         setProfile({name: userInfo.name, avatar_url: userInfo.avatar_url})
    //     })
    // }, [])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users/2')
    //         // .then(console.log)
    //         .then(({data: userInfo}) => {
    //         setProfile({name: userInfo.name})
    //     })
    // }, [])
    return (<>
        <div>
            <h2>Hello, {user.name}</h2>
            {/* <img style={{width: 50, height: 50, borderRadius: '50%'}} src={profile.avatar_url
} alt=""/> */}
        </div>
    </>)
}