import GlassSurface from "./GlassSurface";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "@/index.css";
import { IoSend } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import { useEffect, useState } from "react";
import useChatContext from "@/context/ChatContext";
import { useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import { Stomp, Client } from "@stomp/stompjs";
import toast from "react-hot-toast";

function ChatPage() {
  const { roomId, currentUser, connected } = useChatContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (!connected) {
      navigate("/");
    }
  }, [connected, roomId, currentUser]);

  const [messages, setMessages] = useState([
    {
      content: "Hello?",
      sender: "Plabon",
    },
    {
      content: "Hello?",
      sender: "Plaban",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useState(null);
  const chatBoxRef = useState(null);
  const [stompClient, setStompClient] = useState<Client | null>(null);

  // Page Initialize

  // messages ko load karne honge

  // stompClient ko init karne honge

  // subscribe

  useEffect(() => {
    let client: Client | null = null;

    const connectWebSocket = () => {
      console.log("Attempting to connect to WebSocket...");

      // Modern approach - no warnings
      client = new Client({
        webSocketFactory: () => new SockJS("http://localhost:8080/chat"),
        onConnect: (frame) => {
          console.log("WebSocket connected successfully!");
          setStompClient(client);
          toast.success("Connected :)");

          client?.subscribe(`/topic/room/${roomId}`, (message) => {
            console.log(message);
            const newMessage = JSON.parse(message.body);
            setMessages((prev: any) => [...prev, newMessage]);
          });
        },
        onStompError: (frame) => {
          console.error("STOMP error:", frame);
        },
      });

      client.activate();
    };

    connectWebSocket();

    // Cleanup function
    return () => {
      if (client && client.active) {
        console.log("Deactivating WebSocket connection...");
        client.deactivate();
      }
    };
  }, [roomId]);

  // send message Handle

  const sendMessage = async () => {
  if (connected && stompClient && input.trim()) {
    console.log("Input:", input);

    const message = {
      sender: currentUser,
      content: input,
      roomId: roomId,

    };

    console.log("Message to send:", message);

    try {
      stompClient.publish({
        destination: `/app/sendMessage/${roomId}`, // ✅ Add /app prefix
        body: JSON.stringify(message),
      });
      
      console.log("✅ Message published successfully!");
      toast.success("Message sent!"); // Visual confirmation
      setInput("");
      
    } catch (error) {
      console.error("❌ Error publishing message:", error);
      toast.error("Failed to send message");
    }
  } else {
    console.log("❌ Cannot send message:");
    console.log("- Connected:", connected);
    console.log("- StompClient:", !!stompClient);
    console.log("- Input:", input);
  }
};


  return (
    <>
      <div className="dark:bg-gray-950 dark:text-neutral-50 bg-gray-200 w-screen h-screen">
        <header className="h-20 fixed w-full flex justify-center items-center mt-5">
          <GlassSurface
            width={"90%"}
            displace={15}
            distortionScale={-150}
            redOffset={5}
            blur={10}
            greenOffset={15}
            blueOffset={25}
            brightness={10}
            opacity={0.8}
            mixBlendMode="screen"
            className=""
          >
            <div className="relative w-full h-full flex justify-around items-center mx-20 text-neutral-400">
              <div className="absolute left-0 font-semibold text-xl">
                <h1>
                  Room Id :{" "}
                  <span className="dark:text-white text-gray-900">
                    {roomId}
                  </span>
                </h1>
              </div>
              <div className="absolute right-0 w-[30%] flex justify-between items-center">
                <div className="font-semibold text-xl">
                  <h1>
                    User:{" "}
                    <span className="dark:text-white text-gray-900">
                      {currentUser}
                    </span>
                  </h1>
                </div>
                <Button size="lg" variant="destructive">
                  Leave
                </Button>
              </div>
            </div>
          </GlassSurface>
        </header>

        <main className="w-2/4 mx-auto pb-20 pt-28 h-screen">
          <div className="w-full h-full bg-gray-900 rounded-2xl overflow-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === currentUser
                    ? "justify-end"
                    : "justify-start"
                } px-4`}
              >
                <div
                  className={`my-2 flex ${
                    message.sender === currentUser
                      ? "bg-green-800"
                      : "bg-gray-800"
                  } max-w-xs rounded p-2 min-h-fit`}
                >
                  <div className="flex flex-row gap-3 items-start w-full">
                    <img
                      src={`${
                        message.sender === currentUser
                          ? "https://avatar.iran.liara.run/public/boy"
                          : "https://avatar.iran.liara.run/public"
                      }`}
                      className="h-10 w-10 flex-shrink-0"
                      alt=""
                    />
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <p className="text-xs text-gray-50/40 font-semibold break-words">
                        {message.sender}
                      </p>
                      <p className="text-white break-words whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <div className="fixed bottom-2 w-full h-16 flex justify-center ">
          <div className="h-full rounded w-2/4 flex justify-between items-center gap-6 px-10">
            <Input
              type="text"
              placeholder="Type here ...."
              value={input} // Add this
              onChange={(e) => setInput(e.target.value)} // Add this
              onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Optional: send on Enter
              className="dark:text-neutral-50 py-5 text-black rounded-full px-5 border-gray-900 dark:border-gray-50"
            />

            <Button
              type="submit"
              size="lg"
              variant="outline"
              className="rounded-full bg-purple-600 dark:text-gray-100"
            >
              <FaFileUpload />
            </Button>
            <Button
              type="submit"
              size="lg"
              onClick={sendMessage}
              className="rounded-full bg-green-600 dark:text-gray-100"
              variant="outline"
            >
              <IoSend />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPage;
