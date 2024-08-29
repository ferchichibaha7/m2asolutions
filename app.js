import "./assets/app.css";
import "./src/js/navbar.js";
import "./src/js/faqs.js";
import "./src/js/theme.js";
import "./src/js/solutions.js";
import "./src/js/languages.js";
import i18next from  "./src/js/i18n.js";


document.addEventListener('DOMContentLoaded', () => {
    const selectBox = document.getElementById('countries');
    
    // Set the select box to the saved language
    const savedLanguage = localStorage.getItem('language') || 'fr';
    selectBox.value = savedLanguage;

    const updateContent = () => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = i18next.t(key);
        });
    };

    // Apply translations on load
    updateContent();

    // Save and apply the selected language on change
    selectBox.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        i18next.changeLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage); // Save the selected language
        updateContent();
    });
});

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://m2asolutions.vercel.app/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  });