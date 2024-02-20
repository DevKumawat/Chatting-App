import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import { ChannelListContainer, ChannelContainer ,AuthCheck  } from "./components/index"
import "./App.css"

function App() {

 const apiKey = import.meta.env.VITE_API_KEY
//  console.log(apiKey);

const clients = StreamChat.getInstance(apiKey)

const authToken = false ; 
 if(!authToken) return <AuthCheck/>

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
