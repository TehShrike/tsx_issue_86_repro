import should_be_a_function from './imported'

const actual_type = typeof should_be_a_function

if (actual_type === `function`) {
	should_be_a_function()
} else {
	console.log(`The default import of "imported" is not a function, even though it's supposed to be`)
}

if (`default` in should_be_a_function) {
	console.log(`The default import has a \`default\` property`)
	should_be_a_function.default()
}
