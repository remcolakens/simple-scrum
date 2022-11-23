import { global } from '@/styles/global';
import { primaryTheme } from '@/styles/themes';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import { AppProvider } from '../context/app';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={global} />
			<ChakraProvider resetCSS theme={primaryTheme}>
				<AppProvider>
					<Component {...pageProps} />
				</AppProvider>
			</ChakraProvider>
		</>
	);
}

export default App;
