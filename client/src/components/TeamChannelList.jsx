const TeamChannelList = ({children , error = false , loading , type}) => {
    if(error){
        return type === "team" ? 
        <div>
            <p>
                Connection error , Please wait a moment and try again.
            </p>
        </div>
        : null
    }

    if(loading){
        return (
            <div>
                <p>
                    {type==="team" ? "Channels" : "Messages"}...loading
                </p>
            </div>
        )
    }
    return (  
        <>
        <div>
            <div>
                <p>
                    {type === "team" ? "Channels" : "Direct Message "}
                </p>
            </div>
            {children}
        </div>
        </>
    );
}

export default TeamChannelList;