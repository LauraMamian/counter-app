export const getImagen = async () => {
    try {
        const apiKey = 'pwUfTiqP8iHnUOcelbEFT3Lwjp5XM43g';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.log(error);
        return 'No se encontró la imagen';
    }
}

getImagen();