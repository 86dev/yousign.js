var path = require('path')

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'yousign.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			}
		]
	},
	externals: [
		'axios',
		/^(jquery|\$)$/i,
		{
			underscore: '_'
		}
	]
}