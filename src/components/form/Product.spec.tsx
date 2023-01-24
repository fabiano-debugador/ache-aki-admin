import {render, screen} from '@testing-library/react';
import Button from './Product';

describe('Testing product page', () => {
    test('show button', () => {
        render(<Button />)
        // const button = screen.getByTestId('custom-element')
        // expect(button).not.toBeInTheDocument();
    })
})