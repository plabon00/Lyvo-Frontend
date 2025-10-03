import { MorphingText } from "./ui/morphing-text"
import GlassSurface from './GlassSurface';
import Silk from './Silk';
import { Button } from './ui/button';
import iconImg from '../assets/chat.png'
import '../App.css'
import '../index.css'



const JoinCreateChat = () => {
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
                            <img src={iconImg} alt="ChatIcon" className="w-20"/>
                        </div>
                        <MorphingText texts={["Join", "Create"]} className="items-center p-0 mb-10"/>

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
                                            type="text"
                                            id="roomId"
                                            name="roomId"
                                            className="mx-3 w-70 h-full bg-transparent border-0 outline-0
                 text-[10px] sm:text-xs md:text-sm font-mono text-white placeholder-gray-400 py-1 transition-all"
                                            
                                            placeholder="Enter Your Name"
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
                                            type="text"
                                            id="roomId"
                                            name="roomId"
                                            className="w-70 mx-3 h-full bg-transparent border-0 outline-0
                 text-[10px] sm:text-xs md:text-sm font-mono text-white placeholder-gray-400 py-1 transition-all"
                                            placeholder="Enter room ID"
                                        />
                                    </GlassSurface>
                                </div>
                            </div>


                                {/* Action Buttons */}
                                <div className="flex xs:flex-row gap-4 sm:gap-6 pt-1 sm:pt-2 mt-10 justify-center cursor-pointer">
                                    <Button variant="outline" className="bg-transparent rounded-full text-10 font-mono h-auto hover:bg-fuchsia-950 hover:brightness-100 active:brightness-200">Join Room</Button>
                                    <Button variant="outline" className="bg-transparent rounded-full text-10 font-mono h-auto hover:bg-fuchsia-950 hover:brightness-100 active:brightness-200">Create Room</Button>
                                </div>
                        </div>
                    </div>

                </GlassSurface>
            </div>
        </div>
    );
};

export default JoinCreateChat;