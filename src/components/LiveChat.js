import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

function LiveChat() {
  const [liveMessage, setLiveMessage] = useState("");

  const ChatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        }),
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[481px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {
          // Desclaimer: Don't use Indexes as Keys
          ChatMessages.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))
        }
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("On Form Submit ", liveMessage);

          dispatch(
            addMessage({
              name: "Pramod N",
              message: liveMessage,
            }),
          );

          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
}

export default LiveChat;
