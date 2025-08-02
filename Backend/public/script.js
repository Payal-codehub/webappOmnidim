document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/testimonials')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('testimonial-container');
            container.innerHTML = '';

            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('testimonial-card');
                div.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>${item.message}</p>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error loading testimonials:', error);
        });
});

async function getMatch() {
  const userProfile = {
    name: "Payal",
    location: "Mumbai",
    budget: "15000",
    lifestyle: "Quiet",
    hobbies: ["Reading", "Yoga"],
    preferences: "Clean, Non-smoker"
  };

  const candidates = [
    {
      name: "Ananya Sharma",
      location: "Mumbai",
      budget: "15000",
      lifestyle: "Quiet",
      hobbies: ["Reading", "Yoga"],
      preferences: "Clean, Non-smoker"
    },
    {
      name: "Priya Verma",
      location: "Bengaluru",
      budget: "12000",
      lifestyle: "Social",
      hobbies: ["Cooking", "Movies"],
      preferences: "Social, Pet-friendly"
    }
  ];

  const res = await fetch("http://localhost:5000/api/match", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userProfile, candidates })
  });

  const data = await res.json();
  console.log("Best match:", data.result);
}

