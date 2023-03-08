import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    // test('Debe hacer match con el Snapshot', () => {

    //     const title = 'Título de prueba';
    //     const { container } = render(<FirstApp title={title} />)
    //     // console.log(container);
    //     expect(container).toMatchSnapshot();
    // });

    test('Debe mostrar el título en un h1', () => {
        const title = 'Título de prueba';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('Debe mostrar el subtítulo enviado por props', () => {
        const title = 'Título de prueba';
        const subTitle = 'Subtítulo de prueba';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );

        expect(getAllByText(subTitle).length).toBe(2);
    });
});