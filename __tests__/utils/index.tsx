import { primaryTheme } from '@/styles/themes';
import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { AppProvider } from '../../context/app';

function CustomWrapper({ children }: { children: JSX.Element }) {
	return (
		<ChakraProvider theme={primaryTheme}>
			<AppProvider>{children}</AppProvider>
		</ChakraProvider>
	);
}

export function renderWithChakra(
	ui: ReactElement,
	options?: Parameters<typeof render>
) {
	return render(ui, {
		wrapper: CustomWrapper,
		...options,
	});
}
