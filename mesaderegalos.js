function copyToClipboard() {
    const button = document.querySelector('.button');
    const textToCopy = button.textContent;
  
    // Crear un elemento auxiliar para copiar el texto al portapapeles
    const auxElement = document.createElement('textarea');
    auxElement.value = textToCopy;
  
    // Asegurarse de que el elemento auxiliar no sea visible
    auxElement.setAttribute('readonly', '');
    auxElement.style.position = 'absolute';
    auxElement.style.left = '-9999px';
  
    // Agregar el elemento auxiliar al DOM
    document.body.appendChild(auxElement);
  
    // Seleccionar y copiar el contenido
    auxElement.select();
    document.execCommand('copy');
  
    // Eliminar el elemento auxiliar
    document.body.removeChild(auxElement);
  
    // Cambiar el texto del botón para indicar que ha sido copiado
    button.textContent = '¡Copiado!';
    button.style.backgroundColor = '#E98F8C';
  
    // Restaurar el texto original después de 2 segundos
    setTimeout(() => {
      button.textContent = '0140025003713645262287';
      button.style.backgroundColor = '#E98F8C';
    }, 2000);
  }