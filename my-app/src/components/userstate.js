import UserContext from "./usercontext";

const UserState = (props) => {

    const UserDetail = {
        name: "faraz",
        address: "gulshan",
        country:"pakistan",

    }
    
    return(
        <>
<UserContext.Provider value={UserDetail}>
    {props.children}
</UserContext.Provider>
</>

);

};
export default UserState;