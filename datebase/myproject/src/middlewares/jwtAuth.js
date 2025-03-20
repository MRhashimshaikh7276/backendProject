


import jwt from 'jsonwebtoken';

const jwtAuth =(req,res,next)=>{

    const token = req.headers['authorizetion'];
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    try {
        const payload = jwt.verify(
            token,

            "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz",
            
        );
        req.userID =payload.userID;
        console.log(payload);
        
    } catch (err) {
        console.log(err);

        return res.status(401).send('Unauthorized')
    }

    next();

}


export default jwtAuth;