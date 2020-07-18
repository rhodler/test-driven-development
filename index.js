let users = [
    {id: 1, name: 'John', age: 22, city: "Le Havre"},
    {id: 2, name: 'Sarah', age: 31, city: "Lyon"},
    {id: 3, name: 'Julie', age: 28, city: "Paris"},
    {id: 4, name: 'Romelus', age: 24, city: "Lille"}
];

const findById = id =>{

    let user = users.find(user=> user.id === id);

    return user;

};

const updateById = (user, { name, age, city}) =>{

    if(age) user.age = age;
    if(name) user.name = name;
    if(city) user.city = city;

    return user
    
};

const createUser = user =>{
    users = [...users, user];
    
    const newUser = users.find(usr=> usr.id === user.id);

    return newUser;

};

const removeById = id =>{

    const user = users
    .filter(user=> user.id !== id)
    .find(user=> user.id === id)
    
    return user

};

module.exports = {
    findById,
    updateById,
    createUser,
    removeById
};
