// skillsapp.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('skillsdata.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const skillsList = document.querySelector('.skills ul');

            data.skills.forEach(skill => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong style="color: orange;">${skill.name}</strong>: ${skill.description}
                `;
                skillsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
