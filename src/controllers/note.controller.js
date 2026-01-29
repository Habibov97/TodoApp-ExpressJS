exports.getNotes = (req, res) => {
  res.status(200).json({
    status: 'success',
    notes: (notes = []),
  });
};
