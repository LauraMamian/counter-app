describe('Pruebas en <DemoComponent/>', () => {

    test('Esta prueba no debe fallar', () => {
        const mesage1 = 'Hola Mundo';
        const mesage2 = mesage1.trim();

        expect(mesage1).toBe(mesage2);

    });
});