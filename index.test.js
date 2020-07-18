const { findById, updateById, createUser, removeById } = require('./index');


it('should find user', () => {

    expect(findById(1)).toEqual({id: 1, name: 'John', age:22, city: "Le Havre"});

    expect(findById(4)).toEqual({id: 4, name: 'Romelus', age: 24, city: "Lille"});

});

it('should create new user', () => {
   const newUser = {id: 6, name: "Axel", age: 25};
   
   expect(createUser(newUser)).toEqual(newUser);

});

it('should update user', () => {

    let user = findById(3);

    let update = { name: "", age: 29, city: "Bordeaux" };

    expect(updateById(user, update)).toEqual({id: 3, name: "Julie", age: 29, city: "Bordeaux"});

});

it('should remove user', () => {

    expect(removeById(2)).toBeUndefined();

});