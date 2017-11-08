module.exports = {
	build: {
		// put original author code or third part code exclude library.
		vendor: ['axios', '~/plugins/another']
	},

	// as library directory, I guess
	// put global plugins here with ssr means client side only, (nodeJS plugin)
	// then you could use function or variable in mounted function.
	// if wanna include javascript from cdn or from external,
	// add it into head (see index.vue)
	// but, have no idea why can't use axios as global variable
	plugins: [{
	    src:'lodash',
	    ssr: false
	}],

	head: {
		// titleTemplate: '%s - Nuxt.js',
		meta: [{
			charset: 'utf-8'
		}, {
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
		}, {
			hid: 'description',
			name: 'description',
			content: 'Meta description'
		}]
	},
	layout: 'default'
};