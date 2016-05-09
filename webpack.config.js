var HtmlWebpackplugin=require('html-webpack-plugin');

module.exports={
  entry:{
    index : './index.js'
  },
  output:{
    path: __dirname+'/dist',
    filename: "bundle_[name].js"
  },
  module:{
    loaders:[
      {test: /\.jsx?$/, exclude:/node_modules/, loader:"babel"}
    ]
  },
  plugins:[
    new HtmlWebpackplugin({title:'Index Page', template:'template.html', filename:'index.html', chunks:['index']})
  ]
};
