import { global } from '@/styles/global';
import { primaryTheme } from '@/styles/themes';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Simple Scrum</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Global styles={global} />
			<ChakraProvider resetCSS theme={primaryTheme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default App;
