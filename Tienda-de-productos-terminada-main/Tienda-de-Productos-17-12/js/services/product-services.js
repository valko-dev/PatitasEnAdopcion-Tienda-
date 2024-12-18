
// Definimos la URL base de nuestra API (el endpoint donde está la colección "products").
const BASE_URL = "http://localhost:3000/products";


// Función para listar productos
const productList = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al listar producto: ", error);
    }
};


// Función para crear un producto nuevo
const createProduct = async (name,image) => {
    try {
        const response = await fetch(BASE_URL,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, image }),
            
        });

        const   data = await response.json();
        return data;

    } catch (error) {
        console.log("Error al crear producto: ", error);
    }
};



// Función para eliminar un producto
const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("No se pudo eliminar el producto");
        }
    } catch (error) {
        console.log("Error al eliminar producto: ", error);
    }
};


// Exportamos las funciones en un objeto llamado "servicesProducts" para utilizarlas en otros archivos.
export const servicesProducts = {
    productList,
    createProduct,
    deleteProduct,
};
