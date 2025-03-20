


import UserModel from "./user.model.js";


export default class UserController {

    signUp(req,res){                                                                                            

        const {name,email,password,type,}= req.body;

        const user = UserModel.SignUp(
            name,
            email,
            password,
            type
        );
        res.status(201).send(user);
    }


    signIn(req,res){
const result = UserModel.signIn(
    req.body.email,
    req.body.password
);


if (!result) {
    return res.status(400).send('incorrect credentials');

} else {
    return res.send('Login Successful');

}
    }
}