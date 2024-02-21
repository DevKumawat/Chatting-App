// import { preview } from "vite";
import { ChannelSearch, Sidebar, TeamChannelList, TeamChannelPreview } from "./"
import { ChannelList , useChatContext } from "stream-chat-react";
import { PiNotePencilThin } from "react-icons/pi";
import { MdOutlineSegment } from "react-icons/md";


const ChannelListContainer = () => {
  const CompanyHeader = () => {
    return (
      <>
      <div className="flex justify-between items-center">

        <div>

        <p className="text-xl font-medium	">Chat Application</p>
        </div>

        <div className="flex text-2xl gap-8">
          <span>
          <PiNotePencilThin />
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
      <div className="h-screen bg-sky-500	 flex">
        <div className="w-20">
          <Sidebar />
        </div>
        <div className="text-white m-4">
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
