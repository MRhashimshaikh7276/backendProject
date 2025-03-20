

 import jWt from 'jsonwebtoken';


const jwtAuth = (req,res,next) =>{
const tokan = req.headers['authrization'];

if (!tokan) {
    return res.status(401).send('Unauthorized');

}
 try {
    const payload= jWt.verify(

        tokan,
          "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz"
    );
    console.log(payload);
    
 } catch (err) {
    console.log(err);
    return res.status(401).send('Unauthrized');
 }

 next();

}


export default jwtAuth ;



