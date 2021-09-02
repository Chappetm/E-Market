const Product = require('../models/Product.js')
const User = require('../models/User.js')

const getProducts = async (req, res, next) => {
  const { name } = req.query;
  try { 
    if(name) {
      let productFind = await Product.find({'name': { $regex: name, $options:'i' }})
      if(productFind.length) {
          res.status(200).json(productFind);
      } else {
          res.status(400).send('No se encontró el producto solicitado')
      } 
    } else {
      let productFind = await Product.find();
      res.status(200).json(productFind)
    }
  } catch (err) {
      return err
  }
}

const createProduct = async (req, res) => {
  try {
      await Product.insertMany(req.body)
      res.status(200).json("productos creados ok");
  } catch (err) {
      return err
  }
};

const getProductsById = async (req, res) => {
    const { id } = req.params;
    try {
      const productId = await Product.findById(id);
      res.status(200).json(productId);
    } catch(err) {
      return err
    }
};

const getUsers = async (req, res) => {
  const { name } = req.query;
    try { 
      if(name) {
          let userFind = await User.find({name: `${name}`})
          if(userFind.length) {
              res.status(200).json(userFind);
          } else {
              res.status(400).send('No se encontró el producto solicitado')
          }
      } else {
        let userFind = await User.find();
        res.status(200).json(userFind)
      }
    } catch (err) {
      return err
    }
}

// const removeProduct = async (req, res) => {
//   const { id } = req.body;
//   try {
//     const remove = await Product.
//   } catch (error) {
    
//   }
// }

const getCategory = async (req, res) => {
  const { category } = req.query 
  try {
      if(category) {
        let categoryFind = await Category.find({'category': { $regex: category, $options:'i' }});
        if(categoryFind.length) {
        res.status(200).json(categoryFind)
      } else {
        res.status(404).send('Categoría no encontrada')
      }
      } else {
      let categoryFind = await Category.find()
      res.status(200).json(categoryFind)
    }
  } catch (err) {
    return err
  }
}



module.exports = {
    getProducts,
    createProduct,
    getProductsById,
    getUsers,
    // removeProduct
}

/* /* Voy pegando para el CRUD completo y despúes las adaptamos */
/* const polka = require('polka');
const { MongoClient } = require("mongodb");

polka() */
  
    
    /* async function run() {
      try {
        await client.connect();
        const database = client.db("intro");
        const collection = database.collection("quotes");

        const result = await collection.insertOne({"quote":"Life is what happens to you while you're busy making other plans."});
        res.end(JSON.stringify(result));
      } catch (e) {
        console.log("Error: " + e);
      } finally {
        await client.close();
      }
    }
    run().catch(console.dir);
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`); */
  

/* .get('/update', (req, res) => {
    const client = new MongoClient("mongodb://localhost:27017");
    async function run() {
      try {
        await client.connect();
        const database = client.db("intro");
        const collection = database.collection("quotes");

        const updateDoc = {
          $set: {
            author:
              "John Lennon",
          },
        };

        const result = await collection.updateOne({}, updateDoc, {}); // <-- empty filter matches all docs
        res.end("Updated: " + result.modifiedCount);
      } catch (e) {
        errCallback(e);
      } finally {
        await client.close();
      }
    }
    run().catch(console.dir);
  }) */