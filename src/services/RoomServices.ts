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