import axios from "axios";

//const BASE = "https://jsonplaceholder.typicode.com";

const axiosAPI = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const api = {
    getAllPost: async ()=>{
        let res = await axiosAPI.get("/posts");
        return res.data;
        // let res = await fetch(`${BASE}/posts`);
        // let json = await res.json();
        // return json;
    },
    addNewPost: async (title: string, body: string, userId: number)=>{
        let res = await axiosAPI.post("/posts",{
            title, body, userId
        });
        return res.data;
        // let res = await fetch(`${BASE}/posts`,{
        //     method: "POST",
        //     body: JSON.stringify({
        //         title,
        //         body,
        //         userId
        //     }),
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // });
        // let json = await res.json();
        // return json;
    }
}