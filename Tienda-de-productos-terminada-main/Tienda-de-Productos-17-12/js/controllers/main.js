import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product]");

const form = document.querySelector("[data-form]");

function createCard({ id, name, image }) {
    const card = document.createElement("div");
    card.classList.add("containerProduct");
    card.dataset.id = id; // Asigna el ID del producto al contenedor

    card.innerHTML = `
        <div class="card">
            <img src="${image}" alt="${name}">
            <p>${name}</p>
            <button class="delete-button" data-delete> ¡Adoptame! </button>
        </div>
    `;

    return card;
}

// 2. Renderizar los productos
const renderProducts = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        listProducts.forEach((product) => {
            const productCard = createCard(product);
            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.log(error, "Error al listar productos");
    }
};

// 3. Manejar el formulario para agregar productos
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value.trim();
    const image = document.querySelector("[data-image]").value.trim();
    const errorMessage = document.querySelector("[data-message]");

    // Validar que ambos campos estén llenos
    if (!name || !image) {
        errorMessage.textContent = "Error: Todos los campos son obligatorios.";
        errorMessage.style.color = "red";
        return;
    }

    // Validar que el campo "name" no sea una URL y contenga solo texto o números
    const urlRegex = /(https?:\/\/[^\s]+)/g; // Expresión regular para detectar URLs
    const nameRegex = /^[a-zA-Z0-9\s]+$/; // Expresión regular para texto y números

    if (urlRegex.test(name) || !nameRegex.test(name)) {
        errorMessage.textContent = "Error: El nombre no debe contener URLs y solo puede incluir letras, números y espacios.";
        errorMessage.style.color = "red";
        return;
    }

    // Validar que el campo "image" contenga una URL válida
    try {
        new URL(image); // Si no es una URL válida, lanzará un error
    } catch {
        errorMessage.textContent = "Error: Debes ingresar una URL válida para la imagen.";
        errorMessage.style.color = "red";
        return;
    }

    try {
        // Crear el producto si todo es válido
        const newProduct = await servicesProducts.createProduct(name, image);
        const newCard = createCard(newProduct);
        productContainer.appendChild(newCard);

        // Limpiar mensaje de error si la operación fue exitosa
        errorMessage.textContent = "";
    } catch (error) {
        console.error("Error al ingresar producto:", error);
        errorMessage.textContent = "Error al ingresar producto. Inténtalo nuevamente.";
        errorMessage.style.color = "red";
    }

    form.reset();
});

// 4. Manejar el botón eliminar
productContainer.addEventListener("click", async (event) => {
    if (event.target.matches("[data-delete]")) {
        const productCard = event.target.closest(".containerProduct");
        const productId = productCard.dataset.id;

        try {
            await servicesProducts.deleteProduct(productId);
            productCard.remove(); // Elimina el producto del DOM
        } catch (error) {
            console.log("Error al eliminar el producto: ", error);
        }
    }
});

// 6. Limpiar mensajes de error al presionar "Limpiar"
const resetButton = document.querySelector("[type='reset']");

resetButton.addEventListener("click", () => {
    const errorMessage = document.querySelector("[data-message]");
    errorMessage.textContent = ""; // Limpia el mensaje de error
    errorMessage.style.color = ""; // Restaura el estilo
});

// 5. Inicializar la aplicación
renderProducts();
