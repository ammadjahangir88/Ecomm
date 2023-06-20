import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer 0eb722e04aa301f4fdc3f1e8473cf6a2346380a89a34f6986a8ef0d6939ea80825c8169e8c5562bb00f1d94fa0c02048b5207b563d9b9e11ac6798bd8576d82eb99fc5e3fc676c92348e02cbfc294cf0474a11128c8fe54cb7d21487e8d3ed9a6d991504bade24d41b31bb894ffd4451e9c1caa812f317718d54a10a520805b0" ,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        
        const { data } = await axios.get(
        "http://localhost:1337" + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};