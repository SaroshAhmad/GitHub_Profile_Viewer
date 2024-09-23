function fetchProfile() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a username');
        return;
    }

    fetch(`https://api.github.com/users/${username}`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
            displayProfile(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
}

function displayProfile(profileData) {
    const profile = document.getElementById('profile');
    `;
}