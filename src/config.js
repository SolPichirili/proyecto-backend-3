const options = {
    mongodb: {
        url: "mongodb://localhost:27017/ecommerce",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }
    },
    file: {
        productsPath: "./data/products.json",
        cartPath: "./data/cart.json"
    },
    firestore: {
        config: {}
          
    }
}

module.exports = options;