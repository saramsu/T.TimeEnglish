const cuadrito = document.getElementById("cuadrito")
const formulario = document.getElementById("formulario");



const productos = {
    urlImagen: "valor",
    nombreImagen: "carro"
}


const objetosEj = [
{
    url: "https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711387145692-001.jpg?context=bWFzdGVyfGltYWdlc3w0NTkxNTh8aW1hZ2UvanBlZ3xhRFl4TDJnM01TOHhNemd4TlRRek16VTVNamcyTWk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNemczTVRRMU5qa3lYekF3TVM1cWNHY3xmOGVhMzI0YjQyZmU2NTQyYzFiMzBkYjAxNTE0MWViOGMzOGVkMWZjZDNhNjUxYzM3YmM0ZjFiY2U3M2M1MDQ2",
    nombreImagen: "computador"
},
{
    url: "https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7704712465906-001.jpg?context=bWFzdGVyfGltYWdlc3w3MzE2MHxpbWFnZS9qcGVnfGFEbGxMMmhpWlM4eE16Z3lPVGsyTmpnMU5qSXlNaTgzTlRCWGVEYzFNRWhmYldGemRHVnlMMmh2ZEdadmJHUmxjaTkwY21GdWMyWmxjaTlwYm1OdmJXbHVaeTlrWlhCdmMybDBMMmg1WW5KcGN5MXBiblJsY21aaFkyVnpMMGxPTDIxbFpHbGhMM0J5YjJSMVkzUXZOemN3TkRjeE1qUTJOVGt3Tmw4d01ERXVhbkJufGZjMTVmMTcwNGQzODY4NWU5OTAxYmRjYzU2ZDg4NTRiMDcxOTljOTUzZDY2ZTJmMGM0ODc0N2Y0YTRjZmUzNTY",
    nombreImagen: "Nevera"
},
]
cuadrito.innerHTML = `<p>${objetosEj[1].nombreImagen}</p><img id="imagen" src=${objetosEj[1].url}>`


// ToDo:
// 1. Crear una lista (array) de objetos con nombre y URL de imagenes
// 2. Crear una etiqueta HTML <select> en donde aparazcan los nombres de los productos
// 3. Hacer que al dar click en la opcion aparazca la imagen del producto seleccionado
