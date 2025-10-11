import { httpClient } from "@/config/AxiosHelper";

export const createRoomApi = async (roomId:String) =>{
    const response= await httpClient.post(`/api/v1/rooms`, roomId,{headers: 
        {"Content-Type" : "text/plain"}
    });
    return response.data ;
};


export const joinRoomApi = async (roomId: String) =>{
    const response = await httpClient.get(`/api/v1/rooms/${roomId}`)

    return response.data ;
}

// In services/RoomServices.ts
export const getMessage = async (roomId: string, page: number = 0, size: number = 20) => {
    console.log(`📡 API Call: page=${page}, size=${size}`);
    
    const response = await httpClient.get(`/api/v1/rooms/${roomId}/messages?page=${page}&size=${size}&sort=timeStamp,asc`); // ✅ Change to 'asc' for chronological order
    
    console.log(`📨 API Response:`, response.data);
    
    return response.data; // Now in correct order (oldest to newest)
};

