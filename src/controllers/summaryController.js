const prisma = require("../utils/prisma");

exports.summary = async (req, res) => {
  const income = await prisma.record.aggregate({
    _sum: { amount: true },
    where: { type: "INCOME" }
  });

  const expense = await prisma.record.aggregate({
    _sum: { amount: true },
    where: { type: "EXPENSE" }
  });

  res.json({
    income: income._sum.amount || 0,
    expense: expense._sum.amount || 0,
    balance:
      (income._sum.amount || 0) - (expense._sum.amount || 0)
  });
};
