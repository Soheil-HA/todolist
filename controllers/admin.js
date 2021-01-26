const Todo = require('../model/todo');

//* Function must be async to use await
exports.addTodo = async (req, res) => {
    if (!req.body.todo) return res.redirect("/");
    
    //! Promise   
    // Todo.create({ text: req.body.todo })
    //     .then(result => {
    //         console.log(result);
    //         res.redirect("/");
    //     })
    //     .catch(err => console.log(err));
    //!Promise    

    //! await && async 
    
    try {
        await Todo.create({ text: req.body.todo });
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
    
    //! await && async
};

exports.deleteTodo = async (req, res) => {

    try {
        await Todo.findByIdAndRemove(req.params.id);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }

};

exports.completedTodo = async (req, res) => {
    //! Promise   
    // Todo.findByPk(req.params.id)
    //     .then((todo) => {
    //         todo.completed = true;
    //         return todo.save();
    //     })
    //     .then((todo) => res.redirect("/"))
    //     .catch((err) => console.log(err))

    //! Promise   

    try {
        const todo = await Todo.findById(req.params.id);
        todo.completed = true;
        await todo.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
};
