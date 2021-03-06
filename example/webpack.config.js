const safeExternals = {
  jquery: ['jQuery', '$'],
  react: ['React']
};

module.exports = {
  entry: './index.js',
  output: {
      path: __dirname,
      filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: '../index.js',
      query: JSON.stringify(safeExternals)
    }]
  }
};
