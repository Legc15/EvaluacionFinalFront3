// Obtener favoritos del almacenamiento local
export const obtenerFavoritosDeStorage = () => {
    const favoritos = localStorage.getItem("favs");
    return favoritos ? JSON.parse(favoritos) : [];
};

// Agregar odontólogo a la lista de favoritos en el almacenamiento local
export const setFavoritosStorage = (odontologo) => {
    let favoritos = obtenerFavoritosDeStorage();

    // Verificar si el odontólogo ya está en la lista de favoritos
    const existeEnFavoritos = favoritos.some((fav) => fav.id === odontologo.id);

    if (!existeEnFavoritos) {
        favoritos.push(odontologo);
        localStorage.setItem("favs", JSON.stringify(favoritos));
        
        
    }
};

// Eliminar odontólogo de la lista de favoritos en el almacenamiento local
export const eliminarDeFavorito = (id, name) => {
    let favoritos = obtenerFavoritosDeStorage();
    const index = favoritos.findIndex((fav) => fav.id === id);
    if (index !== -1) {
        favoritos.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(favoritos));
        
    } else {
        
    }
};

// Verificar si un odontólogo es favorito
export const esFavorito = (id) => {
    const favoritos = obtenerFavoritosDeStorage();
    const existeEnFavoritos = favoritos.some((fav) => fav.id === id);
    return existeEnFavoritos;
};
