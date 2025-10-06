import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Define the shape of your context
interface ChatContextType {
    roomId: string;
    setRoomId: (roomId: string) => void;
    currentUser: string;
    connected : boolean
    setCurrentUser: (currentUser: string) => void;
    setConnected : (connected: boolean) => void ;
}

// Create context with proper typing
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Define props interface for the provider
interface ChatProviderProps {
    children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
    const [roomId, setRoomId] = useState<string>("");
    const [currentUser, setCurrentUser] = useState<string>("");
    const [connected , setConnected] = useState(false) ;

    return (
        <ChatContext.Provider 
            value={{ roomId, currentUser , connected, setRoomId, setCurrentUser  , setConnected }}
        >
            {children}
        </ChatContext.Provider>
    );
};

const useChatContext = (): ChatContextType => {
    const context = useContext(ChatContext);
    
    // Error handling for when context is used outside provider
    if (context === undefined) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    
    return context;
};

export default useChatContext;
