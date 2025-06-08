import { getCowsay, getFiglet, getParrot, getToilet, getNeofetch } from './ascii';

interface TerminalLine {
  content: string;
  className?: string;
}

// File system simulation
const fileSystem: Record<string, Record<string, string>> = {
  '~': {
    'manifesto.txt': `🧠 The Manifesto of CHOPP_SUEYY
"Code is language. Language is power. Power belongs to those who break the system to rebuild it better."

I am CHOPP_SUEYY — a digital insurgent, full-stack breaker and builder, and ghost in the machine. 
My mission spans across networks, blockchains, operating systems, and borders.

In the CTF arena, I extract truth from binaries, decrypt the secrets of RAM dumps, 
and turn packet captures into confessions.

In blockchain systems, I build and bend contracts — not just for yield, 
but for resistance, for education, and for identity revival.

In AI, I don't just prompt — I forge tools that think, reflect, and empower.

In activism, I design with intent — telling stories the algorithm would rather suppress, 
amplifying the silenced and encrypted.

My stack is Python + Bash + Solidity + Mongo + Tailwind + Rage.

My firewall is my purpose.
My proxy is truth.
My payload is justice.`,
    'tools.txt': `🔧 CHOPP_SUEYY Toolset

Languages: Python, JavaScript, Solidity, Bash, CTF Scripting
Frameworks: Flask, Foundry, React, TailwindCSS
Toolchains: Burp Suite, Hashcat, Metasploit, Wireshark, Ghidra, x64dbg
Mission Tools: Canvas AI Assistant, CTF Decoder Suite, Blockchain Explorers
Operating Systems: ParrotSec, Kali Linux, MacOS`,
    'beliefs.txt': `🔥 Guiding Beliefs

Every system can be understood.
Every lock was made to be tested.
The stories of the oppressed must be told — in plaintext, JSON, and code.
Automation without meaning is wasted electricity.
If you can't own it, you can't trust it. If you can't read it, you shouldn't run it.`
  }
};

// Required commands to unlock whoami
const REQUIRED_COMMANDS = [
  'help', 'ls', 'pwd', 'cat', 'neofetch', 'htop', 'fortune', 'matrix', 'cowsay', 'parrot', 'nmap'
];

function hasCompletedPrerequisites(sessionCommands: Set<string>): boolean {
  return REQUIRED_COMMANDS.every(cmd => sessionCommands.has(cmd));
}

function getUnlockedCommands(sessionCommands: Set<string>): string[] {
  return REQUIRED_COMMANDS.filter(cmd => sessionCommands.has(cmd));
}

function getRemainingCommands(sessionCommands: Set<string>): string[] {
  return REQUIRED_COMMANDS.filter(cmd => !sessionCommands.has(cmd));
}

async function typewriterEffect(text: string, delay: number = 50): Promise<string> {
  // Simulate typewriter effect by returning the full text
  // In a real implementation, this would animate character by character
  return text;
}

