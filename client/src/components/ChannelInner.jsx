import React, { useState } from 'react';
import { MessageList , MessageInput , Thread , Window , Avatar , useChannelActionContext , useChannelStateContext , useChatContext } from 'stream-chat-react'; 

import { IoMdInformationCircleOutline } from "react-icons/io";

export const GiphyContext = React.createContext({});

const ChannelInner = () => {
  const [giphyState , setGiphyState] = useState(false);
  const { sendMessage } = useChannelActionContext();

  const overrideSubmitHandler = (message)=>{
    let updatedMessage = {
      attachements : message.attachements,
      mentioned_users : message.mentioned_users,
      parent_id : message.parent?.id,
      parent : message.parent,
      text : message.text,
    }

    if(giphyState) {
      updatedMessage = {...updatedMessage, text : `/giphy ${message.text}`}
    }

    if(sendMessage){
      sendMessage(updatedMessage);
      setGiphyState(false);
    }
  }


  return (

    <GiphyContext.Provider value={{ giphyState , setGiphyState }}>
      <div>
        <Window>
          <TeamChannelHeader setIsEditing={setIsEditing} />
          <MessageList />
          <MessageInput overrideSubmitHandler={overrideSubmitHandler}/>
        </Window>
      </div>
    </GiphyContext.Provider>
    
  )
}

const TeamChannelHeader = ({ setIsEditing })=>{
  const { channel , watcher_count } = useChannelStateContext();
  const { client } = useChatContext();

  const MessagingHeader = ()=>{
    const members = Object.values(channel.state.members).filter(({ user })=> user.id !== client.userID);
    const additionalMembers = members.length-3;

    if(channel.type === 'messaging'){
      return (
        <div>
          {members.map(({user} , i) => (
            <div key={i}>
              <Avatar image={user.image} name={user.fullName || user.id} size = {32}  />
              <p>
                {user.fullName || user.id}
              </p>
            </div>
          ))}

          {additionalMembers >0 && <p>and {additionalMembers} more</p>}
        </div>
      )
    }

    return (
      <div>
        <p>
          # {channel.data.name}
        </p>
        <span onClick={()=> setIsEditing(true)}>
          <IoMdInformationCircleOutline />
        </span>
      </div>
    )
  }

  const getWatcherText = (watchers)=>{
    if(!watchers) return 'No user online';
    if(watchers === 1) return '1 User online';
    return `${watchers} users online`;
  }

  return (
    <div>
      <MessagingHeader />
      <div>
        <p>{getWatcherText(watcher_count)}</p>
      </div>
    </div>
  )
}

export default ChannelInner;