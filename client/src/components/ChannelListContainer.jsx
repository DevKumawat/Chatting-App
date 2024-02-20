// import { preview } from "vite";
import { ChannelSearch, Sidebar, TeamChannelList, TeamChannelPreview } from "./"
import { ChannelList , useChatContext } from "stream-chat-react";

const ChannelListContainer = () => {
  const CompanyHeader = () => {
    return (
      <>
        <p className="">Chat Application</p>
      </>
    );
  };

  return (
    <>
      <div className="h-screen bg-gray-800 flex">
        <div className="w-20">
          <Sidebar />
        </div>
        <div className="text-white m-4">
          <CompanyHeader />
          <ChannelSearch/>
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
    </>
  );
};

export default ChannelListContainer;
