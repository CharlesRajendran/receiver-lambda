'use strict';
const api = require('lambda-api')({ version: 'v1.0', base: '/' });

api.get(
  '/sample',
  (req, res) => {
    res.status(200).json({ message: 'Go Serverless v1.0! Your function executed successfully!' });
  }
);

api.get(
  '/sample2',
  (req, res) => {
    res.status(200).json({ message: 'Go Serverless v2.0! Your function executed successfully!' });
  }
);

// handling unmatched routes
api.any('*', async (req, res) => {
  res.status(404).send(
    {
      message: `Cannot find ${req.method} endpoint for ${req.path}`,
      statusCode: 404,
    }
  );
});

module.exports.hello = async (event) => {
  try {
    return api.run(event);
  } catch (err) {
    throw new Error({
      message: 'Error in starting the server',
      statusCode: 500,
    });
  }
};
