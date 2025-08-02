FemNest – AI-Powered Roommate Matching for Women’s Co-Living Spaces
FemNest is a next-generation, AI-driven platform tailored for women seeking safe, compatible, and user-friendly co-living arrangements. Leveraging advanced voice-enabled surveys and proprietary AI algorithms, FemNest intelligently matches roommates and allocates rooms based on key lifestyle compatibility traits—all while emphasizing user privacy, fairness, and safety.

🌟 Key Features
Voice-Based Conversational Survey:
Integrated with Omnidim.io, FemNest captures user preferences through a concise, 5-question voice survey for a seamless onboarding experience.

AI-Driven Compatibility Matching:
Proprietary matching algorithms compute compatibility scores using factors such as sleeping habits, cleanliness, work schedules, social interaction preferences, and more.

Explainable Recommendations:
Seamless integration with the Google Gemini API enables transparent, natural-language explanations of match results, fostering trust and clarity.

Smart Room Allocation:
Recommends optimal twin-sharing room pairings based on compatibility scores and user-specified room preferences.

Women-Centric & Privacy-Focused:
FemNest is designed with built-in safeguards, prioritizing fairness, data privacy, and the unique safety needs of women in co-living environments.

Comprehensive Admin Dashboard:
Secure web-based interface for administrators to monitor user activity, review matches, and manage room assignments.

🧰 Technical Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript (Vanilla)
Voice AI	Omnidim.io
Backend	Django (Python)
AI API	Google Gemini API
Database	MongoDB (via Atlas)
Deployment	Vercel / Railway / Render (Optional cloud providers)
📂 Project Structure
text
femnest/
├── frontend/             # Core HTML, CSS, and JavaScript client
│   ├── index.html
│   ├── styles/
│   └── scripts/
│
├── backend/              # Django application
│   ├── femnest/
│   ├── manage.py
│   └── requirements.txt
│
├── voice/                # Voice survey integration (Omnidim.io setup)
│   └── ...
│
├── ai/                   # Gemini & matching logic modules
│   └── ...
│
├── database/             # MongoDB models and connection configs
│   └── ...
│
├── dashboard/            # Admin panel source code
│   └── ...
│
├── .env                  # Environment variables (never commit secrets)
├── README.md
└── ...
🚀 Getting Started
Clone the repository:

bash
git clone https://github.com/your-org/femnest.git
cd femnest
Backend Setup:

Create a virtual environment and install dependencies:

bash
python -m venv venv
source venv/bin/activate
pip install -r backend/requirements.txt
Configure environment variables in .env.

Run database migrations and start Django server:

bash
cd backend
python manage.py migrate
python manage.py runserver
Frontend & Voice AI:

Serve static files from frontend/ and integrate with Omnidim.io.

Update scripts to communicate with the backend REST API.

AI & Gemini API:

Configure Gemini API credentials in the backend.

Ensure all AI modules are connected for real-time match explanations.

Admin Dashboard:

Access at /dashboard once backend is running and admin account is set up.

Deployment:

Deploy on Vercel, Railway, Render, or another provider, as needed.

Set up MongoDB Atlas and configure deployment secrets.

💡 Contributing
Fork the repository and create feature branches.

Follow PEP8 and best practices for Python and Django.

Write clear commit messages and open detailed pull requests.

Contributions to both user and admin features are welcome, with a focus on safety and inclusivity.

👩💻 License
This project is licensed under the MIT License. See LICENSE for details.

📫 Contact
For questions, feedback, or partnership opportunities, please contact:
FemNest Team - femnest@yourdomain.com

FemNest is committed to building safer, smarter, and more empowering co-living communities for women everywhere.
