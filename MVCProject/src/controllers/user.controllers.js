
import { users } from '../models/user.models.js';

export const getAllUsers = (req, res) => {
    res.json(users);
};














// import bcrypt from 'bcrypt';
// import { User } from '../models/user.models.js';



// export const renderHomePage = (req, res) => {
//     res.render('index', {
//         title: 'Home Page',
//         content: 'Welcome to the Home Page!',
//     });
// };



// export const ApplayJob = (req,res) =>{

//     res.render('applayJob')
// }


// export const FromData =(req,res)=>{
// res.redirect('/jobs')
// };

// export const signUpUser =(req,res)=>{

//     res.render('signUp')
// };




// // // Signup controller //

// export const signUp = async (req,res)=>{
// const {name,email,password,role} = req.body;


// try {
    
//     const exitingUser = await User.findOne({email});
    
//     if(exitingUser){
//         return res.status(400).send('User already exists');
//     }

// // Hash the password
//     const hashedPassword= await bcrypt.hash(password,10);

//        // Save new user
//        await User.save({name,email,hashedPassword,role});
//        res.redirect('/login')

// } catch (error) {
//     console.log(error);
//     res.status(500).send('Server Error');
// }  
// }

// //  login controllers//


// export const login = (req,res)=>{
// const {email,password}= req.body;

// try {
//   const users = User.getUser();
// const user= users.find(u => u.email == email);
// if (!user) {
//     return res.status(400).send('User not found');
// }
//   const isMatch = bcrypt.compare(password,user.password);
//   if (!isMatch) {
//     req.session.user = { name: user.name, email: user.email, role: user.role };
//     return res.redirect('/dashboard');
//   }else {
//     return res.status(400).send('Incorrect password');
// }


// } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
// };

// };

// // logout controlles//

// export const logout = (req,res)=>{

//     req,session.destroy((err) =>{
//         if (err) {
//             return res.status(500).send('Failed to log out');
//         };
//         res.redirect('/login')
//     })
// }













// import { users } from '../models/user.models.js';

// export const registerUser = (req, res) => {
//     const { name, email, password } = req.body;
//     const newUser = { id: users.length + 1, name, email, password };
//     users.push(newUser);
//     res.redirect('/login');
// };

// export const loginUser = (req, res) => {
//     const { email, password } = req.body;
//     const user = users.find(u => u.email === email && u.password === password);
//     if (user) {
//         req.session.user = user;
//         res.redirect('/jobs');
//     } else {
//         res.status(401).send('Invalid email or password');
//     }
// };
