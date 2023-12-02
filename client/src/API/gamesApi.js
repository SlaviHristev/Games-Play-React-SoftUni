
const host = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    try {
        const response = await fetch(host, {
            method: 'GET',
            headers: {}
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (typeof data === 'object' && data !== null) {
            const gamesArray = Object.values(data);
            return gamesArray;
        } else {
            console.error("API response does not contain a valid object:", data);
            return [];
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export const create = async (data) => {
    try {
        const response = await fetch(host,{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
        
    } catch (error) {
        throw new Error(error)
    }
}
export const getOne = async (id) => {
    try {
        const response = await fetch(`${host}/${id}`);
        const data = response.json();
        return data
    } catch (error) {
        throw new Error(error)
    }
}