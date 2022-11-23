import { ButtonStyles as Button } from '@/styles/components/buttonStyles';
import { extendTheme } from '@chakra-ui/react';

export const primaryTheme = extendTheme({
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Open Sans', sans-serif`,
	},

	components: {
		Button,
	},

	colors: {
		primary: '#D33257',
		secondary: '#FFF',
		tertiary: '#2C82C9',
	},
});
