import * as request from '../lib/request';

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