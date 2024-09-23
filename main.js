// Ensure the DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', fetchProfile);
});

function fetchProfile() {
    const name = document.getElementById('searchUser').value;

    if (!name) {
        alert('Please enter a GitHub username or name');
        return;
    }

    // Fetching users by name
    fetch(`https://api.github.com/search/users?q=${encodeURIComponent(name)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found. Please enter a valid GitHub name or username.');
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            if (data.total_count === 0) {
                throw new Error('No users found with that name.');
            }
            // Display the first user found
            displayProfile(data.items[0]);
        })
        .catch(error => {
            const profile = document.getElementById('profile');
            profile.innerHTML = `<p style="color:red; font-weight: bold;">${error.message}</p>`;
            profile.style.display = 'block';
        });
}

function displayProfile(profileData) {
    const profile = document.getElementById('profile');

    // Update profile card content
    profile.innerHTML = `
        <img src="${profileData.avatar_url}" alt="${profileData.login}" />
        <h2>${profileData.login}</h2>
        <p>Name: ${profileData.name ? profileData.name : 'No name available'}</p>
        <p>Profile URL: <a href="${profileData.html_url}" target="_blank">${profileData.html_url}</a></p>
    `;

    // Make the profile card visible
    profile.style.display = 'block';
}
