document.addEventListener('DOMContentLoaded', () => {
    //Contenido de cada telefono
    const telefonos = {
        telefono1: {
            image: "img/mate20-lite.png",
            name: "Huawei mate 20 lite Black (Pantalla 2340 x 1080 LCD), 4G RAM + 64, Bateria 3750 mAh, Camara 20MP + 2MP",
            specs: {
                Price: "$2,000",
                Marca: "HUAWEI",
                Pantalla: "2340 x 1080 LCD",
                SO: "Android 9.0 EMUI 9.0.1",
                Procesador: "Huawei Kirin 710",
                ROM: "4G RAM + 64GB ROM",
                Camara: "20MP + 2MP Camera",
                Bateria: "3750 mAh",
                Color: "Black",
                Sexo: "Si"
            }
        },
        telefono2: {
            image: "img/Samsung Galaxy A54.jpg",
            name: "Samsung Galaxy A54 5G (Display 2400 x 1080 Super AMOLED), 6GB RAM + 128GB, Battery 5000mAh, Camera 50MP + 12MP + 5MP",
            specs: {
                Price: "$2,000",
                Marca: "SAMSUNG",
                Pantalla: "6.4 pulgadas, 2400 x 1080 pixels, Super AMOLED",
                SO: "Android 13",
                Procesador: "Exynos 1380",
                ROM: "6GB RAM + 128GB ROM, expansible con microSDXC hasta 1024 GB",
                Camara: "Trasera: Triple 50MP + 12MP (Ultra-wide) + 5MP (Macro), Frontal: 32MP",
                Bateria: "5000 mAh, carga rápida 25W",
                Color: "Awesome White, Awesome Violet​",
                Sexo: "Ta bonito"
            }
        },
        
        telefono3: {
            image: "img/iphone 14 plus.jpg",
            name: "iPhone 14 Plus (Display 2778 x 1284 OLED), 6GB RAM + 128GB/256GB/512GB, Battery 4323mAh, Camera 12MP + 12MP",
            specs: {
                Price: "Desde $899",
                Marca: "APPLE",
                Pantalla: "6.7 pulgadas, 2778 x 1284 pixels, Super Retina XDR OLED",
                SO: "iOS 16",
                Procesador: "A15 Bionic",
                ROM: "6GB RAM + opciones de 128GB, 256GB, 512GB, no expandible",
                Camara: "Trasera: Dual 12MP (wide) + 12MP (ultra-wide), Frontal: 12MP TrueDepth",
                Bateria: "4323 mAh, carga rápida hasta 50% en 30 min (20W adapter), MagSafe y Qi wireless charging",
                Color: "Midnight, Starlight, Product(RED), Blue, Purple",
                Sexo: "Lo tinen los ticos"
            }
        },

        telefono4: {
            image: "img/Red Magic.jpg",
            name: "Red Magic 7 (Display 1080 x 2400 AMOLED 165Hz), 12GB/16GB/18GB RAM + 128GB/256GB/512GB/1TB, Battery 4500mAh, Camera 64MP + 8MP + 2MP",
            specs: {
                Price: "Desde $629",
                Marca: "RED MAGIC (Nubia)",
                Pantalla: "6.8 pulgadas, 1080 x 2400 pixels, AMOLED, 165Hz",
                SO: "Redmagic 5.0 basado en Android 12",
                Procesador: "Snapdragon 8 Gen 1",
                ROM: "12GB/16GB/18GB RAM + opciones de 128GB, 256GB, 512GB, 1TB, no expandible",
                Camara: "Trasera: Triple 64MP (wide) + 8MP (ultra-wide) + 2MP (macro), Frontal: 8MP",
                Bateria: "4500 mAh, carga rápida de 120W",
                Color: "Obsidian, Pulsar, Supernova",
                Sexo: "Gamer"
            }
        },

        telefono5: {
            image: "img/Moto Z play.jpg",
            name: "Moto Z Play (Display 1080 x 1920 Super AMOLED), 3GB RAM + 32GB/64GB, Battery 3510mAh, Camera 16MP + 5MP",
            specs: {
                Price: "Aproximadamente $450 en lanzamiento",
                Marca: "MOTOROLA",
                Pantalla: "5.5 pulgadas, 1080 x 1920 pixels, Super AMOLED",
                SO: "Inicialmente Android 6.0.1, actualizable a Android 8.0 (Oreo)",
                Procesador: "Snapdragon 625",
                ROM: "3GB RAM + opciones de 32GB o 64GB ROM, expandible con microSD hasta 256 GB",
                Camara: "Trasera: 16MP, Frontal: 5MP",
                Bateria: "3510 mAh, carga rápida TurboPower",
                Color: "Black/Silver/Black Slate, White/Fine Gold/Sugar White",
                Sexo: "Ta curiosito"
            }
        }
        
        
    };

    // Referencias a elementos del DOM
    const productName = document.getElementById('product-name');
    const productImage = document.getElementById('product-image');
    const productSpecs = document.getElementById('product-specs');

    // Función para actualizar la información del producto
    function updateProductInfo(selectedPhone) {
        productName.textContent = selectedPhone.name;
        productImage.src = selectedPhone.image;

        productSpecs.innerHTML = ''; // Limpia las especificaciones antiguas

        Object.entries(selectedPhone.specs).forEach(([key, value]) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="spec-label common-spec-style">${key}: </span>` +
                            `<span class="spec-value common-spec-style ${key === 'Price' ? 'price-red' : ''}">${value}</span>`;
            productSpecs.appendChild(li);
        });
    }

    (idtel)=>{

    }
    // Agrega eventos de clic a cada imagen del reel
    document.querySelectorAll('#Reel img').forEach(item => { //Funcion pero con flechita
        item.addEventListener('click', event => {
            const phoneId = event.target.id; // Obtiene el id de la imagen
            const selectedPhoneKey = phoneId; // id de la imagen corresponde directamente al key en el objeto telefonos
            const selectedPhone = telefonos[selectedPhoneKey];
            if (selectedPhone) { // Verifica si el teléfono existe en el objeto telefonos antes de intentar
                updateProductInfo(selectedPhone);
            }
        });
    });
    // Inicialización con el primer teléfono
    updateProductInfo(telefonos.telefono1);
});
