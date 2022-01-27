import adapter from '@sveltejs/adapter-auto'

const config = {
	kit: {
		target: '#svelte',
		adapter: adapter(),
	}
}

export default config
