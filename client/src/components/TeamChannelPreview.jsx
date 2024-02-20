import {Avatar, useChatContext } from "stream-chat-react";

function TeamChannelPreview({channel , type}) {
    const {channel : activeChannel , client} = useChatContext();

    const ChannelPreview = ()=>{
        return(
                <p> 
                    {channel?.data?.name} || {channel?.data?.id}
                </p>
        )
    }

    const DirectPreview = ()=>{

        const members  = Object.values(channel.state.members).filter(({user})=> user.id !== client.userID);

        // console.log(members[0]);
        return(
            <div>
                <Avatar
                image={members[0]?.user.image}
                name={members[0]?.user?.fullname}
                size={24}
                />
                <p>{members[0]?.user?.fullname || members[0]?.user?.id }</p>
            </div>
        )
    }
    return ( 
    <div className={channel?.id === activeChannel?.id ? "" : ""} onClick={()=>{
        console.log(channel);
    }} >
        {type === "team" ? <ChannelPreview/> : <DirectPreview/>}
    </div>
     );
}

export default TeamChannelPreview;