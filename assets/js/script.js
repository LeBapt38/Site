// Function to load the JSON translation file
function loadLanguage(lang) {
    // Fetch the appropriate JSON file
    fetch(`assets/json/${lang}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Unable to load language file: ${lang}`);
            }
            return response.json();
        })
        .then(translations => {
            // Update the content on the page dynamically
            Object.keys(translations).forEach(key => {
                const element = document.getElementById(key); // Find the element with the matching ID
                if (element) {
                    element.innerHTML = translations[key]; // Update the content
                }
            });        
        })
        .catch(error => {
            console.error('Error loading language file:', error);
        });
}



// Load the default language on page load
document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language.slice(0, 2); 
    loadLanguage(userLang === 'fr' ? 'fr' : 'en'); // Default language
});