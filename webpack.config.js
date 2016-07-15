module.exports = {
    entry: "./index.ts",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
        		test: /\.ts$/,
        		loader: "awesome-typescript"
      		}
        ]
    },
	resolve: {
	    extensions: ["", ".ts"]
	},
};