import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', () => {
    test('getImagen debe retornar el url de la imagen', async() => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });

    // test('getImagen debe retornar error si no hay API', async() => {
    //     const resp = await getImagen();
    //     console.log(resp);
    //     expect(resp).toBe('No se encontró la imagen');
    // });
});