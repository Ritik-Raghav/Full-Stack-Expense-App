const Expense = require('../models/expense');

exports.postExpense = async (req, res, next) => {

    try {
        const amount = req.body.amount;
        const desc = req.body.desc;
        const category = req.body.category;

        const newExpense = await Expense.create({
            amount: amount,
            desc: desc,
            category: category
        });

        console.log(newExpense);
        res.status(201).json(newExpense);
    }
    catch(error) {
        console.log(error);
    }
}

exports.getExpense = async (req, res , next) => {
    try {
        const data = await Expense.findAll();
        res.status(200).json(data);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to fetch data'});
    }
}

exports.deleteExpense = async (req, res, next) => {
    const expenseId = req.params.id;
    try {
        const expense = await Expense.findByPk(expenseId);
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found!'});
        }
        await expense.destroy();
        console.log('Expense Deleted!');
        res.status(200).json({ message: 'Expense deleted successfully!'});
    }
    catch(error)  {
        console.log(error);
        res.status(500).json({ message: 'Failed to delete Expense'});
    }
}