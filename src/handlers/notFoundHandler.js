const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.setHeader('content-type', 'text/plain');
  res.end(`${req.url.pathname} not found`);
};

module.exports = { notFoundHandler };
