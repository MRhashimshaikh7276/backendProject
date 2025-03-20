import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
    // 1. Read the token from the Authorization header
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).send('Unauthorized: Missing Authorization header');
    }

    // 2. Extract the token from "Bearer <token>"
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('Unauthorized: Malformed Authorization header');
    }

    try {
        // 3. Verify the token
        const payload = jwt.verify(
            token,
            "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz" // Replace this with your actual secret key
        );

        // 4. Attach payload to request object
        req.userID = payload.userID;
        console.log(payload);
    } catch (err) {
        console.error(err);
        return res.status(401).send('Unauthorized: Invalid token');
    }

    // 5. Call the next middleware
    next();
};

export default jwtAuth;
