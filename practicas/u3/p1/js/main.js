var product = {
    name: "Huawei mate 20 lite Black (Pantalla 2340 x 1080 LCD), 4G RAM + 64, Bateria 3750 mAh, Camar 20MP + 2MP",
    image: "img/mate20-lite.png",
    
    specs: {
        Price: "$2,000",
        Marca: "HUAWEI",
        Pantalla: "2340 x 1080 LCD",
        SO: "Android 9.0 EMUI 9.0.1",
        Procesador: "Huawei Kirin 710",
        ROM: "4G RAM + 64GB ROM",
        Camara: "20MP + 2MP Camera",
        Bateria: "3750 mAh",
        Color: "Black"
    }
};

var productName = document.getElementById('product-name');
var productImage = document.getElementById('product-image');
var productSpecs = document.getElementById('product-specs');

productName.textContent = product.name;
productImage.src = product.image;
productImage.alt = 'Imagen del ' + product.name;

// Añadiendo especificaciones con etiquetas y valores separados
for (var key in product.specs) {
    var li = document.createElement('li');
    
    var spanLabel = document.createElement('span');
    spanLabel.className = 'spec-label common-spec-style';
    spanLabel.textContent = key + ': ';
    
    var spanValue = document.createElement('span');
    spanValue.className = 'spec-value common-spec-style';
    spanValue.textContent = product.specs[key];
    
    // Aplicar color rojo al precio
    if (key === 'Price') {
        spanValue.classList.add('price-red');
    }
    
    li.appendChild(spanLabel);
    li.appendChild(spanValue);
    
    productSpecs.appendChild(li);
}
