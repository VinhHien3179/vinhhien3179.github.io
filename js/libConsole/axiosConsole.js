var axiosView = (function () {

    const posInstance = axios.create({
        baseURL: '/' , // Set your API base URL here
        timeout: 10000, // Set the timeout for requests (in milliseconds)
    });

    const onError =(error)=>{
        Toast.Error(error.message);
    }

    const get = async (url, onSuccess) => {
        try {
            const response = await posInstance.get(url);
            onSuccess(response.data);
        } catch (error) {
            console.error('GET Error:', error);
            onError(error)
        }
    };

    const post = async (url, param, onSuccess) => {
        try {
            const response = await posInstance.post(url,param);
            onSuccess(response.data);
        } catch (error) {
            console.error('GET Error:', error);
            onError(error)
        }
    };

    const put = async (url, param, onSuccess) => {
        try {
            const response = await posInstance.put(url,param);
            onSuccess(response.data);
        } catch (error) {
            console.error('GET Error:', error);
            onError(error)
        }
    };

    //axiosPos.get()
    return {
        get: get,
        post: post,
        put: put
    }
})();