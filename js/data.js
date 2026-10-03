/* =====================================================
   EDIT YOUR CONTENT HERE — the site rebuilds from this.
   Add a project = copy one object in `projects`.
   Swap resume = replace the PDF in /assets (same name),
   or change `resume` below.
   ===================================================== */
const SITE = {
  email: "py509709@gmail.com",
  phone: "+91 9219250085",
  github: "https://github.com/Prabhatyadav92",
  linkedin: "https://linkedin.com/in/prabhat-yadav-dev",
  leetcode: "https://leetcode.com/u/9219250085/",
  resume: "assets/Prabhat_Yadav_Resume.pdf",
  resumeDownloadName: "Prabhat_Yadav_Resume.pdf",
  title: "Full-Stack Developer",
  tagline: "Turning Ideas Into Real-World Products",
  about: "I'm a developer who likes to <strong>build, break, understand, and build better</strong>.<br><br>I enjoy taking an idea, turning it into a working product, and figuring out everything in between — from the user interface and APIs to databases, authentication, and deployment.<br><br>I'm currently pursuing Computer Science Engineering and continuously improving my skills by building real projects, solving problems, and exploring better ways to write and structure software.",
  year: 2026
};

const STATS = [
  { value: "1642", label: "LeetCode contest rating ↗", href: SITE.leetcode },
  { value: "300+", label: "problems solved" },
  { value: "#2", label: "college DSA contest, 150+ participants" },
  { value: "2027", label: "B.Tech CSE graduate" }
];

const SKILLS = {
  "Languages": ["Python", "JavaScript", "Java", "SQL"],
  "AI & GenAI": ["LangChain", "RAG", "OpenAI API", "NLP", "Agentic AI", "FastAPI"],
  "Backend & APIs": ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Auth"],
  "Frontend": ["React.js", "HTML5", "CSS3", "Tailwind CSS", "WebRTC"],
  "Databases": ["MySQL", "MongoDB", "Redis"],
  "Cloud & DevOps": ["Docker", "AWS (basic)", "Vercel", "Render", "MongoDB Atlas", "Git / GitHub", "Postman"],
  "CS Fundamentals": ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks"]
};

