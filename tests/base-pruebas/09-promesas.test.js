import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas.test.js', () => {
    test('getHeroeByIdAsync debe retornar un héroe por ID', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un error si el héroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toBeFalsy();
                done();
            }) // Esto es un plus, no es necesario
            .catch((error) => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });
    });
});