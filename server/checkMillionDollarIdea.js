const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const product = Number(numWeeks) * Number(weeklyRevenue);
  if (!weeklyRevenue || !numWeeks || isNaN(product) || product < 1000000) {
    res.status(400).send();
  } else {
    next();
  }
};

module.exports = checkMillionDollarIdea;