const PROJECTS = [
  {
    name: "RepoLens",
    badge: "← newest",
    desc: "A command-line tool that scans a project folder and reports how big it is, which functions have grown out of hand, and whether anyone committed a password. Pure Python standard library, works offline, and never runs or imports your code.",
    terminal: "$ pip install repolens\n$ repolens .            # summary and findings\n$ repolens secrets .    # secrets only, exit 1 if any found\n$ repolens report .     # write repolens-report.md",
    bullets: [
      "Python checks via <code>ast</code>: long/complex functions, too many params, mutable defaults, bare <code>except</code>, <code>eval</code>/<code>exec</code>, unused imports.",
      "JavaScript checks (regex, no parser) for function length, unused imports, <code>var</code>, loose equality, empty catch and leftover <code>console.log</code>.",
      "Secret scanner for private keys, AWS/GitHub/Slack/Google/Stripe keys, JWTs, DB URLs and <code>.env</code> files — values always masked.",
      "CI-friendly: <code>--fail-on</code> exit codes, <code>.gitignore</code> aware, tunable thresholds, inline <code>repolens: ignore</code>."
    ],
    stack: ["Python 3.9+", "ast", "CLI", "pytest"],
    links: [{ label: "GitHub", href: "https://github.com/Prabhatyadav92/repolens" }]
  },
  {
    name: "SigmaGPT — AI Chatbot with RAG",
    desc: "A generative-AI chatbot with a LangChain RAG pipeline giving context-grounded, multi-turn answers over a custom knowledge base.",
    bullets: [
      "Python FastAPI inference microservice integrated with a Node.js backend and MongoDB for session history and user profiles.",
      "Voice input via the Web Speech API in React for hands-free use; 92% accuracy in internal response-quality benchmarks."
    ],
    stack: ["FastAPI", "LangChain", "OpenAI API", "React", "Node.js", "MongoDB"],
    links: [{ label: "GitHub", href: SITE.github }]
  },
  {
    name: "SkillSwap — Skill-Sharing Marketplace",
    desc: "A cloud-deployed marketplace where learners and mentors trade skills through a credit-based barter system.",
    bullets: [
      "JWT auth & authorization, profiles, reviews, ratings and session booking over structured REST APIs.",
      "Geographic skill search and matching on interests, location and compatibility.",
      "Real-time chat and notifications with Socket.io.",
      "Deployed on Vercel, Render and MongoDB Atlas with production env config and CORS management."
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind"],
    links: [{ label: "GitHub", href: SITE.github }]
  },
  {
    name: "Video Conferencing App",
    desc: "Peer-to-peer video calls over WebRTC with a Socket.io signaling server handling SDP/ICE negotiation for low-latency audio/video.",
    bullets: [
      "Multi-participant rooms (up to 8) with screen sharing, mute controls and live in-call chat.",
      "Room lifecycle, participant state and session tokens in Node/Express; meeting history persisted in MongoDB."
    ],
    stack: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB"],
    links: [{ label: "GitHub", href: SITE.github }]
  }
];

const ACHIEVEMENTS = [
  { title: "LeetCode — 300+ solved", text: "Contest rating 1642. Arrays, strings, trees, graphs, DP and sliding window, with focus on optimal time and space complexity.", link: { label: "View LeetCode profile →", href: SITE.leetcode } },
  { title: "College DSA Contest — 2nd Rank", text: "Placed 2nd college-wide among 150+ participants, solving algorithmic problems under strict time limits." }
];

/* AMA bot: `k` = trigger keywords, `r` = reply (HTML allowed) */
const AMA = {
  examples: ["What tech do you know?", "Tell me about RepoLens", "Open to internships?"],
  fallback: "I'm a small keyword bot and missed that — try asking about a project (RepoLens, SigmaGPT, SkillSwap, Video app), the tech stack, or internships.",
  kb: [
    { k: ["project","built","build","work","portfolio"], r: "Four main projects: <b>RepoLens</b> (offline CLI for code-health and secret scanning), <b>SigmaGPT</b> (RAG chatbot), <b>SkillSwap</b> (skill-barter marketplace) and a <b>WebRTC Video Conferencing App</b>. See the Projects section." },
    { k: ["repolens","cli","secret","scanner","lint"], r: "RepoLens is a Python CLI that scans a project folder for size, overgrown functions and committed secrets. Standard library only, works offline, never runs your code. Install: <code>pip install repolens</code>." },
    { k: ["sigmagpt","rag","chatbot","langchain","fastapi"], r: "SigmaGPT is a LangChain RAG chatbot with a FastAPI inference service, Node.js backend, MongoDB session history and voice input — 92% in internal response-quality benchmarks." },
    { k: ["skillswap","skill swap","credit","barter","marketplace"], r: "SkillSwap is a MERN marketplace where learners and mentors trade skills via credits — JWT auth, geographic matching, Socket.io chat, bookings, deployed on Vercel/Render/Atlas." },
    { k: ["video","webrtc","conferenc","call","meeting"], r: "A WebRTC video conferencing app with a Socket.io signaling server, rooms of up to 8, screen sharing, mute controls and in-call chat." },
    { k: ["tech","stack","skill","language","know"], r: "Python, JavaScript, Java, SQL · LangChain, RAG, OpenAI API, FastAPI · Node/Express, Socket.io, JWT · React, Tailwind, WebRTC · MySQL, MongoDB, Redis · Docker, AWS (basic), Vercel, Render." },
    { k: ["leetcode","dsa","contest","rank","problem"], r: `300+ LeetCode problems solved, contest rating 1642, and 2nd rank in a college DSA contest among 150+ participants. <a href="${SITE.leetcode}" target="_blank" rel="noopener">LeetCode profile</a>` },
    { k: ["intern","job","role","hire","hiring","open to","available","sde"], r: "Yes — I'm looking for SDE-1 roles and internships. Reach me via the Contact section." },
    { k: ["grad","study","college","student","education","b.tech"], r: "B.Tech CSE at IEC College of Engineering and Technology, Greater Noida — graduating 2027." },
    { k: ["contact","email","reach","linkedin","github"], r: `Email ${SITE.email} · <a href="${SITE.github}" target="_blank" rel="noopener">GitHub</a> · <a href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` },
    { k: ["resume","cv"], r: `You can grab my resume with the Download Resume button at the top, or <a href="${SITE.resume}" download>click here</a>.` },
    { k: ["hi","hello","hey"], r: "Hey! Ask about Prabhat's projects, skills or availability." }
  ]
};
