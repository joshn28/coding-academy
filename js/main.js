// Show or hide the user dropdown menu when user clicks on the profile image
document.getElementById('profile-img').addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('hidden');
});