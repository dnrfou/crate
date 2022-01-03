// Imports
import path from 'path'
import Dotenv from 'dotenv-webpack'


//entry 항목에 기술된 파일을 기준으로 의존성 트리를 만들어 하나의 번들로 생성
const config = {
  entry: {
    app: './src/setup/client/index.js' //아래 output 경로에 app.js 번들을 생성
  },

  output: {
    path: path.join(__dirname, 'public', 'js', 'bundles'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      }
    ]
  },

  //node_modules 폴더의 모든 모듈을 위의 output 경로의 vendor.js 번들을 생성
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'vendor', chunks: 'all' }
      }
    }
  },

  plugins: [
    new Dotenv()
  ],

  node: {
    fs: "empty"
  },
  //bundle 로 생성할 파일의 최대크기(webpack 추천)에 대한 경고 메세지를 안보이게 함
  performance : {
    hints : false
}   
}

export default config
