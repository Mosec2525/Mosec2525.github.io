const writeups = [
  {
    title: "Email Lifecycle Business Logic Bug",
    tag: "Medium",
    text: "A deleted account email remains locked, blocking signup or reinvitation.",
    url: "https://Mosec2525.github.io/email-lifecycle-business-logic-bug/",
    action: "Open writeup"
  },
  {
    title: "Password Reset Whitespace Bug",
    tag: "Medium",
    text: "Password reset accepts leading whitespace, but login handles it differently and causes lockout.",
    url: "https://Mosec2525.github.io/password-reset-whitespace-bug/",
    action: "Open writeup"
  },
  {
    title: "Unauthorized File Deletion IDOR",
    tag: "High",
    text: "A destructive file action is possible without proper authentication and ownership checks.",
    url: "https://Mosec2525.github.io/unauthorized-file-deletion-idor/",
    action: "Open writeup"
  },
  {
    title: "Ticket Reservation Logic Bug",
    tag: "High",
    text: "Unpaid ticket reservations stay locked too long and can block real buyers.",
    url: "https://Mosec2525.github.io/ticket-reservation-business-logic-bug/",
    action: "Open writeup"
  },
  {
    title: "Unsubscribe Endpoint IDOR",
    tag: "High",
    text: "Changing a raw mail ID can unsubscribe another user and expose private data.",
    url: "https://Mosec2525.github.io/unsubscribe-endpoint-idor/",
    action: "Open writeup"
  },
  {
    title: "Reusable Email Verification Code",
    tag: "Medium",
    text: "Old verification codes remain valid after requesting a new one.",
    url: "https://Mosec2525.github.io/reusable-email-verification-code-bug/",
    action: "Open writeup"
  },
  {
    title: "Unauthenticated API Token Exposure",
    tag: "Critical",
    text: "A credentials endpoint returns token-like data to logged-out users.",
    url: "https://Mosec2525.github.io/unauthenticated-api-token-exposure/",
    action: "Open writeup"
  },
  {
    title: "Static Analysis Basics",
    tag: "Guide",
    text: "Semgrep, YARA, secret scanning, secure code review, and Code Scanner Quest.",
    url: "https://Mosec2525.github.io/static-analysis-basics-for-cybersecurity/",
    action: "Open guide"
  },
  {
    title: "50 Linux Commands You Must Know",
    tag: "Guide",
    text: "Practical Linux command-line guide for cybersecurity students, SOC beginners, and terminal practice.",
    url: "https://Mosec2525.github.io/linux-50-commands-you-must-know/",
    action: "Open guide"
  },
  {
    title: "Networking Basics",
    tag: "Guide",
    text: "Networking fundamentals for cybersecurity with Network Quest.",
    url: "https://Mosec2525.github.io/networking-basics-for-cybersecurity/",
    action: "Open guide"
  },
  {
    title: "Cloud Security Engineer 10 Essentials",
    tag: "Guide",
    text: "Top 10 things to know before becoming a cloud security engineer.",
    url: "https://github.com/Mosec2525/cloud-security-engineer-10-essentials",
    action: "Open repo"
  },
  {
    title: "Windows Filesystem Guide",
    tag: "Guide",
    text: "Windows directories, permissions, PowerShell, and investigation paths.",
    url: "https://github.com/Mosec2525/windows-filesystem-guide",
    action: "Open repo"
  },
  {
    title: "Linux Filesystem Guide",
    tag: "Guide",
    text: "Linux directories, permissions, commands, and admin fundamentals.",
    url: "https://github.com/Mosec2525/linux-filesystem-guide",
    action: "Open repo"
  }
];

const socLabs = [
  {
    title: "Password Spray Investigation",
    tag: "Lab 01",
    text: "Identity triage lab for password spraying, successful login validation, VPN pivoting, and high-severity SOC reporting.",
    url: "https://Mosec2525.github.io/learn-soc-with-me-lab-01-password-spray/",
    action: "Open lab"
  },
  {
    title: "Suspicious PowerShell",
    tag: "Lab 02",
    text: "Endpoint investigation lab covering Office child processes, encoded PowerShell, script block evidence, and EDR correlation.",
    url: "https://Mosec2525.github.io/learn-soc-with-me-lab-02-suspicious-powershell/",
    action: "Open lab"
  },
  {
    title: "Phishing Login Investigation",
    tag: "Lab 03",
    text: "Email and cloud identity lab connecting phishing delivery, URL click, suspicious sign-in, MFA approval, and mailbox rules.",
    url: "https://Mosec2525.github.io/learn-soc-with-me-lab-03-phishing-login/",
    action: "Open lab"
  },
  {
    title: "New Local Admin User",
    tag: "Lab 04",
    text: "Windows SOC lab for RDP logon review, command execution, local user creation, administrator membership, and containment.",
    url: "https://Mosec2525.github.io/learn-soc-with-me-lab-04-new-local-admin-user/",
    action: "Open lab"
  },
  {
    title: "OAuth Consent Cloud Exfiltration",
    tag: "Lab 05",
    text: "Cloud/SaaS lab for OAuth consent phishing, token abuse, Graph API activity, DLP evidence, and app persistence.",
    url: "https://Mosec2525.github.io/learn-soc-with-me-lab-05-oauth-consent-cloud-exfiltration/",
    action: "Open lab"
  },
  {
    title: "CI/CD OIDC Cloud IAM Anomaly",
    tag: "Lab 06",
    text: "DevSecOps cloud lab for GitHub Actions OIDC, AWS STS, IAM policy changes, S3 backup access, and CloudTrail evidence.",
    url: "https://Mosec2525.github.io/learn-soc-with-me-lab-06-cicd-oidc-cloud-iam-anomaly/",
    action: "Open lab"
  },
  {
    title: "DNS Reverse Lookup Recon",
    tag: "Lab 07",
    text: "Splunk DNS lab using Zeek logs to hunt NXDOMAIN patterns, PTR reverse lookup enumeration, and MITRE T1018 discovery behavior.",
    url: "https://Mosec2525.github.io/learn-soc-with-me-lab-07-dns-reverse-lookup-recon/",
    action: "Open lab"
  }
];

function writeupCard(item) {
  return `
    <a class="card project-card" href="${item.url}" target="_blank" rel="noreferrer">
      <span class="tag severity">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <span class="open-link">${item.action}</span>
    </a>
  `;
}

const writeupCards = document.querySelector("#writeupCards");
const socLabCards = document.querySelector("#socLabCards");

if (writeupCards) {
  writeupCards.innerHTML = writeups.map(writeupCard).join("");
}

if (socLabCards) {
  socLabCards.innerHTML = socLabs.map(writeupCard).join("");
}
