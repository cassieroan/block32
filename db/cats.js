const data = require("./seedData");

// GET - /api/cats - get all cats
async function getAllCats() {
  try {
    const rows = data.cats;
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

// GET - /api/cats/:catId - get cat by id
async function getCatById(catId) {
  try {
    const rows = data.cats;
    const dog = rows.find((cat) => cat.id === Number(catId));
    return cat;
  } catch (error) {
    throw error;
  }
}

// POST - /api/cats - create a new cat
async function createCat(body) {
  try {
    const cat = body;
    const cats = data.cats;
    cats.push(body);
    return cat;
  } catch (error) {
    throw error;
  }
}

// PUT - /api/cats/:catId - update a cat
async function updateCat(catId, body) {
  try {
    const cats = data.cats;
    const cat = cats.find((cat) => cat.id === Number(catId));
    const index = cats.findIndex((cat) => cat.id === Number(catId));
    let newCat = { ...cat, ...body };
    cats[index] = newCat;
    return newCat;
  } catch (error) {
    throw error;
  }
}

// DELETE - /api/cats/:catId - delete a cat
async function deleteCat(catId) {
  try {
    const cats = data.cats;
    const cat = cats.find((cat) => cat.id === Number(catId));
    const index = cats.findIndex((cat) => cat.id === Number(catId));
    dogs.splice(index, 1);
    return cat;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
};
