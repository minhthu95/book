const apiURLs = {
    server : "http://localhost:3000"
};

if (process.env.NODE_ENV ==='production') {
    apiURLs.server = 'https://hothu.azurewebsites.net';
}
module.exports = apiURLs;