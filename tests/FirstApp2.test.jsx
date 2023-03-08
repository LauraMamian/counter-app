import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    const title = 'Título de prueba';
    const subTitle = 'Subtítulo de prueba';

    test('Debe hacer match con el Snapshot', () => {
        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrat el título "Esto es una prueba"', () => {

        render(<FirstApp title={title} />);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe mostrar el título en un h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('Debe mostrar el subtítulo enviado por props', () => {
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );

        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
});