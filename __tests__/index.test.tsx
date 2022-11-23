import Home from '../pages/index';
import { renderWithChakra } from './utils';

describe('Home', () => {
	it('renders', () => {
		renderWithChakra(<Home />);
	});
});
