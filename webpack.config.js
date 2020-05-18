module.exports = (env) => {
  process.env.NODE_ENV = env.NODE_ENV;
  return require(`./webpack.${env.NODE_ENV}.js`);
}