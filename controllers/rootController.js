exports.getRoot = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'You have reached /api/v1/ root page'
  });
};
