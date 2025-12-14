
const profile1 = {
  name: "Daniel Eufratama Siahaan",
  role: "Data Analyst & Web Developer",
  bio: "Mahasiswa Informatika yang suka eksplor data dan membangun tampilan web yang soft dan nyaman dilihat.",
  location: "📍 Medan, Indonesia",
  tags: ["Word", "Excel", "HTML", "CSS", "JavaScript", "Back-end"],
  social: {
    instagram: "https://www.instagram.com/fraaex_?igsh=MXFkYzZwOXUzMm1h",
    github: "https://github.com/fraa0912"
  }
};

const profile2 = {
  name: "Daniel E. Siahaan",
  role: "Front-end & UI Enthusiast",
  bio: "Fokus pada tampilan web yang rapi, konsisten, dan user-friendly dengan nuansa warna elegan.",
  location: "📍 Indonesia",
  tags: ["Front-end", "UI Design", "Responsive Layout"],
  social: {
    instagram: "#",
    github: "#"
  }
};

// ============================
//  SCRIPT GANTI PROFIL
// ============================
const profileName = document.getElementById("profile-name");
const profileRole = document.getElementById("profile-role");
const profileBio = document.getElementById("profile-bio");
const profileLocation = document.getElementById("profile-location");
const profileTags = document.getElementById("profile-tags");
const profileSocial = document.getElementById("profile-social");
const btn1 = document.getElementById("btn-profile-1");
const btn2 = document.getElementById("btn-profile-2");

function renderProfile(data) {
  profileName.textContent = data.name;
  profileRole.textContent = data.role;
  profileBio.textContent = data.bio;
  profileLocation.textContent = data.location;

  // tags
  profileTags.innerHTML = "";
  data.tags.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    profileTags.appendChild(span);
  });

  // social
  profileSocial.innerHTML = "";
  const ig = document.createElement("a");
  ig.href = data.social.instagram;
  ig.target = "_blank";
  ig.textContent = "Instagram";

  const gh = document.createElement("a");
  gh.href = data.social.github;
  gh.target = "_blank";
  gh.textContent = "GitHub";

  profileSocial.appendChild(ig);
  profileSocial.appendChild(gh);
}

// default profil utama
renderProfile(profile1);

btn1.addEventListener("click", () => {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  renderProfile(profile1);
});

btn2.addEventListener("click", () => {
  btn2.classList.add("active");
  btn1.classList.remove("active");
  renderProfile(profile2);
});

// ============================
//  EFEK KETIK – HAPUS TEKS
// ============================
const typeTarget = document.querySelector(".typeText");

const typingPhrases = [
  "Data Analyst",
  "Web Developer",
  "Back-End",
  "Cyber Security"
];

let tpIndex = 0;
let charIndex = 0;
let isAdding = true;

function playTyping() {
  const current = typingPhrases[tpIndex];

  if (isAdding) {
    typeTarget.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      isAdding = false;
      setTimeout(playTyping, 1500);
      return;
    }
  } else {
    typeTarget.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isAdding = true;
      tpIndex = (tpIndex + 1) % typingPhrases.length;
    }
  }

  const speed = isAdding ? 90 : 60;
  setTimeout(playTyping, speed);
}

if (typeTarget) {
  playTyping();
}

// ============================
//  ANIMASI BAR KELEBIHAN
// ============================
const strengthCards = document.querySelectorAll(".strength-card");
strengthCards.forEach(card => {
  const level = card.getAttribute("data-level");
  const fill = card.querySelector(".strength-fill");
  setTimeout(() => {
    fill.style.width = level + "%";
  }, 300);
});
