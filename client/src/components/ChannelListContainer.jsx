// import { preview } from "vite";
import { ChannelSearch, Sidebar, TeamChannelList, TeamChannelPreview } from "./"
import { ChannelList , useChatContext } from "stream-chat-react";
import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineSegment } from "react-icons/md";


const ChannelListContainer = () => {
  const CompanyHeader = () => {
    return (
      <>
      <div className="flex justify-between items-center">

        <div>

        <p className="text-xl font-medium	">Chats</p>
        </div>

        <div className="flex text-2xl gap-6 text-cyan-600">
          <span>
          <PiNotePencilBold />
          </span>
          <span>
          <MdOutlineSegment />
          </span>
        </div>

      </div>
      </>
    );
  };

  return (
    <>
      <div className="h-screen text-black flex ">
        <div className="w-20">
          <Sidebar />
        </div>
        <div className=" p-5 bg-sky-100 rounded-l-3xl relative right-3 dark:bg-black dark:border dark:text-white dark:border-cyan-600">
          <CompanyHeader />
          <ChannelSearch/>
          <div className="mt-4">
          <ChannelList
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps)=>{
            return(
                <TeamChannelList {...listProps}
                type="team"/>
            )
          }}
          Preview={(previewProps)=>{
            return(
                <TeamChannelPreview {...previewProps}
                type="team"/>
            )
          }}
          />
          <ChannelList
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps)=>{
            return(
                <TeamChannelList {...listProps}
                type="messaging"/>
            )
          }}
          Preview={(previewProps)=>{
            return(
                <TeamChannelPreview {...previewProps}
                type="messaging"/>
            )
          }}
          />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ChannelListContainer;
