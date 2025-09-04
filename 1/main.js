const profiles = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    bio: "Passionate frontend developer with 5+ years of experience creating beautiful and responsive web applications. Loves React and modern CSS.",
    image: "https://placehold.co/100x100/4f46e5/ffffff?text=JD",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UX Designer",
    bio: "Creative UX designer specializing in user-centered design solutions. Expert in creating intuitive interfaces that enhance user experience across digital platforms.",
    image: "https://placehold.co/100x100/ec4899/ffffff?text=JS",
  },
];

let currentProfile = 0;

function updateProfile() {
  const profile = profiles[currentProfile];
  document.getElementById("name").textContent = profile.name;
  document.getElementById("role").textContent = profile.role;
  document.getElementById("bio").textContent = profile.bio;
  document.getElementById("profile-image").src = profile.image;
}

document.getElementById("toggle-btn").addEventListener("click", function () {
  currentProfile = currentProfile === 0 ? 1 : 0;
  updateProfile();
});
