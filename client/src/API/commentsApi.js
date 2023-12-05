import * as request from '../lib/request';

const host = 'http://localhost:3030/data/comments';

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where:`gameId="${gameId}"`,
        load:`owner=ownerId:users`
    })

    const result = await request.get(`${host}?${query}`);

    return result;
};

export const create = async (gameId,text) => {
    const newComment = await request.post(host,{
        gameId,
        text
    })
    return newComment;
}

