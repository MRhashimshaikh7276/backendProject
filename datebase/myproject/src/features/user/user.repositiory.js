import { getDB } from "../../config/mongodb.js";


class UserRepository{

    constructor(){

        this.collection= 'users'
    }


async SignUp(newUser){
try {
    const db = getDB;

    const collection = db.collection(this.collection);

    await collection.insertOne(newUser);
    return newUser;

    
} catch (err) {
    console.log('Something went wrong with database 500');
    
}

}


async SignIn(email, password){

    try {
        const db = getDB();
        const collection= db.collection(this.collection);

        return await collection.findOne({email, password})
    } catch (err) {
        console.log('Something went wrong with database, 500');
        
    }
}


async findByEmail(email){

    try {
        const db = getDB();
        const collection = db.collection('users');
        return await collection.findOne({email})
    } catch (err) {
        console.log('Something went wrong with database, 500');
        
    }
}


}

export default UserRepository;