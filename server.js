import { createServer } from 'cors-anywhere';

const corsOptions = {
    originWhitelist: [],
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2'],
};

createServer(corsOptions).listen(8080, () => {
    /* eslint-disable no-console */
    console.log('CORS Anywhere server started on port 8080');
});
