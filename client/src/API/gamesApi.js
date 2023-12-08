import * as request from '../lib/request';

const host = 'http://localhost:3030/data/games'

export const getAll = async () => {
    try {

        const response = await fetch(host);
        console.log(response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseBody = await response.text();
        const jsonData = responseBody ? JSON.parse(responseBody) : null;

        return jsonData;

    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export const create = async (data) => {
    try {
        const response = await request.post(host, data);
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
};

export const edit = async (id, data) => {
    try {
        const response = await request.put(`${host}/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error editing game:', error);
        throw error;
    }
};

export const remove = async(id) =>{
    try {
        const response = await request.del(`${host}/${id}`);
        return response;
    } catch (error) {
        throw new Error(error)
    }
}