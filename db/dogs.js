const data = require('./seedData');

// GET - /api/dogs - get all dogs
async function getAllDogs() {
    try{
        const rows = data.dogs;
        console.log(rows);
        return rows;
    } catch (error) {
        throw error;
    }
}

// GET - /api/dogs/:dogId - get dog by id
async function getDogById(dogId) {
    try{
        const rows = data.dogs;
        const dog = rows.find(dog => dog.id === Number(dogId));
        return dog;
    } catch (error) {
        throw error;
    }
}

// POST - /api/dogs - create a new dog
async function createDog(body) {
    try{
        const dog = body;
        const dogs = data.dogs;
        dogs.push(body);
        return dog;
    } catch (error) {
        throw error;
    }
}

// PUT - /api/dogs/:dogId - update a dog
async function updateDog(dogId, body) {
    try {
        const dogs = data.dogs;
        const dog = dogs.find(dog => dog.id === Number(dogId));
        const index = dogs.findIndex(dog => dog.id === Number(dogId));
        let newDog = { ...dog, ...body };
        dogs[index] = newDog;
        return newDog;
    } catch (error) {
        throw error;
    }
}

// DELETE - /api/dogs/:dogId - delete a dog
async function deleteDog(dogId) {
    try{
        const dogs = data.dogs;
        const dog = dogs.find(dog => dog.id === Number(dogId));
        const index = dogs.findIndex(dog => dog.id === Number(dogId));
        dogs.splice(index, 1);
        return dog;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllDogs,
    getDogById,
    createDog,
    updateDog,
    deleteDog
}
