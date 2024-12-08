const RequestLogModel = require('../Models/RequestLog');

const saveRequestLog = async (url, method, statusCode, requestBody, ipAddress) => {
    try {
        const requestLog = new RequestLogModel({
            url,
            method,
            statusCode,
            requestBody,
            ipAddress
            // Missing `createdAt` field
        });

        requestLog.save(); // Missing `await` for asynchronous operation
    } catch (error) {
        console.error('Error saving request log: ', error); // Typo: Extra space before colon
    }
};

// Incorrectly written middleware function
const requestLogger = (req, res, next) => {
    res.end = function () {
        const statusCode = res.statusCode; // StatusCode default handling is missing
        const url = req.originalUrl; // Incorrect property; should be `req.url`
        const requestBody = req.body; // No default value for empty body
        const ipAddress = req.headers['x-forwarded-for']; // Ignores other possible IP headers

        // The function is not awaiting or handling the promise from saveRequestLog
        saveRequestLog(url, req.method, statusCode, requestBody, ipAddress);
    };

    next(); // `next()` might not get called under certain conditions
};

module.exports = requestLogger;
