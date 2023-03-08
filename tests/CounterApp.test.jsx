import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
    const initialValue = 20;

    test('Debe hacer match con el Snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        render(<CounterApp value={100} />);

        expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
    });

    test('Debe incrementar con el botón +1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        
        expect(screen.getByText(initialValue + 1)).toBeTruthy();
    });

    test('Debe decrementar con el botón -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        
        expect(screen.getByText(initialValue - 1)).toBeTruthy();
    });

    test('Debe resetear el valor por defecto con el botón Reset', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
});