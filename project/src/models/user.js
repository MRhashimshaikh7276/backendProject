// models/User.js

const users = []; // In-memory storage for users

export const addUser = (name, email, password) => {
    users.push({ id: Date.now(), name, email, password });
};

export const findUser = (email) => users.find(user => user.email === email);

export const validateUser = (email, password) => {
    const user = findUser(email);
    return user && user.password === password ? user : null;
};
