import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import { ChannelListContainer, ChannelContainer ,AuthCheck  } from "./components/index"
import "./App.css"
import Cookies from "universal-cookie"

const cookies = new Cookies();

function App() {

 const apiKey = import.meta.env.VITE_API_KEY
//  console.log(apiKey);

const clients = StreamChat.getInstance(apiKey)

const token = cookies.get("token")

// const authToken = false ; 
 if(!token) return <AuthCheck/>

  return (
    <>
      <div className="flex">
        <Chat client={clients}>
          <ChannelListContainer/>
          <ChannelContainer/>

        </Chat>
      </div>
    </>
  )
}

export default App
