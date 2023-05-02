document.getElementById('form-ingrediente').addEventListener('submit', async (event) => {
    event.preventDefault();
    const ingrediente = document.getElementById('ingrediente').value;
    const rezultatElement = document.getElementById('rezultat');

    try {
        const response = await fetch('https://api.tausite.ro/chatgpt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: `Generează o rețetă folosind următoarele ingrediente: ${ingrediente}`
            })
        });

        const data = await response.json();
        const reteta = data.reteta;
        rezultatElement.innerHTML = `<h2>Rețetă propusă:</h2><p>${reteta}</p>`;
    } catch (error) {
        console.error(error);
        rezultatElement.innerHTML = '<p>A apărut o eroare în timpul generării rețetei. Vă rugăm să încercați din nou.</p>';
    }
});
