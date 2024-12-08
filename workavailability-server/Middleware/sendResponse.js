const statusMessages = {
    200: { message: 'Success' },
    400: { message: 'Bad Request' },
    401: { message: 'Unauthorized' },
    404: { message: 'Not Found' },
    500: { message: 'Internal Server Error' }
};

exports.sendResponse = (res, statusCode, data = {}, err = {}) => {
    const response = statusMessages[statusCode] || { message: 'Unknown Status' };
    
    if (statusCode === 500) {
        console.error('Error occurred:', err.message);
    }

    return res.status(statusCode).send({
        status: response.code, 
        message: response.message,
        data: data.info || {}, 
    });
};
