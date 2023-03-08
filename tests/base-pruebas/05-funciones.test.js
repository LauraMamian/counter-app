import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones.test.js', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        }

        const user = getUser();
        console.log(user);

        expect(user).toEqual(testUser);
    });

    test('getUsusarioActivo debe retornar un objeto', () => {
        const nombre = 'Fernando';

        const activeUser = getUsuarioActivo(nombre);
        
        expect(activeUser).toStrictEqual({
            uid: 'ABC567',
            username: nombre,
        });
    });
});