


export const users = [
    {
     id:"1",
     name:"hashim",
     email:"hashimshaikh7276@gmail.com"
    },
    {
        id:"2",
        name:"moin",
        email:"moinshaikh433@gmail.com"
    }
]









// import bcryct from 'bcrypt';
// import fs from 'fs';

// const userFliePath = './data/users.json'



// export class User {
//     constructor( name, email, password,role) {
       
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.role= role;
//     }

// static getUser(){
//     try {
//         const data = fs.readFileSync(userFliePath);
//         return JSON.parse(data);
//     } catch (error) {

//         return [];
//     }
// }


// static saveUsers(users){
// try {
//     fs.writeFileSync(userFliePath, JSON.stringify(users, null , 2))
// } catch (error) {
//     console.log('Error write to flie', error);
    
// }
// }


// static async save(usersData){
// const users =this.getUser();
// users.push((new User(usersData)));
// this.saveUsers(users);
// }

// static findOne(criteria){

//     const users = this.getUser(criteria);
//      return users.find(user => Object.keys(criteria).every(key => user[key]=== criteria[key]));
// }

// static async comparePassword(plainPassword,hashedPassword){

//     return bcryct.compare(plainPassword,hashedPassword);
// }






//     static add(name,email,password){
//         const newUser = new User(
//             users.length + 1,
//             name,
//              email,
//              password,
//              role
//         );
//         users.push(newUser)
//     };
//     static isValidUser(email,password){
// const result = users.find(
//     (u)=> u.email == email && u.password ==password
// );
// return result
//     }
// }

// export const users = []; 
