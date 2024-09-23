function fetchProfile() {
    const username = document.getElementById('searchUser').value;
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
    profile.innerHTML = `
        <img src="${profileData.avatar_url}" style="width:100px; height:100px; border-radius:50%" alt="${profileData.login}" />
        <h2>${profileData.name}</h2>
        <p>${profileData.bio}</p>
        <p>${profileData.location}</p>
        <p>${profileData.public_repos} public repos</p>
    `;
}