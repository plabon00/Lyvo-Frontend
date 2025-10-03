import GlassSurface from "./GlassSurface";
import { Button } from "@/components/ui/button"
import '@/index.css'

function ChatPage() {
    return (
        <>
            <div className="bg-gray-900 w-screen h-screen flex flex-col">
                <header className="h-20 flex justify-center items-center mt-5">
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
                        <div className="relative w-full h-full flex justify-around items-center mx-20">
                            <div className="absolute left-0 font-semibold text-xl text-neutral-100/50"><h1>Room Id : <span className="text-white">abcd321</span></h1></div>
                            <div className="absolute right-0 w-[30%] flex justify-between items-center">
                                <div className="font-semibold text-xl text-neutral-100/50"><h1>User: <span className="text-white">Plaban</span></h1></div>
                                <Button>Button</Button>
                            </div>
                        </div>
                    </GlassSurface>

                </header>

            </div>

        </>
    );
}

export default ChatPage;