
import UserModel from "./user.model.js";
import UserRepository from "./user.repositiory.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export default class UserController {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(req, res) {

        const { name, email, password, type, } = req.body;

        const hashPassword = await bcrypt.hash(password, 12);
        const user = new UserModel(
            name,
            email,
            hashPassword,
            type
        );
        await this.userRepository.SignUp(user);
        res.status(201).send(user);


    }


    async signIn(req, res) {

        try {
            const user = await this.userRepository.findByEmail(req.body.email);
            if (!user) {
                return res.status(400).send('Incorrect Credentials')

            } else {
                const result = await bcrypt.compare(req, body.password, user.password);
                if (!result) {
                    const token = jwt.sign(
                        {
                            userID: user._id,
                            email: user.email
                        },
                        'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
                        {
                            expiresIn: '1h',
                        }

                    )
                    return res.status(200).send(token);
                } else {
                    return res.status(400).send('Incorrect Credentials');

                }
            }
        } catch (err) {
            console.log(err);
            return res.status(200).send("Something went wrong");

        }
    }
}