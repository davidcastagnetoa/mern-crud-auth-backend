export const validateSchema = (schema) => (req, res, next) => {
  schema
    .validate(req.body)
    .then(() => {
      next();
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json(error.errors);
    });
};
