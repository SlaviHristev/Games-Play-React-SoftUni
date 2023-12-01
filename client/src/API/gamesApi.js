const host = 'http://localhost:3030/jsonstore/games'

export const getAll = async () =>{
    const response = await fetch(host)
    const data = await response.json();
    return data;
}