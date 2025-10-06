import { MorphingText } from "./ui/morphing-text"
import GlassSurface from './GlassSurface';
import Silk from './Silk';
import { Button } from './ui/button';
import iconImg from '../assets/chat.png'
import '../App.css'
import '../index.css'
import { useState } from "react";
import toast from "react-hot-toast";
import { createRoomApi, joinRoomApi } from '../services/RoomServices'
import useChatContext from "@/context/ChatContext";
import { useNavigate } from "react-router-dom";



const JoinCreateChat = () => {

    const navigate = useNavigate() ;

    const [details, setDetails] = useState({
        roomId: "",
        userName: ""
    })

    const { roomId, currentUser, setRoomId, setCurrentUser , setConnected } = useChatContext()

    function handleFormInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDetails({
            ...details,
            [event.target.name]: event.target.value,
        });
    }

  async  function joinChat() {
        if (validateForm()) {


            try {
                
                const room = await joinRoomApi(details.roomId) ;
                toast.success("Joined..😎")

                setCurrentUser(details.userName);
                setRoomId(room.roomId);
                setConnected(true) ;
                navigate('/chat')

            } catch (error : any) {
                if (error.status == 400) {
                    toast.error(error.response.data) ;
                }
            }

        }
    }

    async function createChat() {
        if (validateForm()) {
            console.log(details.userName, details.roomId)

            try {
                var response = await createRoomApi(details.roomId);
                console.log(response);
                toast.success("Room Created Successful");

                setCurrentUser(details.userName);
                setRoomId(details.roomId);
                setConnected(true) ;

                // Forward to chat Page 

                navigate("/chat")

            } catch (error: any) {
                if (error.status === 400) {
                    toast.error("Room Already Exist")
                } else {
                    console.log("Error While Creatign a Room")
                }
            }

        }
    }

    function validateForm() {
        if (details.userName === "" || details.roomId === "") {
            toast.error("Invalid Name or Room ID")
            return false
        }
        else return true
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>


            <div className="fixed inset-0">
                <Silk
                    speed={5}
                    scale={1}
                    color="#2e073e"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <div className='w-full max-w-md mx-auto'>
                <GlassSurface
                    height="auto"
                    width="100%"
                >
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center items-center text-white">
                        <div >
                            <img src={iconImg} alt="ChatIcon" className="w-20" />
                        </div>
                        <MorphingText texts={["Join", "Create"]} className="items-center p-0 mb-10" />

                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                            {/* Form container with responsive width */}

                            <div className="">
                                {/* Name Input */}
                                <div className="mb-2">
                                    <label
                                        htmlFor="name"
                                        className="text-[10px] sm:text-xs md:text-sm font-mono mb-1.5 sm:mb-2 ml-2 sm:ml-3"
                                    >
                                        Your Name
                                    </label>
                                    <GlassSurface
                                        height="auto"
                                        width="100%"
                                    >
                                        <input
                                            onChange={handleFormInputChange}
                                            value={details.userName}
                                            type="text"
                                            id="name"
                                            name="userName"
                                            placeholder="Enter Your Name"
                                            className="mx-3 w-70 h-full bg-transparent border-0 outline-0
                 text-[10px] sm:text-xs md:text-sm font-mono text-white placeholder-gray-400 py-1 transition-all"
                                        />
                                    </GlassSurface>
                                </div>

                                {/* Room ID Input */}
                                <div>
                                    <label
                                        htmlFor="roomId"
                                        className="text-[10px] sm:text-xs md:text-sm font-mono mb-1.5 sm:mb-2 ml-2 sm:ml-3"
                                    >
                                        Room ID
                                    </label>
                                    <GlassSurface
                                        height="auto"
                                        width="100%"
                                        className="p-0"
                                    >
                                        <input
                                            onChange={handleFormInputChange}
                                            value={details.roomId}
                                            type="text"
                                            id="roomId"
                                            name="roomId"
                                            placeholder="Enter room ID"
                                            className="w-70 mx-3 h-full bg-transparent border-0 outline-0
                 text-[10px] sm:text-xs md:text-sm font-mono text-white placeholder-gray-400 py-1 transition-all"
                                        />
                                    </GlassSurface>
                                </div>
                            </div>


                            {/* Action Buttons */}
                            <div className="flex xs:flex-row gap-4 sm:gap-6 pt-1 sm:pt-2 mt-10 justify-center cursor-pointer">
                                <Button onClick={joinChat} variant="outline" className="bg-transparent rounded-full text-10 font-mono h-auto hover:bg-fuchsia-950 hover:brightness-100 active:brightness-200">Join Room</Button>
                                <Button onClick={createChat} variant="outline" className="bg-transparent rounded-full text-10 font-mono h-auto hover:bg-fuchsia-950 hover:brightness-100 active:brightness-200">Create Room</Button>
                            </div>
                        </div>
                    </div>

                </GlassSurface>
            </div>
        </div>
    );
};

export default JoinCreateChat;