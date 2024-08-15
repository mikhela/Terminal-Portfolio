document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const aboutDescription = document.getElementById('about-description');
        aboutDescription.textContent = data.aboutMe.description;
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  });
  