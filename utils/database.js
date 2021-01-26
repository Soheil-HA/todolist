const mongoose = require('mongoose');


mongoose
    .connect("mongodb://localhost/todo_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));

//*Connection , schema & model , Instance , Mongoose Methods