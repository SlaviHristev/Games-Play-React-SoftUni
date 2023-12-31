

async function request(method,url,data){
    const options = {
        method,
        headers:{}
    };


    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };

    const token = localStorage.getItem('accessToken');
    if(token){
        options.headers = {
            ...options.headers,
            'X-Authorization':token
        }
    }
    try {
        const response = await fetch(url, options);
        if(response.ok != true){
           
            const error = await response.json();
            throw new Error(error.message);
        }


        if(response.status == 204){
            return response;
        }else{
            return response.json();
        }

    } catch (err) {
        throw err;
    }
}

export const get = request.bind(null,'get');
export const post = request.bind(null,'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null,'delete');