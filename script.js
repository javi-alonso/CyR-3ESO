document.addEventListener('DOMContentLoaded', () => {
    // Select all copy buttons
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the code block associated with this button
            // The structure is: .demo-header > button, so we go up to .demo-container then down to code
            const container = button.closest('.demo-container');
            const codeBlock = container.querySelector('code');
            
            if (codeBlock) {
                // Get the text content
                const codeText = codeBlock.textContent;

                // Copy to clipboard
                navigator.clipboard.writeText(codeText).then(() => {
                    // Feedback loop
                    const originalText = button.textContent;
                    button.textContent = '¡Copiado!';
                    button.classList.add('copied');
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Error al copiar: ', err);
                });
            }
        });
    });
});
