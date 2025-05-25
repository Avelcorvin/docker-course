const path = require('path')
console.log("::path::",path.join(__dirname, 'node_modules'))
module.exports = {
    entry: './react/main.jsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[ 
    
            //загрузчик для jsx
            {  
                test: /\.(jsx|js|tsx|ts)?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:[ "@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    }
    
  };