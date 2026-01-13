// =====================
// BLOG DATA (MERGED + EXTRA CONTENT)
// =====================
const blogs = [
  // ====== Latest Blogs ======
  {
    date: "2025-12-22",
    author: "Ankit Rai",
    title: "Cybersecurity Is Not a Tool Problem — It’s a Leadership Failure",
    desc: "Most organizations believe cybersecurity can be fixed by buying tools—firewalls, SIEMs, EDRs.",
    tags: [],
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop"
  },
  {
    date: "2025-12-21",
    author: "Ankit Rai",
    title: "Cybersecurity Job Trends in India: Industry Update",
    desc: "Recent industry trends indicate rapid growth in cybersecurity roles across India.",
    tags: [],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop"
  },
  {
    date: "2025-12-20",
    author: "Ankit Rai",
    title: "Lucknow Emerging as a Cybersecurity Training Hub: Why It Matters",
    desc: "Cybersecurity training in Lucknow is growing due to increased digital adoption.",
    tags: [],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop"
  },

  // ====== 2024 Core Blogs ======
  {
    date: "2024-03-15",
    author: "Ankit Rai",
    title: "The Rise of AI in Cyber Attacks",
    desc: "How artificial intelligence is reshaping modern cybersecurity threats and defenses.",
    tags: ["AI", "Cybersecurity", "Future Tech"],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-03-10",
    author: "Ankit Rai",
    title: "Zero Trust Architecture: A Must for Modern Enterprises",
    desc: "Why the traditional perimeter-based security model is obsolete and how Zero Trust provides a robust alternative.",
    tags: ["Zero Trust", "Enterprise Security", "Network Architecture"],
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-02-28",
    author: "Ankit Rai",
    title: "Securing the Software Supply Chain",
    desc: "Key risks in third-party dependencies and how organizations can mitigate supply chain attacks.",
    tags: ["Supply Chain", "Risk Management", "Compliance"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-03-05",
    author: "Ankit Rai",
    title: "Cloud Security Best Practices in 2024",
    desc: "A practical guide to securing cloud infrastructure, workloads, and sensitive data.",
    tags: ["Cloud Security", "AWS", "Azure"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-02-18",
    author: "Ankit Rai",
    title: "The Rise of Ransomware Attacks",
    desc: "Understanding modern ransomware techniques and effective prevention strategies.",
    tags: ["Ransomware", "Threats", "Malware"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-01-30",
    author: "Ankit Rai",
    title: "Identity and Access Management Explained",
    desc: "Why IAM is the backbone of secure digital transformation initiatives.",
    tags: ["IAM", "Authentication", "Authorization"],
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-01-12",
    author: "Ankit Rai",
    title: "DevSecOps: Integrating Security into DevOps",
    desc: "How security can be embedded seamlessly into modern DevOps pipelines.",
    tags: ["DevSecOps", "CI/CD", "Automation"],
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop"
  },

  // ====== Extra Blog Content ======
  {
    date: "2024-04-02",
    author: "Ankit Rai",
    title: "Why Endpoint Security Is Critical in Remote Work",
    desc: "With remote work becoming permanent, endpoint security has emerged as the first line of defense.",
    tags: ["Endpoint Security", "Remote Work", "Cyber Defense"],
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-04-10",
    author: "Ankit Rai",
    title: "Understanding SOC Operations: A Beginner’s Guide",
    desc: "How Security Operations Centers detect, analyze, and respond to cyber threats.",
    tags: ["SOC", "Threat Monitoring", "Blue Team"],
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-04-18",
    author: "Ankit Rai",
    title: "Phishing Attacks: How Hackers Trick Even Smart Users",
    desc: "Phishing techniques are evolving rapidly, making it harder to identify malicious emails.",
    tags: ["Phishing", "Email Security", "Awareness"],
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-04-25",
    author: "Ankit Rai",
    title: "The Role of Cybersecurity in Digital India",
    desc: "As India’s digital infrastructure grows, cybersecurity becomes a national priority.",
    tags: ["Digital India", "Policy", "Cyber Law"],
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-05-03",
    author: "Ankit Rai",
    title: "How Penetration Testing Strengthens Business Security",
    desc: "Penetration testing helps organizations identify vulnerabilities before attackers exploit them.",
    tags: ["Penetration Testing", "Ethical Hacking", "Red Team"],
    img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&auto=format&fit=crop"
  },
  {
    date: "2024-05-12",
    author: "Ankit Rai",
    title: "Cybersecurity Certifications That Matter in 2024",
    desc: "A practical overview of certifications that boost cybersecurity careers.",
    tags: ["Certifications", "Career", "Cyber Jobs"],
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop"
  }
];

// =====================
// RENDER FUNCTION
// =====================
const blogGrid = document.getElementById("blogGrid");

blogs.forEach(blog => {
  const card = document.createElement("div");
  card.className = "card";

  const tagsHTML = blog.tags.length
    ? `<div class="tags">
        ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>`
    : "";

  card.innerHTML = `
    <img src="${blog.img}" alt="${blog.title}">
    <div class="card-body">
      <div class="meta">
        <span>📅 ${blog.date}</span>
        <span>✍️ ${blog.author}</span>
      </div>
      <h3>${blog.title}</h3>
      <p>${blog.desc}</p>
      ${tagsHTML}
      <a href="#" class="read">Read Article →</a>
    </div>
  `;

  blogGrid.appendChild(card);
});
