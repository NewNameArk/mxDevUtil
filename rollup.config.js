export default [{
	input: "src/index.js",
	output: { file: "dist/web.js", format: "cjs" }
}, {
	input: "src/index.js",
	output: { file: "dist/web.esm.js", format: "esm" }
}, {
	input: "src/index.js",
	output: { file: "dist/web.umd.js", format: "umd", name: "mxDev" }
}, {
	input: "src/index.js",
	output: { file: "dist/node.js", format: "cjs" }
}, {
	input: "src/index.js",
	output: { file: "dist/node.esm.js", format: "esm" }
}];