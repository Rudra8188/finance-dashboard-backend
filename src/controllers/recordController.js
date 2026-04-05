const prisma = require("../utils/prisma");

exports.create = async (req, res) => {
  const record = await prisma.record.create({
    data: { ...req.body, userId: req.user.id }
  });
  res.json(record);
};

exports.getAll = async (req, res) => {
  const { type, category } = req.query;

  const records = await prisma.record.findMany({
    where: { type, category }
  });

  res.json(records);
};

exports.update = async (req, res) => {
  const record = await prisma.record.update({
    where: { id: req.params.id },
    data: req.body
  });
  res.json(record);
};

exports.remove = async (req, res) => {
  await prisma.record.delete({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
};