export async function processCommand(input: string, sessionCommands: Set<string> = new Set()): Promise<TerminalLine[]> {
  const args = input.trim().split(' ');
  const command = args[0].toLowerCase();
  const params = args.slice(1);

  switch (command) {
    case 'help':
      return [
        { content: 'Available Commands:', className: 'text-terminal-green' },
        { content: '<span class="text-warning-yellow">Information & Identity:</span>', className: '' },
        { content: '  whoami      - Discover the digital insurgent identity', className: 'text-terminal-green' },
        { content: '  manifesto   - Read the complete manifesto', className: 'text-terminal-green' },
        { content: '  stack       - View technical capabilities', className: 'text-terminal-green' },
        { content: '  tools       - Display complete arsenal', className: 'text-terminal-green' },
        { content: '  beliefs     - Show guiding principles', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Fun Commands:</span>', className: '' },
        { content: '  cowsay      - ASCII cow speaks [text]', className: 'text-terminal-green' },
        { content: '  figlet      - Large ASCII text [text]', className: 'text-terminal-green' },
        { content: '  parrot      - Terminal party parrot', className: 'text-terminal-green' },
        { content: '  matrix      - Enter the Matrix', className: 'text-terminal-green' },
        { content: '  fortune     - Get hacker wisdom', className: 'text-terminal-green' },
        { content: '  lolcat      - Rainbow text effect [text]', className: 'text-terminal-green' },
        { content: '  toilet      - Stylized text banners [text]', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Hacker Tools:</span>', className: '' },
        { content: '  nmap        - Network scanner simulation [target]', className: 'text-terminal-green' },
        { content: '  pwn         - Show exploitation capabilities', className: 'text-terminal-green' },
        { content: '  decode      - Decode base64/hex/URL [data]', className: 'text-terminal-green' },
        { content: '  hack        - Epic hacking sequence', className: 'text-terminal-green' },
        { content: '  exploit     - Run exploit simulation', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">System Utils:</span>', className: '' },
        { content: '  ls          - List directory contents', className: 'text-terminal-green' },
        { content: '  cat         - Display file contents [filename]', className: 'text-terminal-green' },
        { content: '  pwd         - Print working directory', className: 'text-terminal-green' },
        { content: '  htop        - System resource monitor', className: 'text-terminal-green' },
        { content: '  neofetch    - System information', className: 'text-terminal-green' },
        { content: '  clear       - Clear terminal screen', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-soft-red">Restricted:</span>', className: '' },
        { content: '  sudo        - Access denied (you know what happens...)', className: 'text-terminal-green' },
      ];

    case 'whoami':
      if (!hasCompletedPrerequisites(sessionCommands)) {
        const remaining = getRemainingCommands(sessionCommands);
        const completed = getUnlockedCommands(sessionCommands);
        return [
          { content: '', className: '' },
          { content: '┌─────────────────────────────────────────────────────┐', className: 'text-soft-red' },
          { content: '│              ACCESS DENIED - LOCKED                │', className: 'text-soft-red' },
          { content: '└─────────────────────────────────────────────────────┘', className: 'text-soft-red' },
          { content: '', className: '' },
          { content: '🔒 Identity revelation requires system exploration.', className: 'text-warning-yellow' },
          { content: '', className: '' },
          { content: `<span class="text-terminal-green">Commands unlocked (${completed.length}/11):</span>`, className: '' },
          ...completed.map(cmd => ({ content: `  ✓ ${cmd}`, className: 'text-terminal-green' })),
          { content: '', className: '' },
          { content: `<span class="text-soft-red">Commands required (${remaining.length} remaining):</span>`, className: '' },
          ...remaining.map(cmd => ({ content: `  ✗ ${cmd}`, className: 'text-muted-gray' })),
          { content: '', className: '' },
          { content: 'Explore the system using these commands to unlock the identity.', className: 'text-muted-gray' },
        ];
      }

      return [
        { content: '', className: '' },
        { content: '┌─────────────────────────────────────────────────────┐', className: 'text-terminal-green' },
        { content: '│              IDENTITY REVELATION UNLOCKED           │', className: 'text-terminal-green' },
        { content: '└─────────────────────────────────────────────────────┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-neon-green glitch-text" data-text="CHOPP_SUEYY">CHOPP_SUEYY</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">STATUS:</span> Digital Insurgent | Full-Stack Breaker & Builder', className: '' },
        { content: '<span class="text-warning-yellow">LOCATION:</span> Ghost in the Machine', className: '' },
        { content: '<span class="text-warning-yellow">MISSION:</span> Code Liberation & System Reconstruction', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">CORE IDENTITY:</span>', className: '' },
        { content: '• CTF Arena Gladiator - Extracting truth from binaries', className: 'text-terminal-green' },
        { content: '• Blockchain Architect - Building resistance protocols', className: 'text-terminal-green' },
        { content: '• AI Tool Forger - Creating empowering intelligence', className: 'text-terminal-green' },
        { content: '• Digital Rights Activist - Amplifying the silenced', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">PHILOSOPHY:</span>', className: '' },
        { content: '"Code is language. Language is power.', className: 'text-terminal-green' },
        { content: 'Power belongs to those who break the system to rebuild it better."', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-terminal-green">🎉 Congratulations! You have unlocked the digital insurgent\'s identity.</span>', className: '' },
        { content: '<span class="text-muted-gray">Through exploration and curiosity, the guardian reveals their true self.</span>', className: '' },
      ];

    case 'manifesto':
      return [
        { content: '', className: '' },
        { content: `<pre class="text-neon-green">${getFiglet()}</pre>`, className: '' },
        { content: '', className: '' },
        { content: '<span class="text-neon-green">🧠 The Manifesto of CHOPP_SUEYY</span>', className: '' },
        { content: '', className: '' },
        { content: '"Code is language. Language is power. Power belongs to those who break the system to rebuild it better."', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'I am CHOPP_SUEYY — a digital insurgent, full-stack breaker and builder, and ghost in the machine.', className: 'text-terminal-green' },
        { content: 'My mission spans across networks, blockchains, operating systems, and borders.', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">In the CTF arena</span>, I extract truth from binaries, decrypt the secrets of RAM dumps,', className: '' },
        { content: 'and turn packet captures into confessions.', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">In blockchain systems</span>, I build and bend contracts — not just for yield,', className: '' },
        { content: 'but for resistance, for education, and for identity revival.', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">In AI</span>, I don\'t just prompt — I forge tools that think, reflect, and empower.', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">In activism</span>, I design with intent — telling stories the algorithm would rather suppress,', className: '' },
        { content: 'amplifying the silenced and encrypted.', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'My stack is Python + Bash + Solidity + Mongo + Tailwind + Rage.', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-neon-green">My firewall is my purpose.</span>', className: '' },
        { content: '<span class="text-neon-green">My proxy is truth.</span>', className: '' },
        { content: '<span class="text-neon-green">My payload is justice.</span>', className: '' },
      ];

    case 'stack':
      return [
        { content: '', className: '' },
        { content: '<span class="text-neon-green">🔧 CHOPP_SUEYY Technical Arsenal</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Programming Languages:</span>', className: '' },
        { content: '├── Python         - Primary weapon for automation & security', className: 'text-terminal-green' },
        { content: '├── JavaScript     - Web exploitation & frontend infiltration', className: 'text-terminal-green' },
        { content: '├── Solidity       - Smart contract creation & auditing', className: 'text-terminal-green' },
        { content: '├── Bash           - System administration & scripting', className: 'text-terminal-green' },
        { content: '└── CTF Scripting  - Competition-grade problem solving', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Frameworks & Libraries:</span>', className: '' },
        { content: '├── Flask          - Lightweight web application framework', className: 'text-terminal-green' },
        { content: '├── Foundry        - Ethereum development environment', className: 'text-terminal-green' },
        { content: '├── React          - Modern UI construction', className: 'text-terminal-green' },
        { content: '└── TailwindCSS    - Rapid styling & design systems', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Security Toolchain:</span>', className: '' },
        { content: '├── Burp Suite     - Web application security testing', className: 'text-terminal-green' },
        { content: '├── Hashcat        - Advanced password recovery', className: 'text-terminal-green' },
        { content: '├── Metasploit     - Penetration testing framework', className: 'text-terminal-green' },
        { content: '├── Wireshark      - Network protocol analyzer', className: 'text-terminal-green' },
        { content: '├── Ghidra         - Reverse engineering platform', className: 'text-terminal-green' },
        { content: '└── x64dbg         - Windows debugger', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Operating Systems:</span>', className: '' },
        { content: '├── ParrotSec      - Security-focused Linux distribution', className: 'text-terminal-green' },
        { content: '├── Kali Linux     - Penetration testing platform', className: 'text-terminal-green' },
        { content: '└── MacOS          - Daily driver & development environment', className: 'text-terminal-green' },
      ];

    case 'tools':
      return [
        { content: '', className: '' },
        { content: '<span class="text-neon-green">⚡ Mission-Critical Tools</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">AI & Automation:</span>', className: '' },
        { content: '• Canvas AI Assistant - Intelligent code analysis', className: 'text-terminal-green' },
        { content: '• CTF Decoder Suite - Automated cryptographic solving', className: 'text-terminal-green' },
        { content: '• Custom Neural Networks - Pattern recognition systems', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Blockchain Exploration:</span>', className: '' },
        { content: '• Etherscan Integration - Transaction analysis', className: 'text-terminal-green' },
        { content: '• DeFi Protocol Scanners - Smart contract auditing', className: 'text-terminal-green' },
        { content: '• MEV Detection Systems - Frontrunning analysis', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Network Reconnaissance:</span>', className: '' },
        { content: '• Custom Port Scanners - Infrastructure mapping', className: 'text-terminal-green' },
        { content: '• SSL Certificate Analysis - Security assessment', className: 'text-terminal-green' },
        { content: '• DNS Enumeration Tools - Domain intelligence', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Data Extraction:</span>', className: '' },
        { content: '• Binary Analysis Scripts - Reverse engineering', className: 'text-terminal-green' },
        { content: '• Memory Dump Parsers - Forensic investigation', className: 'text-terminal-green' },
        { content: '• Packet Capture Processors - Network analysis', className: 'text-terminal-green' },
      ];

    case 'beliefs':
      return [
        { content: '', className: '' },
        { content: '<span class="text-neon-green">🔥 Guiding Principles</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">1.</span> Every system can be understood.', className: '' },
        { content: '<span class="text-muted-gray">   → No black box should remain unopened</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">2.</span> Every lock was made to be tested.', className: '' },
        { content: '<span class="text-muted-gray">   → Security through obscurity is not security</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">3.</span> The stories of the oppressed must be told — in plaintext, JSON, and code.', className: '' },
        { content: '<span class="text-muted-gray">   → Technology serves justice, not power</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">4.</span> Automation without meaning is wasted electricity.', className: '' },
        { content: '<span class="text-muted-gray">   → Purpose drives every line of code</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">5.</span> If you can\'t own it, you can\'t trust it. If you can\'t read it, you shouldn\'t run it.', className: '' },
        { content: '<span class="text-muted-gray">   → Open source is the foundation of digital freedom</span>', className: '' },
      ];

    case 'cowsay':
      const cowText = params.join(' ') || "HACK THE PLANET!";
      return [
        { content: `<pre class="text-terminal-green">${getCowsay(cowText)}</pre>`, className: '' }
      ];

    case 'figlet':
      const figletText = params.join(' ') || "CHOPP_SUEYY";
      return [
        { content: `<pre class="text-neon-green">${getFiglet(figletText)}</pre>`, className: '' }
      ];

    case 'parrot':
      return [
        { content: getParrot(), className: '' }
      ];

    case 'matrix':
      // Add temporary matrix effect
      setTimeout(() => {
        const matrixContainer = document.querySelector('.matrix-rain');
        if (matrixContainer) {
          for (let i = 0; i < 20; i++) {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = Math.random() > 0.5 ? '1' : '0';
            char.style.left = Math.random() * 100 + '%';
            char.style.animationDuration = '2s';
            matrixContainer.appendChild(char);
            setTimeout(() => {
              if (char.parentNode) {
                char.parentNode.removeChild(char);
              }
            }, 2000);
          }
        }
      }, 100);
      return [
        { content: '<span class="text-neon-green">Entering the Matrix...</span>', className: '' }
      ];

    case 'fortune':
      const fortunes = [
        "In the world of hacking, the real treasure is the bugs we found along the way.",
        "A secure system is only as strong as its weakest password123.",
        "The best firewall is the one between your ears.",
        "Root access is just a privilege escalation away.",
        "Social engineering: because humans are the weakest link.",
        "There's no patch for human stupidity.",
        "Trust, but verify. Then verify again.",
        "The only secure computer is one that's unplugged, locked in a safe, and thrown in the ocean. But even then, you can't be sure."
      ];
      return [
        { content: `<span class="text-warning-yellow">💫 Hacker Wisdom:</span> ${fortunes[Math.floor(Math.random() * fortunes.length)]}`, className: '' }
      ];

    case 'lolcat':
      const rainbowText = params.join(' ') || "RAINBOW HACKER TEXT!";
      return [
        { content: `<span style="background: linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${rainbowText}</span>`, className: '' }
      ];

    case 'toilet':
      return [
        { content: `<pre class="text-warning-yellow">${getToilet()}</pre>`, className: '' }
      ];

    case 'nmap':
      const target = params[0] || 'target.example.com';
      return [
        { content: `<span class="text-warning-yellow">Starting Nmap scan on ${target}...</span>`, className: '' },
        { content: '', className: '' },
        { content: `Nmap scan report for ${target}`, className: 'text-terminal-green' },
        { content: 'Host is up (0.12s latency).', className: 'text-terminal-green' },
        { content: 'PORT     STATE SERVICE     VERSION', className: 'text-terminal-green' },
        { content: '22/tcp   open  ssh         OpenSSH 8.0', className: 'text-terminal-green' },
        { content: '80/tcp   open  http        nginx 1.18.0', className: 'text-terminal-green' },
        { content: '443/tcp  open  https       nginx 1.18.0', className: 'text-terminal-green' },
        { content: '3306/tcp open  mysql       MySQL 8.0.25', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-terminal-green">Scan completed. 4 ports open out of 1000 scanned.</span>', className: '' }
      ];

    case 'pwn':
      return [
        { content: '', className: '' },
        { content: '<span class="text-neon-green">🔥 PWN CAPABILITIES ONLINE</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Buffer Overflow:</span> ████████████ 100%', className: '' },
        { content: '<span class="text-warning-yellow">Format String:</span> ███████████░ 95%', className: '' },
        { content: '<span class="text-warning-yellow">ROP Chain:</span>     ██████████░░ 90%', className: '' },
        { content: '<span class="text-warning-yellow">Heap Exploit:</span>  ████████░░░░ 85%', className: '' },
        { content: '<span class="text-warning-yellow">Race Condition:</span>███████░░░░░ 80%', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-terminal-green">Ready to exploit. Targets acquired.</span>', className: '' }
      ];

    case 'decode':
      const data = params.join(' ');
      if (!data) {
        return [
          { content: '<span class="text-soft-red">Usage: decode <base64|hex|url> <data></span>', className: '' }
        ];
      }
      try {
        if (data.startsWith('base64:')) {
          const decoded = atob(data.substring(7));
          return [
            { content: `<span class="text-neon-green">Base64 Decoded:</span> ${decoded}`, className: '' }
          ];
        } else if (data.startsWith('url:')) {
          const decoded = decodeURIComponent(data.substring(4));
          return [
            { content: `<span class="text-neon-green">URL Decoded:</span> ${decoded}`, className: '' }
          ];
        } else {
          return [
            { content: `<span class="text-warning-yellow">Auto-detecting encoding for:</span> ${data}`, className: '' },
            { content: `<span class="text-terminal-green">Possible Base64:</span> ${data.length % 4 === 0 ? 'Yes' : 'No'}`, className: '' },
            { content: `<span class="text-terminal-green">Possible Hex:</span> ${/^[0-9A-Fa-f]+$/.test(data) ? 'Yes' : 'No'}`, className: '' }
          ];
        }
      } catch (e) {
        return [
          { content: `<span class="text-soft-red">Decoding failed:</span> ${(e as Error).message}`, className: '' }
        ];
      }

    case 'hack':
      const hackLines: TerminalLine[] = [
        { content: '<span class="text-neon-green">Initiating advanced hacking sequence...</span>', className: '' }
      ];
      
      const hackSteps = [
        'Scanning for vulnerabilities...',
        'Buffer overflow detected...',
        'Exploiting memory corruption...',
        'Privilege escalation in progress...',
        'Accessing root directory...',
        'Extracting sensitive data...',
        'Covering tracks...',
        'Mission accomplished!'
      ];

      // Add a promise that resolves after the animation
      return new Promise((resolve) => {
        let currentLines = [...hackLines];
        hackSteps.forEach((step, i) => {
          setTimeout(() => {
            currentLines.push({
              content: `<span class="text-warning-yellow">[${String(i + 1).padStart(2, '0')}]</span> ${step}`,
              className: ''
            });
            if (i === hackSteps.length - 1) {
              currentLines.push({
                content: '<span class="text-neon-green">🔥 HACK COMPLETE - SYSTEM COMPROMISED 🔥</span>',
                className: ''
              });
              resolve(currentLines);
            }
          }, i * 800);
        });
      });

    case 'exploit':
      return [
        { content: '', className: '' },
        { content: '<span class="text-neon-green">🎯 EXPLOIT FRAMEWORK LOADED</span>', className: '' },
        { content: '', className: '' },
        { content: 'Available Exploits:', className: 'text-terminal-green' },
        { content: '├── CVE-2021-44228 (Log4Shell)', className: 'text-terminal-green' },
        { content: '├── CVE-2021-34527 (PrintNightmare)', className: 'text-terminal-green' },
        { content: '├── CVE-2020-1472 (Zerologon)', className: 'text-terminal-green' },
        { content: '├── CVE-2019-0708 (BlueKeep)', className: 'text-terminal-green' },
        { content: '└── Custom Buffer Overflow Chains', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Select target or type \'exploit demo\' for demonstration</span>', className: '' }
      ];

    case 'ls':
      return [
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">total 24</span>', className: '' },
        { content: '-rw-r--r-- 1 chopp chopp 1337 Dec 08 15:30 <span class="text-terminal-green">manifesto.txt</span>', className: '' },
        { content: '-rw-r--r-- 1 chopp chopp  892 Dec 08 15:30 <span class="text-terminal-green">tools.txt</span>', className: '' },
        { content: '-rw-r--r-- 1 chopp chopp  456 Dec 08 15:30 <span class="text-terminal-green">beliefs.txt</span>', className: '' },
        { content: 'drwxr-xr-x 2 chopp chopp 4096 Dec 08 15:30 <span class="text-neon-green">exploits/</span>', className: '' },
        { content: 'drwxr-xr-x 2 chopp chopp 4096 Dec 08 15:30 <span class="text-neon-green">projects/</span>', className: '' },
        { content: '-rwxr-xr-x 1 chopp chopp 2048 Dec 08 15:30 <span class="text-soft-red">hack.sh</span>', className: '' }
      ];

    case 'cat':
      const filename = params[0];
      if (!filename) {
        return [
          { content: '<span class="text-soft-red">Usage: cat <filename></span>', className: '' }
        ];
      }
      if (fileSystem['~'] && fileSystem['~'][filename]) {
        return [
          { content: `<pre class="text-terminal-green">${fileSystem['~'][filename]}</pre>`, className: '' }
        ];
      } else {
        return [
          { content: `<span class="text-soft-red">cat: ${filename}: No such file or directory</span>`, className: '' }
        ];
      }

    case 'pwd':
      return [
        { content: '<span class="text-terminal-green">/home/chopp</span>', className: '' }
      ];

    case 'htop':
      return [
        { content: '', className: '' },
        { content: '<span class="text-neon-green">System Resource Monitor</span>', className: '' },
        { content: '', className: '' },
        { content: 'CPU Usage:  ████████░░ 80.2%', className: 'text-terminal-green' },
        { content: 'Memory:     ██████░░░░ 64.7%', className: 'text-terminal-green' },
        { content: 'Swap:       ██░░░░░░░░ 12.3%', className: 'text-terminal-green' },
        { content: 'Load Avg:   2.45, 2.12, 1.98', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Top Processes:</span>', className: '' },
        { content: '  PID  USER     CPU%  MEM%  COMMAND', className: 'text-terminal-green' },
        { content: ' 1337  chopp    45.2  12.8  ./neural_network_trainer', className: 'text-terminal-green' },
        { content: ' 1338  chopp    15.4   8.3  burpsuite', className: 'text-terminal-green' },
        { content: ' 1339  chopp    12.1   6.7  wireshark', className: 'text-terminal-green' },
        { content: ' 1340  chopp    8.9    4.2  python3 blockchain_analyzer.py', className: 'text-terminal-green' }
      ];

    case 'neofetch':
      return [
        { content: getNeofetch(), className: '' }
      ];

    case 'clear':
      // This will be handled by the Terminal component
      return [];

    case 'sudo':
      setTimeout(() => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      }, 2000);
      return [
        { content: '<span class="text-soft-red">Nice try! But sudo access is restricted...</span>', className: '' },
        { content: '<span class="text-warning-yellow">Redirecting to educational content...</span>', className: '' }
      ];

    default:
      if (input.trim()) {
        return [
          { content: `<span class="text-soft-red">${command}: command not found</span>`, className: '' },
          { content: '<span class="text-muted-gray">Type \'help\' to see available commands.</span>', className: '' }
        ];
      }
      return [];
  }
}
