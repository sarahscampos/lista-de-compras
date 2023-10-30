const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://sarahscampos:Lindinha130621@cluster0.jkvfinr.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
