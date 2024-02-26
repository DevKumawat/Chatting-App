import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import { ChannelListContainer, ChannelContainer ,AuthCheck  } from "./components/index"
import "./App.css"
import Cookies from "universal-cookie"
import { useState } from "react"


const cookies = new Cookies();

const apiKey = import.meta.env.VITE_API_KEY
const token = cookies.get("token")
const client = StreamChat.getInstance(apiKey)
function App() {

  const [createType , setCreateType] = useState('');
  const [isCreating , setIsCreating] = useState(false);
  const [isEditing , setIsEditing] = useState(false);

  if(token){
    client.connectUser({
      id : cookies.get("userId"),
      name : cookies.get("userName"),
      fullName : cookies.get("fullName"),
      image : cookies.get("avatarUrl"),
      hashedPassword : cookies.get("password"),
      phoneNumber : cookies.get("phoneNumber"),
    },token)
  }

 if(!token) return <AuthCheck/>

  return (
    <>
      <div className="flex">
        <Chat client={client}>
          <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType = {setCreateType}
            setIsEditing = {setIsEditing}
          />
          <ChannelContainer
            isCreating= {isCreating}
            setIsCreating = {setIsCreating}
            isEditing  = {isEditing}
            setIsEditing = {setIsEditing}
            createType =  {createType}
          />
           
        </Chat>

      </div>
    </>
  )
}

export default App
