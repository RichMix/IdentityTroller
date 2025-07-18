import { getCowsay, getCowthink, getFiglet, getParrot, getToilet, getNeofetch, getNyancat, getSteamLocomotive, getPipes, getAsciiAquarium, getLolcat } from './ascii';
import { animateNmapScan, animateMatrixHack, animateLoadingSequence } from './animations';

interface TerminalLine {
  content: string;
  className?: string;
}

// File system simulation
const fileSystem: Record<string, Record<string, string>> = {
  '~': {
    'manifesto.txt': `[LOCKED] 🔒 Access Denied - Manifesto Encrypted
Authentication required: Complete system exploration to unlock identity files.`,
    'tools.txt': `[LOCKED] 🔒 Access Denied - Toolset Classified  
Security Protocol: Identity verification needed before revealing arsenal.`,
    'beliefs.txt': `[LOCKED] 🔒 Access Denied - Philosophy Protected
Clearance Level: Explore terminal commands to gain access rights.`,
    'readme.txt': `📋 TERMINAL ACCESS PROTOCOL

Welcome to the digital insurgent's terminal interface.

Current Status: GUEST ACCESS - LIMITED PRIVILEGES
Identity Status: UNKNOWN - VERIFICATION REQUIRED

To unlock the full system and reveal the operator's identity:
• Execute 11 unique commands from the available arsenal
• Each command unlocks deeper system access
• Type 'help' to see available commands
• Type 'whoami' after exploration to reveal identity

WARNING: Unauthorized access attempts will be logged.
This system is monitored by advanced AI countermeasures.

BEGIN EXPLORATION...`,
    'version.txt': `🔄 System Version Control

TERMINAL_VERSION: 2.1.4-insurgent
BUILD_DATE: 2024-12-08
SECURITY_LEVEL: CLASSIFIED
OPERATOR: [REDACTED]
ACCESS_TIER: GUEST

Last Updated: Identity protection protocols enhanced
Next Update: Scheduled after authentication completion

System requires 11 command executions for full access.
Current session: EXPLORATION MODE`
  }
};

// Unlocked file contents for authenticated users
const unlockedFiles: Record<string, string> = {
  'manifesto.txt': `🧠 The Manifesto of CHOPSUEYY
"Code is language. Language is power. Power belongs to those who break the system to rebuild it better."

I am CHOPSUEYY — a digital insurgent, full-stack breaker and builder, and ghost in the machine. 
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
  'tools.txt': `🔧 CHOPSUEYY Elite Digital Arsenal

█ CORE PROGRAMMING LANGUAGES █
├── Python 3.11+        - Primary weapon for automation, ML, and security analysis
├── JavaScript/TypeScript - Web exploitation, Node.js backend infiltration  
├── Solidity            - Smart contract auditing and blockchain exploitation
├── Rust                - System-level exploitation and high-performance tools
├── Go                  - Network tools and distributed system penetration
├── C/C++               - Binary exploitation and reverse engineering
├── Assembly x86/x64    - Low-level system manipulation and shellcode crafting
└── Bash/Zsh            - Command-line automation and system scripting

█ CYBERSECURITY FRAMEWORKS █
├── Metasploit          - Penetration testing and exploit development
├── Burp Suite Pro      - Web application security testing
├── OWASP ZAP           - Automated web vulnerability scanning
├── Nmap/Masscan        - Network reconnaissance and port scanning
├── Wireshark/tcpdump   - Network traffic analysis and packet inspection
├── Aircrack-ng         - Wireless network security testing
├── John the Ripper     - Password cracking and hash analysis
├── Hashcat             - GPU-accelerated password recovery
└── SQLmap              - SQL injection testing and database exploitation

█ REVERSE ENGINEERING TOOLS █
├── Ghidra              - NSA's reverse engineering suite
├── IDA Pro             - Advanced disassembler and debugger
├── x64dbg/OllyDbg      - Dynamic analysis and debugging
├── Radare2             - Open-source reverse engineering framework
├── Binary Ninja        - Modern disassembly and decompilation
├── Volatility          - Memory forensics and analysis
├── YARA                - Malware identification and classification
└── Cuckoo Sandbox      - Automated malware analysis environment

█ BLOCKCHAIN & CRYPTO ARSENAL █
├── Foundry             - Ethereum development and testing framework
├── Hardhat             - Smart contract deployment and testing
├── Slither             - Static analysis for Solidity vulnerabilities
├── MythX               - Security analysis for smart contracts
├── Brownie             - Python-based Ethereum development framework
├── Web3.py/ethers.js   - Blockchain interaction libraries
├── Chainlink           - Oracle network integration and testing
└── IPFS                - Decentralized storage and content addressing

█ WEB DEVELOPMENT STACK █
├── React/Next.js       - Frontend infiltration and social engineering
├── Flask/FastAPI       - Python backend development and API creation
├── Express.js          - Node.js server development and middleware
├── TailwindCSS         - Rapid UI development and styling
├── PostgreSQL/Redis    - Database manipulation and caching systems
├── Docker/Kubernetes   - Containerization and orchestration
├── AWS/GCP/Azure       - Cloud infrastructure and security assessment
└── Nginx/Apache        - Web server configuration and security hardening

█ AI/ML WEAPONIZATION █
├── TensorFlow/PyTorch  - Deep learning model development and adversarial attacks
├── Transformers        - NLP model fine-tuning and prompt injection
├── OpenCV              - Computer vision and image manipulation
├── Scikit-learn        - Machine learning algorithms and data analysis
├── Pandas/NumPy        - Data manipulation and statistical analysis
├── NLTK/spaCy          - Natural language processing and text analysis
├── Jupyter/IPython     - Interactive development and data exploration
└── Matplotlib/Seaborn  - Data visualization and report generation

█ OPERATIONAL SECURITY TOOLS █
├── Tor/Proxychains     - Anonymous network routing and traffic obfuscation
├── OpenVPN/WireGuard   - Secure tunnel establishment and traffic encryption
├── GPG/PGP             - Message encryption and digital signatures
├── Veracrypt           - Disk encryption and secure storage
├── Signal/Element      - Secure communications and messaging
├── Tails/Qubes         - Anonymous operating systems and compartmentalization
├── pfSense/OPNsense    - Network security and firewall configuration
└── Fail2ban/OSSEC      - Intrusion detection and prevention systems

█ CTF & CHALLENGE PLATFORMS █
├── HackTheBox          - Penetration testing labs and challenges
├── TryHackMe           - Guided cybersecurity learning paths
├── PicoCTF             - Educational capture-the-flag competitions
├── OverTheWire         - War games and security challenges
├── VulnHub             - Vulnerable virtual machines for practice
├── CyberDefenders      - Blue team and forensics challenges
├── Root-Me             - Multi-discipline security challenges
└── SANS NetWars        - Professional cybersecurity competitions

█ DEVELOPMENT ENVIRONMENTS █
├── VSCode/Neovim       - Code editing with security extensions
├── Kali Linux          - Penetration testing distribution
├── Parrot Security     - Privacy-focused security platform
├── BlackArch           - Penetration testing and security research
├── Arch Linux          - Minimalist and customizable base system
├── Ubuntu Server       - Production deployment and server management
├── VMware/VirtualBox   - Virtual machine management and isolation
└── QEMU/KVM            - Hardware virtualization and emulation

"In the digital realm, knowledge is power, and power shared responsibly builds a better tomorrow."`,
  'beliefs.txt': `🔥 Guiding Beliefs

Every system can be understood.
Every lock was made to be tested.
The stories of the oppressed must be told — in plaintext, JSON, and code.
Automation without meaning is wasted electricity.
If you can't own it, you can't trust it. If you can't read it, you shouldn't run it.`,
  'version.txt': `🔄 System Version Control - AUTHENTICATED ACCESS

TERMINAL_VERSION: 2.1.4-insurgent-unlocked
BUILD_DATE: 2024-12-08
SECURITY_LEVEL: FULL_ACCESS_GRANTED
OPERATOR: CHOPSUEYY - Digital Insurgent
ACCESS_TIER: AUTHENTICATED_USER

Authentication completed successfully.
Identity verification: PASSED
Command exploration: COMPLETED (11/11)

System Status: All files and functions unlocked.
Welcome back, CHOPSUEYY.`
};

// Enhanced fun commands for random selection (excluding basic navigation)
const FUN_COMMANDS = [
  'neofetch', 'fortune', 'matrix', 'cowsay', 'cowthink', 'parrot', 'nmap',
  'figlet', 'toilet', 'lolcat', 'nyancat', 'sl', 'pipes', 'asciiquarium', 
  'cmatrix', 'banner', 'factor', 'yes', 'rev', 'games', 'tree', 'uptime',
  'snake', 'tetris', 'pong', 'breakout', 'hangman', 'nim',
  'blackjack', 'slots', 'dice', 'coinflip', 'magic8', 'riddle', 'maze', 'sudoku', 'life',
  'joke', 'quote', 'encrypt', 'decode', 'status'
];

// Generate random 11 commands per session
function generateRandomRequiredCommands(): string[] {
  // Security: Only select from entertainment commands that don't reveal identity
  const safeCommands = FUN_COMMANDS.filter(cmd => 
    !['banner', 'figlet', 'toilet', 'neofetch'].includes(cmd)
  );
  const shuffled = [...safeCommands].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 11);
}

// Session-specific required commands (generated once per session)
let REQUIRED_COMMANDS: string[] = [];

function initializeSession(): void {
  REQUIRED_COMMANDS = generateRandomRequiredCommands();
}

function hasCompletedPrerequisites(sessionCommands: Set<string>): boolean {
  if (REQUIRED_COMMANDS.length === 0) {
    initializeSession();
  }
  return REQUIRED_COMMANDS.every(cmd => sessionCommands.has(cmd));
}

function getUnlockedCommands(sessionCommands: Set<string>): string[] {
  if (REQUIRED_COMMANDS.length === 0) {
    initializeSession();
  }
  return REQUIRED_COMMANDS.filter(cmd => sessionCommands.has(cmd));
}

function getRemainingCommands(sessionCommands: Set<string>): string[] {
  if (REQUIRED_COMMANDS.length === 0) {
    initializeSession();
  }
  return REQUIRED_COMMANDS.filter(cmd => !sessionCommands.has(cmd));
}

// Security: Sanitize all inputs to prevent path traversal and injection
function sanitizeInput(input: string): string {
  // Security: Remove dangerous characters and identity leaks
  return input
    .replace(/\.\./g, '') // Remove path traversal attempts
    .replace(/[;&|`$(){}[\]<>]/g, '') // Remove shell injection characters
    .replace(/chopsueyy/gi, '[REDACTED]') // Block identity references
    .replace(/CHOPSUEYY/g, '[REDACTED]') // Block uppercase variants
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()
    .substring(0, 100); // Limit length
}

// Security: Validate command against whitelist
function isValidCommand(command: string): boolean {
  const allowedCommands = [
    ...FUN_COMMANDS, 
    'help', 'ls', 'pwd', 'cat', 'clear', 'sudo', 'whoami', 'manifesto', 'stack', 'tools', 'beliefs', 'games', 'test',
    'figlet', 'banner', 'toilet', 'neofetch'
  ];
  return allowedCommands.includes(command.toLowerCase());
}

async function typewriterEffect(text: string, delay: number = 50): Promise<string> {
  // Simulate typewriter effect by returning the full text
  // In a real implementation, this would animate character by character
  return text;
}

export async function processCommand(input: string, sessionCommands: Set<string> = new Set()): Promise<TerminalLine[]> {
  // Security: Sanitize input
  const sanitizedInput = sanitizeInput(input);
  const args = sanitizedInput.trim().split(' ');
  const command = args[0].toLowerCase();
  const params = args.slice(1);

  // Security: Validate command
  if (!isValidCommand(command) && command !== '') {
    return [
      { content: `<span class="text-soft-red">Command '${command}' not allowed for security reasons</span>`, className: '' },
      { content: '<span class="text-muted-gray">Type \'help\' to see available commands.</span>', className: '' }
    ];
  }

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
        { content: '<span class="text-warning-yellow">Terminal Games:</span>', className: '' },
        { content: '  games       - List all available games', className: 'text-terminal-green' },
        { content: '  snake       - Classic snake game', className: 'text-terminal-green' },
        { content: '  tetris      - Block-stacking puzzle', className: 'text-terminal-green' },
        { content: '  hangman     - Word guessing game', className: 'text-terminal-green' },
        { content: '  blackjack   - Casino card game', className: 'text-terminal-green' },
        { content: '  dice        - Roll the dice', className: 'text-terminal-green' },
        { content: '  magic8      - Ask the magic 8-ball', className: 'text-terminal-green' },
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
      // Security: Triple verification system for identity reveal
      const completedCmds = getUnlockedCommands(sessionCommands);
      const isFullyAuthenticated = hasCompletedPrerequisites(sessionCommands);
      
      if (!isFullyAuthenticated) {
        const remaining = getRemainingCommands(sessionCommands);
        return [
          { content: '', className: '' },
          { content: '┌─────────────────────────────────────────────────────┐', className: 'text-soft-red' },
          { content: '│              ACCESS DENIED - LOCKED                │', className: 'text-soft-red' },
          { content: '│              SECURITY PROTOCOL ACTIVE              │', className: 'text-soft-red' },
          { content: '└─────────────────────────────────────────────────────┘', className: 'text-soft-red' },
          { content: '', className: '' },
          { content: '🔒 CRITICAL: Identity verification requires complete system exploration', className: 'text-warning-yellow' },
          { content: '⚠️  OPSEC Protocol: No identity disclosure until full authentication', className: 'text-warning-yellow' },
          { content: '', className: '' },
          { content: 'Current Status:', className: 'text-muted-gray' },
          { content: `• Commands Explored: ${completedCmds.length}/11 required`, className: 'text-muted-gray' },
          { content: `• Authentication Level: ${Math.floor((completedCmds.length/11) * 100)}%`, className: 'text-muted-gray' },
          { content: `• Remaining Commands: ${11 - completedCmds.length}`, className: 'text-muted-gray' },
          { content: '', className: '' },
          { content: `<span class="text-terminal-green">Commands unlocked (${completedCmds.length}/11):</span>`, className: '' },
          ...completedCmds.map(cmd => ({ content: `  ✓ ${cmd}`, className: 'text-terminal-green' })),
          { content: '', className: '' },
          { content: `<span class="text-soft-red">Commands required (${remaining.length} remaining):</span>`, className: '' },
          ...remaining.map(cmd => ({ content: `  ✗ ${cmd}`, className: 'text-muted-gray' })),
          { content: '', className: '' },
          { content: 'Type "help" to see available commands for exploration.', className: 'text-muted-gray' },
        ];
      }

      return [
        { content: '', className: '' },
        { content: '┌─────────────────────────────────────────────────────┐', className: 'text-terminal-green' },
        { content: '│              IDENTITY REVELATION UNLOCKED           │', className: 'text-terminal-green' },
        { content: '└─────────────────────────────────────────────────────┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-neon-green glitch-text" data-text="CHOPSUEYY">CHOPSUEYY</span>', className: '' },
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
      if (!hasCompletedPrerequisites(sessionCommands)) {
        return [
          { content: '', className: '' },
          { content: '┌─────────────────────────────────────────────────────┐', className: 'text-soft-red' },
          { content: '│              MANIFESTO ACCESS DENIED                │', className: 'text-soft-red' },
          { content: '└─────────────────────────────────────────────────────┘', className: 'text-soft-red' },
          { content: '', className: '' },
          { content: '🔒 The manifesto is encrypted and requires authentication.', className: 'text-warning-yellow' },
          { content: '', className: '' },
          { content: 'Complete system exploration to unlock the digital insurgent\'s philosophy.', className: 'text-muted-gray' },
          { content: `Commands needed: ${11 - getUnlockedCommands(sessionCommands).length} remaining`, className: 'text-muted-gray' },
        ];
      }
      
      return [
        { content: '', className: '' },
        { content: `<pre class="text-neon-green">${getFiglet()}</pre>`, className: '' },
        { content: '', className: '' },
        { content: '<span class="text-neon-green">🧠 The Manifesto of CHOPSUEYY</span>', className: '' },
        { content: '', className: '' },
        { content: '"Code is language. Language is power. Power belongs to those who break the system to rebuild it better."', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'I am CHOPSUEYY — a digital insurgent, full-stack breaker and builder, and ghost in the machine.', className: 'text-terminal-green' },
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
        { content: '<span class="text-neon-green">🔧 CHOPSUEYY Technical Arsenal</span>', className: '' },
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
      if (!hasCompletedPrerequisites(sessionCommands)) {
        return [
          { content: '', className: '' },
          { content: '┌─────────────────────────────────────────────────────┐', className: 'text-soft-red' },
          { content: '│              TOOLSET ACCESS DENIED                  │', className: 'text-soft-red' },
          { content: '└─────────────────────────────────────────────────────┘', className: 'text-soft-red' },
          { content: '', className: '' },
          { content: '🔒 The arsenal is classified and requires clearance.', className: 'text-warning-yellow' },
          { content: '', className: '' },
          { content: 'Complete system exploration to unlock the hacker\'s toolkit.', className: 'text-muted-gray' },
          { content: `Commands needed: ${11 - getUnlockedCommands(sessionCommands).length} remaining`, className: 'text-muted-gray' },
        ];
      }
      
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
      if (!hasCompletedPrerequisites(sessionCommands)) {
        return [
          { content: '', className: '' },
          { content: '┌─────────────────────────────────────────────────────┐', className: 'text-soft-red' },
          { content: '│              PHILOSOPHY ACCESS DENIED               │', className: 'text-soft-red' },
          { content: '└─────────────────────────────────────────────────────┘', className: 'text-soft-red' },
          { content: '', className: '' },
          { content: '🔒 Core beliefs are protected and require verification.', className: 'text-warning-yellow' },
          { content: '', className: '' },
          { content: 'Complete system exploration to unlock the hacker\'s principles.', className: 'text-muted-gray' },
          { content: `Commands needed: ${11 - getUnlockedCommands(sessionCommands).length} remaining`, className: 'text-muted-gray' },
        ];
      }
      
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

    case 'cowthink':
      const thinkMessage = params.join(' ') || 'This might be a trap...';
      return [
        { content: `<pre class="text-terminal-green">${getCowthink(thinkMessage)}</pre>`, className: '' }
      ];

    case 'nyancat':
      return [
        { content: '', className: '' },
        { content: '🌈 NYAN CAT ACTIVATED! 🌈', className: 'text-neon-green' },
        { content: '', className: '' },
        { content: '         +      o     +              o   ', className: 'text-rainbow' },
        { content: '    +             o     +       +', className: 'text-rainbow' },
        { content: 'o          +', className: 'text-rainbow' },
        { content: '    o  +           +        +', className: 'text-rainbow' },
        { content: '+        o     o       +        o', className: 'text-rainbow' },
        { content: '-_-_-_-_-_-_-_,------,      o ', className: 'text-terminal-green' },
        { content: '_-_-_-_-_-_-_-|   /\\_/\\  ', className: 'text-terminal-green' },
        { content: '-_-_-_-_-_-_-~|__( ^ .^)  +     +  ', className: 'text-terminal-green' },
        { content: '_-_-_-_-_-_-_-_-_-\\ ___ ', className: 'text-terminal-green' },
        { content: '-_-_-_-_-_-_-____/     ', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'NYAN NYAN NYAN NYAN!', className: 'text-warning-yellow' },
      ];

    case 'sl':
      return [
        { content: '', className: '' },
        { content: '🚂 STEAM LOCOMOTIVE INCOMING! 🚂', className: 'text-neon-green' },
        { content: '', className: '' },
        { content: '                    (  ) (@@) ( )  (@)  ()    @@    O     @', className: 'text-terminal-green' },
        { content: '               (@@@)', className: 'text-terminal-green' },
        { content: '            (    )', className: 'text-terminal-green' },
        { content: '         ( @@@@@ )', className: 'text-terminal-green' },
        { content: '      ( @@@@@@@@@@ )', className: 'text-terminal-green' },
        { content: '   ====  @@@@@@@@@@@ )', className: 'text-terminal-green' },
        { content: '_/ ===  ===  ===  ===  === \\_', className: 'text-terminal-green' },
        { content: 'O   O   O   O   O   O   O   O', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'CHOO CHOO! All aboard the hacker train!', className: 'text-warning-yellow' },
      ];

    case 'pipes':
      return [
        { content: '', className: '' },
        { content: '🔧 PIPE SYSTEM ACTIVATED! 🔧', className: 'text-neon-green' },
        { content: '', className: '' },
        { content: '┌─┬─┐ ┌─┐ ┌─┬─┐ ┌─┬─┐', className: 'text-terminal-green' },
        { content: '│ │ │ │ │ │ │ │ │ │ │', className: 'text-terminal-green' },
        { content: '├─┤ └─┼─┘ ├─┤ └─┼─┤ │', className: 'text-terminal-green' },
        { content: '│ │   │   │ │   │ │ │', className: 'text-terminal-green' },
        { content: '│ └─┬─┘   │ └─┬─┘ │ │', className: 'text-terminal-green' },
        { content: '│   │     │   │   │ │', className: 'text-terminal-green' },
        { content: '└───┘     └───┘   └─┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Data flowing through the digital pipelines!', className: 'text-warning-yellow' },
      ];

    case 'asciiquarium':
      return [
        { content: '', className: '' },
        { content: '🐠 DIGITAL AQUARIUM ACTIVATED! 🐠', className: 'text-neon-green' },
        { content: '', className: '' },
        { content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', className: 'text-terminal-green' },
        { content: '     🐟        🐠      🐡        🦈', className: 'text-terminal-green' },
        { content: '  ><(((º>   <º)))><   °<)))><   ><((((°>', className: 'text-terminal-green' },
        { content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', className: 'text-terminal-green' },
        { content: '🌊     🐢         🦑       🐙     🌊', className: 'text-terminal-green' },
        { content: '  o-°-o       ~( )~     °)))°<    ', className: 'text-terminal-green' },
        { content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', className: 'text-terminal-green' },
        { content: '🪸      🐚       🦀        🌿    🪸', className: 'text-terminal-green' },
        { content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Welcome to the cyber ocean depths!', className: 'text-warning-yellow' },
      ];

    case 'lolcat':
      const lolMessage = params.join(' ') || 'RAINBOW HACKER TEXT!';
      return [
        { content: `<div class="text-terminal-green">${getLolcat(lolMessage)}</div>`, className: '' }
      ];

    case 'screenfetch':
      return [
        { content: getNeofetch(), className: '' }
      ];

    case 'btop':
      return [
        { content: '', className: '' },
        { content: '<span class="text-neon-green">Modern Resource Monitor</span>', className: '' },
        { content: '', className: '' },
        { content: 'CPU: ████████████████████░░ 85.2%', className: 'text-terminal-green' },
        { content: 'MEM: ██████████████░░░░░░░░ 68.4%', className: 'text-terminal-green' },
        { content: 'SWP: ████░░░░░░░░░░░░░░░░░░ 18.7%', className: 'text-terminal-green' },
        { content: 'NET: ▲ 1.2MB/s ▼ 800KB/s', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Top Processes:</span>', className: '' },
        { content: 'neural_hack_ai    45.2%', className: 'text-terminal-green' },
        { content: 'crypto_miner      23.1%', className: 'text-terminal-green' },
        { content: 'exploit_scanner   12.8%', className: 'text-terminal-green' }
      ];

    case 'cmatrix':
      setTimeout(() => {
        const matrixContainer = document.querySelector('.matrix-rain');
        if (matrixContainer) {
          for (let i = 0; i < 50; i++) {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
            char.style.left = Math.random() * 100 + '%';
            char.style.animationDuration = '4s';
            char.style.color = 'var(--neon-green)';
            char.style.fontSize = '16px';
            matrixContainer.appendChild(char);
            setTimeout(() => {
              if (char.parentNode) {
                char.parentNode.removeChild(char);
              }
            }, 4000);
          }
        }
      }, 100);
      return [
        { content: '<span class="text-neon-green">Digital rain activated...</span>', className: '' },
        { content: '<span class="text-terminal-green">The Matrix has you...</span>', className: '' }
      ];

    // Terminal Games
    case 'games':
      return [
        { content: '', className: '' },
        { content: '🎮 <span class="text-neon-green">TERMINAL GAMES ARCADE</span> 🎮', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Classic Games:</span>', className: '' },
        { content: '  snake       - Navigate the digital serpent', className: 'text-terminal-green' },
        { content: '  tetris      - Stack blocks like a pro', className: 'text-terminal-green' },
        { content: '  pong        - Retro paddle ball game', className: 'text-terminal-green' },
        { content: '  breakout    - Break through the firewall', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Word & Logic Games:</span>', className: '' },
        { content: '  hangman     - Guess the hacker term', className: 'text-terminal-green' },
        { content: '  riddle      - Solve cybersecurity puzzles', className: 'text-terminal-green' },
        { content: '  sudoku      - Number grid challenge', className: 'text-terminal-green' },
        { content: '  maze        - Navigate the digital labyrinth', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Casino & Chance:</span>', className: '' },
        { content: '  blackjack   - Beat the dealer at 21', className: 'text-terminal-green' },
        { content: '  slots       - Spin the cyber slots', className: 'text-terminal-green' },
        { content: '  dice        - Roll for digital fortune', className: 'text-terminal-green' },
        { content: '  coinflip    - Heads or tails binary choice', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-warning-yellow">Interactive:</span>', className: '' },
        { content: '  magic8      - Ask the oracle anything', className: 'text-terminal-green' },
        { content: '  nim         - Strategic stone removal', className: 'text-terminal-green' },
        { content: '  life        - Conway\'s Game of Life', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '<span class="text-muted-gray">Type any game name to start playing!</span>', className: '' },
      ];

    case 'snake':
      const snakeScore = Math.floor(Math.random() * 500);
      const snakeLength = Math.floor(snakeScore / 50) + 3;
      return [
        { content: '', className: '' },
        { content: '🐍 <span class="text-neon-green">CYBER SNAKE - INTERACTIVE MODE</span> 🐍', className: '' },
        { content: '', className: '' },
        { content: '┌────────────────────────────────────┐', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░░░░▲░░░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░██████░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │', className: 'text-terminal-green' },
        { content: '└────────────────────────────────────┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: `Score: ${snakeScore} | Length: ${snakeLength} | Level: ${Math.floor(snakeScore / 100) + 1}`, className: 'text-warning-yellow' },
        { content: '🎮 GAME ACTIVE - Use WASD to control!', className: 'text-neon-green' },
        { content: 'Snake moving UP ▲ - Eat food to grow!', className: 'text-muted-gray' },
        { content: 'Type "snake restart" to play again.', className: 'text-muted-gray' },
      ];

    case 'tetris':
      const tetrisScore = Math.floor(Math.random() * 10000);
      const tetrisLevel = Math.floor(tetrisScore / 1000) + 1;
      const tetrisLines = Math.floor(tetrisScore / 100);
      return [
        { content: '', className: '' },
        { content: '🧱 <span class="text-neon-green">CYBER TETRIS - ACTIVE GAME</span> 🧱', className: '' },
        { content: '', className: '' },
        { content: '┌──────────┐  ┌─────┐', className: 'text-terminal-green' },
        { content: '│    ▲     │  │ ██  │', className: 'text-terminal-green' },
        { content: '│   ███    │  │ ██  │', className: 'text-terminal-green' },
        { content: '│    █     │  └─────┘', className: 'text-terminal-green' },
        { content: '│          │', className: 'text-terminal-green' },
        { content: '│          │  Score:', className: 'text-terminal-green' },
        { content: '│    ██    │  ' + tetrisScore, className: 'text-terminal-green' },
        { content: '│    ██    │', className: 'text-terminal-green' },
        { content: '│          │  Level:', className: 'text-terminal-green' },
        { content: '│          │  ' + tetrisLevel, className: 'text-terminal-green' },
        { content: '│          │', className: 'text-terminal-green' },
        { content: '│          │  Lines:', className: 'text-terminal-green' },
        { content: '│    █████ │  ' + tetrisLines, className: 'text-terminal-green' },
        { content: '│██████████│', className: 'text-terminal-green' },
        { content: '│██████████│', className: 'text-terminal-green' },
        { content: '└──────────┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '🎮 T-piece falling! Use A/D rotate, S fast drop', className: 'text-neon-green' },
        { content: 'Line clear bonus: +400 points', className: 'text-warning-yellow' },
        { content: 'Type "tetris pause" to pause game.', className: 'text-muted-gray' },
      ];

    case 'hangman':
      const words = ['FIREWALL', 'ENCRYPTION', 'MALWARE', 'PHISHING', 'BACKDOOR', 'TROJAN', 'ROOTKIT', 'EXPLOIT', 'PAYLOAD', 'BOTNET'];
      const word = words[Math.floor(Math.random() * words.length)];
      const guessedLetters = ['E', 'T', 'A'];
      const wrongGuesses = Math.floor(Math.random() * 3);
      const display = word.split('').map(letter => 
        guessedLetters.includes(letter) ? letter : '_'
      ).join(' ');
      
      const hangmanStages = [
        ['  ┌───┐', '  │   │', '  │    ', '  │    ', '  │    ', '  │    ', '──┴──  '],
        ['  ┌───┐', '  │   │', '  │   O', '  │    ', '  │    ', '  │    ', '──┴──  '],
        ['  ┌───┐', '  │   │', '  │   O', '  │   |', '  │    ', '  │    ', '──┴──  '],
        ['  ┌───┐', '  │   │', '  │   O', '  │  /|', '  │    ', '  │    ', '──┴──  ']
      ];
      
      return [
        { content: '', className: '' },
        { content: '🎯 <span class="text-neon-green">CYBER HANGMAN - ACTIVE GAME</span> 🎯', className: '' },
        { content: '', className: '' },
        ...hangmanStages[wrongGuesses].map(line => ({ content: line, className: 'text-terminal-green' })),
        { content: '', className: '' },
        { content: `Word: ${display}`, className: 'text-warning-yellow' },
        { content: `Wrong guesses: ${wrongGuesses}/6`, className: wrongGuesses > 2 ? 'text-soft-red' : 'text-muted-gray' },
        { content: `Guessed letters: [${guessedLetters.join(', ')}]`, className: 'text-muted-gray' },
        { content: '', className: '' },
        { content: '🎮 Game in progress! Type a letter to guess.', className: 'text-neon-green' },
        { content: 'Category: Cybersecurity Terms', className: 'text-muted-gray' },
        { content: 'Type "hangman restart" for new word.', className: 'text-muted-gray' },
      ];

    case 'blackjack':
      const dealerCard = Math.floor(Math.random() * 10) + 1;
      const playerCard1 = Math.floor(Math.random() * 10) + 1;
      const playerCard2 = Math.floor(Math.random() * 10) + 1;
      const playerTotal = playerCard1 + playerCard2;
      const gameState = playerTotal === 21 ? 'BLACKJACK' : playerTotal > 16 ? 'RISKY' : 'SAFE';
      const dealerShowing = dealerCard;
      const winnings = Math.floor(Math.random() * 500) + 100;
      
      return [
        { content: '', className: '' },
        { content: '♠️ <span class="text-neon-green">CYBER BLACKJACK - LIVE GAME</span> ♠️', className: '' },
        { content: '', className: '' },
        { content: 'Dealer:', className: 'text-warning-yellow' },
        { content: `┌─────┐ ┌─────┐`, className: 'text-terminal-green' },
        { content: `│  ${dealerCard}  │ │ ??? │`, className: 'text-terminal-green' },
        { content: `│  ♠  │ │  ?  │`, className: 'text-terminal-green' },
        { content: `│  ${dealerCard}  │ │ ??? │`, className: 'text-terminal-green' },
        { content: `└─────┘ └─────┘`, className: 'text-terminal-green' },
        { content: `Showing: ${dealerCard} | Hidden: ???`, className: 'text-muted-gray' },
        { content: '', className: '' },
        { content: 'Player:', className: 'text-warning-yellow' },
        { content: `┌─────┐ ┌─────┐`, className: 'text-terminal-green' },
        { content: `│  ${playerCard1}  │ │  ${playerCard2}  │`, className: 'text-terminal-green' },
        { content: `│  ♥  │ │  ♦  │`, className: 'text-terminal-green' },
        { content: `│  ${playerCard1}  │ │  ${playerCard2}  │`, className: 'text-terminal-green' },
        { content: `└─────┘ └─────┘`, className: 'text-terminal-green' },
        { content: `Total: ${playerTotal} | Status: ${gameState}`, className: 'text-warning-yellow' },
        { content: `Bet: $${winnings} | House Edge: ${dealerShowing > 6 ? 'DEALER ADVANTAGE' : 'PLAYER ADVANTAGE'}`, className: 'text-muted-gray' },
        { content: '', className: '' },
        { content: playerTotal === 21 ? '🎉 BLACKJACK! Automatic win!' : '🎮 Your turn - Type "hit" or "stand"', className: playerTotal === 21 ? 'text-neon-green' : 'text-neon-green' },
        { content: 'Type "blackjack restart" for new hand.', className: 'text-muted-gray' },
      ];

    case 'dice':
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const total = dice1 + dice2;
      const diceArt: Record<number, string[]> = {
        1: ['┌─────┐', '│     │', '│  ●  │', '│     │', '└─────┘'],
        2: ['┌─────┐', '│ ●   │', '│     │', '│   ● │', '└─────┘'],
        3: ['┌─────┐', '│ ●   │', '│  ●  │', '│   ● │', '└─────┘'],
        4: ['┌─────┐', '│ ● ● │', '│     │', '│ ● ● │', '└─────┘'],
        5: ['┌─────┐', '│ ● ● │', '│  ●  │', '│ ● ● │', '└─────┘'],
        6: ['┌─────┐', '│ ● ● │', '│ ● ● │', '│ ● ● │', '└─────┘']
      };
      return [
        { content: '', className: '' },
        { content: '🎲 <span class="text-neon-green">CYBER DICE</span> 🎲', className: '' },
        { content: '', className: '' },
        { content: 'Rolling the dice...', className: 'text-warning-yellow' },
        { content: '', className: '' },
        { content: `${diceArt[dice1 as keyof typeof diceArt][0]}  ${diceArt[dice2 as keyof typeof diceArt][0]}`, className: 'text-terminal-green' },
        { content: `${diceArt[dice1 as keyof typeof diceArt][1]}  ${diceArt[dice2 as keyof typeof diceArt][1]}`, className: 'text-terminal-green' },
        { content: `${diceArt[dice1 as keyof typeof diceArt][2]}  ${diceArt[dice2 as keyof typeof diceArt][2]}`, className: 'text-terminal-green' },
        { content: `${diceArt[dice1 as keyof typeof diceArt][3]}  ${diceArt[dice2 as keyof typeof diceArt][3]}`, className: 'text-terminal-green' },
        { content: `${diceArt[dice1 as keyof typeof diceArt][4]}  ${diceArt[dice2 as keyof typeof diceArt][4]}`, className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: `Dice 1: ${dice1} | Dice 2: ${dice2} | Total: ${total}`, className: 'text-warning-yellow' },
        { content: total === 7 ? '🎉 Lucky seven!' : total === 12 ? '🎯 Snake eyes!' : total >= 10 ? '✨ High roll!' : '💭 Better luck next time!', className: 'text-neon-green' },
      ];

    case 'coinflip':
      const flip = Math.random() < 0.5 ? 'HEADS' : 'TAILS';
      return [
        { content: '', className: '' },
        { content: '🪙 <span class="text-neon-green">CYBER COIN FLIP</span> 🪙', className: '' },
        { content: '', className: '' },
        { content: 'Flipping coin...', className: 'text-warning-yellow' },
        { content: '', className: '' },
        { content: flip === 'HEADS' ? '     ┌─────────┐' : '     ┌─────────┐', className: 'text-terminal-green' },
        { content: flip === 'HEADS' ? '    ╱           ╲' : '    ╱           ╲', className: 'text-terminal-green' },
        { content: flip === 'HEADS' ? '   │    HEADS    │' : '   │    TAILS    │', className: 'text-terminal-green' },
        { content: flip === 'HEADS' ? '   │      👑      │' : '   │      🦅      │', className: 'text-terminal-green' },
        { content: flip === 'HEADS' ? '    ╲           ╱' : '    ╲           ╱', className: 'text-terminal-green' },
        { content: flip === 'HEADS' ? '     └─────────┘' : '     └─────────┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: `Result: ${flip}`, className: 'text-warning-yellow' },
        { content: 'The binary choice has been made!', className: 'text-muted-gray' },
      ];

    case 'magic8':
      const responses = [
        'It is certain', 'Without a doubt', 'Yes definitely', 'You may rely on it',
        'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes',
        'Reply hazy, try again', 'Ask again later', 'Better not tell you now',
        'Cannot predict now', 'Concentrate and ask again',
        'Don\'t count on it', 'My reply is no', 'My sources say no',
        'Outlook not so good', 'Very doubtful'
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      return [
        { content: '', className: '' },
        { content: '🔮 <span class="text-neon-green">CYBER MAGIC 8-BALL</span> 🔮', className: '' },
        { content: '', className: '' },
        { content: '        ╭─────────────╮', className: 'text-terminal-green' },
        { content: '      ╱               ╲', className: 'text-terminal-green' },
        { content: '     ╱                 ╲', className: 'text-terminal-green' },
        { content: '    │     ┌─────────┐   │', className: 'text-terminal-green' },
        { content: '    │     │    8    │   │', className: 'text-terminal-green' },
        { content: '    │     └─────────┘   │', className: 'text-terminal-green' },
        { content: '     ╲                 ╱', className: 'text-terminal-green' },
        { content: '      ╲               ╱', className: 'text-terminal-green' },
        { content: '        ╰─────────────╯', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '🔮 The oracle speaks:', className: 'text-warning-yellow' },
        { content: `"${response}"`, className: 'text-neon-green' },
        { content: '', className: '' },
        { content: 'Ask another question anytime!', className: 'text-muted-gray' },
      ];

    case 'riddle':
      const riddles = [
        { q: 'I protect your data but can be cracked, what am I?', a: 'Password' },
        { q: 'I hide your identity while browsing the net, what am I?', a: 'VPN' },
        { q: 'I encrypt data but need a key, what am I?', a: 'Cipher' },
        { q: 'I detect threats but can be bypassed, what am I?', a: 'Firewall' },
        { q: 'I verify you are who you claim to be, what am I?', a: 'Authentication' }
      ];
      const riddle = riddles[Math.floor(Math.random() * riddles.length)];
      return [
        { content: '', className: '' },
        { content: '🧩 <span class="text-neon-green">CYBER RIDDLE</span> 🧩', className: '' },
        { content: '', className: '' },
        { content: '🤔 Riddle me this:', className: 'text-warning-yellow' },
        { content: '', className: '' },
        { content: `"${riddle.q}"`, className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Type your answer to check if you\'re correct!', className: 'text-muted-gray' },
        { content: '(Hint: It\'s a cybersecurity term)', className: 'text-muted-gray' },
      ];

    case 'slots':
      const symbols = ['🍒', '🍋', '⭐', '💎', '🔔', '💰', '⚡', '🎯'];
      const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
      const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
      const reel3 = symbols[Math.floor(Math.random() * symbols.length)];
      const isWin = reel1 === reel2 && reel2 === reel3;
      const isPartial = reel1 === reel2 || reel2 === reel3 || reel1 === reel3;
      return [
        { content: '', className: '' },
        { content: '🎰 <span class="text-neon-green">CYBER SLOTS</span> 🎰', className: '' },
        { content: '', className: '' },
        { content: '┌─────┬─────┬─────┐', className: 'text-terminal-green' },
        { content: '│     │     │     │', className: 'text-terminal-green' },
        { content: `│  ${reel1}  │  ${reel2}  │  ${reel3}  │`, className: 'text-terminal-green' },
        { content: '│     │     │     │', className: 'text-terminal-green' },
        { content: '└─────┴─────┴─────┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: isWin ? '🎉 JACKPOT! Triple match!' : isPartial ? '⚡ Partial match!' : '💔 No match, try again!', className: isWin ? 'text-neon-green' : isPartial ? 'text-warning-yellow' : 'text-soft-red' },
        { content: isWin ? 'Payout: 1000 credits!' : isPartial ? 'Payout: 50 credits!' : 'Better luck next time!', className: 'text-muted-gray' },
      ];

    case 'maze':
      return [
        { content: '', className: '' },
        { content: '🗺️ <span class="text-neon-green">DIGITAL MAZE</span> 🗺️', className: '' },
        { content: '', className: '' },
        { content: '┌─────────────────────────────────────┐', className: 'text-terminal-green' },
        { content: '│S█ █   █   █       █   █   █       E│', className: 'text-terminal-green' },
        { content: '│ █ █ █ █ █ █ █████ █ █ █ █ █ █████ █│', className: 'text-terminal-green' },
        { content: '│   █   █   █       █   █   █       █│', className: 'text-terminal-green' },
        { content: '│ █████████████████████████████████ █│', className: 'text-terminal-green' },
        { content: '│   █       █       █       █       █│', className: 'text-terminal-green' },
        { content: '│ █ █ █████ █ █████ █ █████ █ █████ █│', className: 'text-terminal-green' },
        { content: '│ █   █     █   █   █   █   █   █   █│', className: 'text-terminal-green' },
        { content: '│ █████ █████ █ █ █████ █ █████ █ ███│', className: 'text-terminal-green' },
        { content: '│       █     █   █     █       █   █│', className: 'text-terminal-green' },
        { content: '└─────────────────────────────────────┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Navigate from S (Start) to E (Exit)', className: 'text-warning-yellow' },
        { content: 'Use WASD keys to move through the maze!', className: 'text-muted-gray' },
      ];

    case 'pong':
      return [
        { content: '', className: '' },
        { content: '🏓 <span class="text-neon-green">CYBER PONG</span> 🏓', className: '' },
        { content: '', className: '' },
        { content: '┌────────────────────────────────────┐', className: 'text-terminal-green' },
        { content: '│ ●                               ║  │', className: 'text-terminal-green' },
        { content: '│                                 ║  │', className: 'text-terminal-green' },
        { content: '│                                 ║  │', className: 'text-terminal-green' },
        { content: '│                                 ║  │', className: 'text-terminal-green' },
        { content: '│                                 ║  │', className: 'text-terminal-green' },
        { content: '│                                 ║  │', className: 'text-terminal-green' },
        { content: '│                                 ║  │', className: 'text-terminal-green' },
        { content: '│  ║                              ║  │', className: 'text-terminal-green' },
        { content: '│  ║                              ║  │', className: 'text-terminal-green' },
        { content: '│  ║                              ║  │', className: 'text-terminal-green' },
        { content: '└────────────────────────────────────┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Player 1: 0 | Player 2: 0', className: 'text-warning-yellow' },
        { content: 'Use W/S keys to move your paddle!', className: 'text-muted-gray' },
      ];

    case 'breakout':
      return [
        { content: '', className: '' },
        { content: '🧱 <span class="text-neon-green">CYBER BREAKOUT</span> 🧱', className: '' },
        { content: '', className: '' },
        { content: '┌────────────────────────────────────┐', className: 'text-terminal-green' },
        { content: '│████████████████████████████████████│', className: 'text-terminal-green' },
        { content: '│████████████████████████████████████│', className: 'text-terminal-green' },
        { content: '│████████████████████████████████████│', className: 'text-terminal-green' },
        { content: '│                                    │', className: 'text-terminal-green' },
        { content: '│                                    │', className: 'text-terminal-green' },
        { content: '│               ●                    │', className: 'text-terminal-green' },
        { content: '│                                    │', className: 'text-terminal-green' },
        { content: '│                                    │', className: 'text-terminal-green' },
        { content: '│                                    │', className: 'text-terminal-green' },
        { content: '│            ═══════                 │', className: 'text-terminal-green' },
        { content: '└────────────────────────────────────┘', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Score: 0 | Lives: 3 | Blocks: 96', className: 'text-warning-yellow' },
        { content: 'Use A/D keys to move the paddle!', className: 'text-muted-gray' },
        { content: 'Break through the firewall!', className: 'text-muted-gray' },
      ];

    case 'nim':
      const piles = [7, 5, 3];
      return [
        { content: '', className: '' },
        { content: '🪨 <span class="text-neon-green">DIGITAL NIM</span> 🪨', className: '' },
        { content: '', className: '' },
        { content: 'Strategic stone removal game', className: 'text-warning-yellow' },
        { content: '', className: '' },
        { content: 'Pile 1: ● ● ● ● ● ● ●', className: 'text-terminal-green' },
        { content: 'Pile 2: ● ● ● ● ●', className: 'text-terminal-green' },
        { content: 'Pile 3: ● ● ●', className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Rules:', className: 'text-warning-yellow' },
        { content: '• Take any number of stones from a single pile', className: 'text-muted-gray' },
        { content: '• Player who takes the last stone loses!', className: 'text-muted-gray' },
        { content: '• Type "nim 1 3" to take 3 stones from pile 1', className: 'text-muted-gray' },
      ];

    case 'life':
      const pattern = [
        '░░░░░░░░░░░░░░░░░░░░',
        '░░░░░░░░░░░░░░░░░░░░',
        '░░░░░██░░░░░░░░░░░░░',
        '░░░░██░░░░░░░░░░░░░░',
        '░░░░░██░░░░░░░░░░░░░',
        '░░░░░░░░░░░░░░░░░░░░',
        '░░░░░░░░░░░░░░░░░░░░',
        '░░░░░░░░░██░░░░░░░░░',
        '░░░░░░░██░█░░░░░░░░░',
        '░░░░░░░░░██░░░░░░░░░',
        '░░░░░░░░░░░░░░░░░░░░',
        '░░░░░░░░░░░░░░░░░░░░',
      ];
      return [
        { content: '', className: '' },
        { content: '🧬 <span class="text-neon-green">CONWAY\'S GAME OF LIFE</span> 🧬', className: '' },
        { content: '', className: '' },
        { content: 'Generation: 0', className: 'text-warning-yellow' },
        { content: '', className: '' },
        ...pattern.map(line => ({ content: line, className: 'text-terminal-green' })),
        { content: '', className: '' },
        { content: 'Cellular automaton simulation', className: 'text-muted-gray' },
        { content: 'Watch life evolve according to simple rules!', className: 'text-muted-gray' },
      ];

    case 'sudoku':
      const sudokuGrid = [
        '5 3 _ | _ 7 _ | _ _ _',
        '6 _ _ | 1 9 5 | _ _ _',
        '_ 9 8 | _ _ _ | _ 6 _',
        '------+-------+------',
        '8 _ _ | _ 6 _ | _ _ 3',
        '4 _ _ | 8 _ 3 | _ _ 1',
        '7 _ _ | _ 2 _ | _ _ 6',
        '------+-------+------',
        '_ 6 _ | _ _ _ | 2 8 _',
        '_ _ _ | 4 1 9 | _ _ 5',
        '_ _ _ | _ 8 _ | _ 7 9'
      ];
      return [
        { content: '', className: '' },
        { content: '🔢 <span class="text-neon-green">CYBER SUDOKU</span> 🔢', className: '' },
        { content: '', className: '' },
        ...sudokuGrid.map(line => ({ content: line, className: 'text-terminal-green' })),
        { content: '', className: '' },
        { content: 'Fill the grid with digits 1-9', className: 'text-warning-yellow' },
        { content: 'Each row, column, and 3x3 box must contain all digits!', className: 'text-muted-gray' },
      ];

    case 'factor':
      const originalNum = Math.floor(Math.random() * 900) + 100;
      let num = originalNum;
      const factors = [];
      for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
          factors.push(i);
          num = Math.floor(num / i);
        }
      }
      return [
        { content: '', className: '' },
        { content: '🔢 <span class="text-neon-green">PRIME FACTORIZATION</span> 🔢', className: '' },
        { content: '', className: '' },
        { content: `Number: ${originalNum}`, className: 'text-warning-yellow' },
        { content: `Prime factors: ${factors.join(' × ')}`, className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Breaking numbers down to their prime components!', className: 'text-muted-gray' },
      ];

    case 'banner':
      // Security: Lock banner command until authentication complete
      if (!hasCompletedPrerequisites(sessionCommands)) {
        return [
          { content: '', className: '' },
          { content: '┌─────────────────────────────────────────────────────┐', className: 'text-soft-red' },
          { content: '│               BANNER ACCESS DENIED                  │', className: 'text-soft-red' },
          { content: '└─────────────────────────────────────────────────────┘', className: 'text-soft-red' },
          { content: '', className: '' },
          { content: '🔒 Banner functionality requires system authentication.', className: 'text-warning-yellow' },
          { content: '', className: '' },
          { content: 'Complete system exploration to unlock banner tools.', className: 'text-muted-gray' },
          { content: `Commands needed: ${11 - getUnlockedCommands(sessionCommands).length} remaining`, className: 'text-muted-gray' },
        ];
      }
      
      const bannerText = params.join(' ') || 'CHOPSUEYY';
      return [
        { content: '', className: '' },
        { content: '🏴 <span class="text-neon-green">DIGITAL BANNER</span> 🏴', className: '' },
        { content: '', className: '' },
        { content: `<pre class="text-warning-yellow">${getFiglet(bannerText)}</pre>`, className: '' },
      ];

    case 'yes':
      return [
        { content: '', className: '' },
        { content: '⚡ <span class="text-neon-green">INFINITE YES</span> ⚡', className: '' },
        { content: '', className: '' },
        { content: 'y', className: 'text-terminal-green' },
        { content: 'y', className: 'text-terminal-green' },
        { content: 'y', className: 'text-terminal-green' },
        { content: 'y', className: 'text-terminal-green' },
        { content: 'y', className: 'text-terminal-green' },
        { content: '...', className: 'text-muted-gray' },
        { content: 'Infinite stream of "y" (interrupted for sanity)', className: 'text-muted-gray' },
      ];

    case 'rev':
      const textToReverse = params.join(' ') || 'CYBER HACKER';
      return [
        { content: '', className: '' },
        { content: '🔄 <span class="text-neon-green">TEXT REVERSER</span> 🔄', className: '' },
        { content: '', className: '' },
        { content: `Original: ${textToReverse}`, className: 'text-warning-yellow' },
        { content: `Reversed: ${textToReverse.split('').reverse().join('')}`, className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Mirror mirror on the wall...', className: 'text-muted-gray' },
      ];

    case 'figlet':
      // Security: Lock figlet until authentication complete to prevent identity leaks
      if (!hasCompletedPrerequisites(sessionCommands)) {
        return [
          { content: '', className: '' },
          { content: '┌─────────────────────────────────────────────────────┐', className: 'text-soft-red' },
          { content: '│               FIGLET ACCESS DENIED                  │', className: 'text-soft-red' },
          { content: '└─────────────────────────────────────────────────────┘', className: 'text-soft-red' },
          { content: '', className: '' },
          { content: '🔒 ASCII art generation requires system authentication.', className: 'text-warning-yellow' },
          { content: '', className: '' },
          { content: 'Complete system exploration to unlock figlet tools.', className: 'text-muted-gray' },
          { content: `Commands needed: ${11 - getUnlockedCommands(sessionCommands).length} remaining`, className: 'text-muted-gray' },
        ];
      }
      
      const figletText = params.join(' ') || "CHOPSUEYY";
      return [
        { content: `<pre class="text-neon-green">${getFiglet(figletText)}</pre>`, className: '' }
      ];

    case 'parrot':
      return [
        { content: '', className: '' },
        { content: '<div class="text-neon-green">', className: '' },
        { content: '                 🦜 PARTY PARROT ACTIVATED! 🦜', className: 'text-neon-green' },
        { content: '                 ████████████████████████████████', className: 'text-warning-yellow' },
        { content: '                 ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██', className: 'text-warning-yellow' },
        { content: '                 ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██', className: 'text-warning-yellow' },
        { content: '                 ██▒▒▒███████████▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒██', className: 'text-warning-yellow' },
        { content: '                 █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒████████▒▒▒▒▒▒▒██', className: 'text-warning-yellow' },
        { content: '                 ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██', className: 'text-warning-yellow' },
        { content: '                 ░█▒▒▒███████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██', className: 'text-warning-yellow' },
        { content: '                 ░██▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█', className: 'text-warning-yellow' },
        { content: '                 ░░████████████░░░█████████████████', className: 'text-warning-yellow' },
        { content: '</div>', className: '' }
      ];

    case 'matrix':
      // Add temporary matrix effect
      setTimeout(() => {
        const matrixContainer = document.querySelector('.matrix-rain');
        if (matrixContainer) {
          for (let i = 0; i < 30; i++) {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = Math.random() > 0.5 ? '1' : '0';
            char.style.left = Math.random() * 100 + '%';
            char.style.animationDuration = '3s';
            char.style.color = 'var(--neon-green)';
            matrixContainer.appendChild(char);
            setTimeout(() => {
              if (char.parentNode) {
                char.parentNode.removeChild(char);
              }
            }, 3000);
          }
        }
      }, 100);
      return await animateMatrixHack();

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



    case 'toilet':
      // Security: Lock toilet until authentication complete
      if (!hasCompletedPrerequisites(sessionCommands)) {
        return [
          { content: '', className: '' },
          { content: '┌─────────────────────────────────────────────────────┐', className: 'text-soft-red' },
          { content: '│               TOILET ACCESS DENIED                  │', className: 'text-soft-red' },
          { content: '└─────────────────────────────────────────────────────┘', className: 'text-soft-red' },
          { content: '', className: '' },
          { content: '🔒 Toilet ASCII art requires system authentication.', className: 'text-warning-yellow' },
          { content: '', className: '' },
          { content: 'Complete system exploration to unlock toilet tools.', className: 'text-muted-gray' },
          { content: `Commands needed: ${11 - getUnlockedCommands(sessionCommands).length} remaining`, className: 'text-muted-gray' },
        ];
      }
      
      const toiletText = params.join(' ') || "CHOPSUEYY";
      return [
        { content: `<pre class="text-warning-yellow">${getToilet(toiletText)}</pre>`, className: '' }
      ];

    case 'nmap':
      const target = params[0] || 'target.example.com';
      return await animateNmapScan(target);

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
      const authenticated = hasCompletedPrerequisites(sessionCommands);
      const completedCommands = getUnlockedCommands(sessionCommands);
      const userDisplay = authenticated ? 'chopsueyy' : 'guest';
      const groupDisplay = authenticated ? 'chopsueyy' : 'system';
      
      return [
        { content: '', className: '' },
        { content: `<span class="text-warning-yellow">total ${authenticated ? '28' : '24'}</span>`, className: '' },
        { content: `${authenticated ? '-rw-r--r--' : '----------'} 1 ${userDisplay} ${groupDisplay} 1337 Dec 08 15:30 <span class="${authenticated ? 'text-terminal-green' : 'text-soft-red'}">manifesto.txt</span> ${authenticated ? '' : '🔒'}`, className: '' },
        { content: `${authenticated ? '-rw-r--r--' : '----------'} 1 ${userDisplay} ${groupDisplay}  892 Dec 08 15:30 <span class="${authenticated ? 'text-terminal-green' : 'text-soft-red'}">tools.txt</span> ${authenticated ? '' : '🔒'}`, className: '' },
        { content: `${authenticated ? '-rw-r--r--' : '----------'} 1 ${userDisplay} ${groupDisplay}  456 Dec 08 15:30 <span class="${authenticated ? 'text-terminal-green' : 'text-soft-red'}">beliefs.txt</span> ${authenticated ? '' : '🔒'}`, className: '' },
        { content: `-rw-r--r-- 1 ${userDisplay} ${groupDisplay}  724 Dec 08 15:30 <span class="text-terminal-green">readme.txt</span>`, className: '' },
        { content: `-rw-r--r-- 1 ${userDisplay} ${groupDisplay}  542 Dec 08 15:30 <span class="text-terminal-green">version.txt</span>`, className: '' },
        { content: `drwxr-xr-x 2 ${userDisplay} ${groupDisplay} 4096 Dec 08 15:30 <span class="text-neon-green">exploits/</span>`, className: '' },
        { content: `drwxr-xr-x 2 ${userDisplay} ${groupDisplay} 4096 Dec 08 15:30 <span class="text-neon-green">projects/</span>`, className: '' },
        { content: `-rwxr-xr-x 1 ${userDisplay} ${groupDisplay} 2048 Dec 08 15:30 <span class="text-soft-red">hack.sh</span>`, className: '' },
        { content: '', className: '' },
        { content: `<span class="text-muted-gray">Authentication Status: ${authenticated ? 'VERIFIED' : 'GUEST'} | Commands Explored: ${completedCommands.length}/11</span>`, className: '' }
      ];

    case 'cat':
      const filename = params[0];
      if (!filename) {
        return [
          { content: '<span class="text-soft-red">Usage: cat <filename></span>', className: '' }
        ];
      }
      
      // Security: Validate filename to prevent path traversal
      const safeFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '');
      if (safeFilename !== filename) {
        return [
          { content: '<span class="text-soft-red">Invalid filename. Only alphanumeric characters, dots, hyphens, and underscores allowed.</span>', className: '' }
        ];
      }
      
      // Check if user has completed prerequisites for locked files
      const isAuthenticated = hasCompletedPrerequisites(sessionCommands);
      
      if (fileSystem['~'] && fileSystem['~'][safeFilename]) {
        // If file is locked and user isn't authenticated, show locked content
        if (!isAuthenticated && (safeFilename === 'manifesto.txt' || safeFilename === 'tools.txt' || safeFilename === 'beliefs.txt')) {
          return [
            { content: `<pre class="text-soft-red">${fileSystem['~'][safeFilename]}</pre>`, className: '' }
          ];
        }
        // If authenticated and file has unlocked version, show unlocked content
        else if (isAuthenticated && unlockedFiles[safeFilename]) {
          return [
            { content: `<pre class="text-terminal-green">${unlockedFiles[safeFilename]}</pre>`, className: '' }
          ];
        }
        // Show regular file content
        else {
          return [
            { content: `<pre class="text-terminal-green">${fileSystem['~'][safeFilename]}</pre>`, className: '' }
          ];
        }
      } else {
        return [
          { content: `<span class="text-soft-red">cat: ${safeFilename}: No such file or directory</span>`, className: '' }
        ];
      }

    case 'pwd':
      const authStatus = hasCompletedPrerequisites(sessionCommands);
      const currentUser = authStatus ? 'chopsueyy' : 'guest';
      return [
        { content: `<span class="text-terminal-green">/home/${currentUser}</span>`, className: '' }
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
        { content: ` 1337  ${hasCompletedPrerequisites(sessionCommands) ? 'chopsueyy' : 'guest  '}  45.2  12.8  ./neural_network_trainer`, className: 'text-terminal-green' },
        { content: ` 1338  ${hasCompletedPrerequisites(sessionCommands) ? 'chopsueyy' : 'guest  '}  15.4   8.3  burpsuite`, className: 'text-terminal-green' },
        { content: ` 1339  ${hasCompletedPrerequisites(sessionCommands) ? 'chopsueyy' : 'guest  '}  12.1   6.7  wireshark`, className: 'text-terminal-green' },
        { content: ` 1340  ${hasCompletedPrerequisites(sessionCommands) ? 'chopsueyy' : 'guest  '}  8.9    4.2  python3 blockchain_analyzer.py`, className: 'text-terminal-green' }
      ];

    case 'neofetch':
      // Security: Lock neofetch until authentication complete
      if (!hasCompletedPrerequisites(sessionCommands)) {
        return [
          { content: '', className: '' },
          { content: getNeofetch(), className: '' },
          { content: '', className: '' },
          { content: '<span class="text-muted-gray">System information fetched from secure terminal</span>', className: '' },
          { content: '<span class="text-soft-red">🔒 Full system details require authentication</span>', className: '' }
        ];
      }
      
      // Authenticated version with full details
      return [
        { content: '', className: '' },
        { content: getNeofetch().replace('[CLASSIFIED]', 'CHOPSUEYY'), className: '' },
        { content: '', className: '' },
        { content: '<span class="text-muted-gray">System information fetched from secure terminal</span>', className: '' }
      ];

    case 'clear':
      // This is handled by the Terminal component
      return [];

    case 'status':
      const statusAuthCheck = hasCompletedPrerequisites(sessionCommands);
      const exploredCommands = getUnlockedCommands(sessionCommands);
      const progress = Math.floor((exploredCommands.length / 11) * 100);
      
      return [
        { content: '', className: '' },
        { content: '📊 <span class="text-neon-green">SYSTEM STATUS REPORT</span> 📊', className: '' },
        { content: '', className: '' },
        { content: `<span class="text-warning-yellow">Authentication Level:</span> ${statusAuthCheck ? 'VERIFIED ✓' : 'GUEST 🔒'}`, className: '' },
        { content: `<span class="text-warning-yellow">Exploration Progress:</span> ${exploredCommands.length}/11 commands (${progress}%)`, className: '' },
        { content: `<span class="text-warning-yellow">Identity Status:</span> ${statusAuthCheck ? 'CHOPSUEYY - REVEALED' : 'CONCEALED'}`, className: '' },
        { content: `<span class="text-warning-yellow">System Access:</span> ${statusAuthCheck ? 'FULL ARSENAL UNLOCKED' : 'LIMITED ACCESS'}`, className: '' },
        { content: '', className: '' },
        { content: '<span class="text-terminal-green">Commands Explored:</span>', className: '' },
        ...exploredCommands.map(cmd => ({ content: `  ✓ ${cmd}`, className: 'text-terminal-green' })),
        { content: '', className: '' },
        statusAuthCheck ? 
          { content: '<span class="text-terminal-green">🎉 All systems operational. Welcome back, CHOPSUEYY.</span>', className: '' } :
          { content: `<span class="text-warning-yellow">⚡ Continue exploring to unlock ${11 - exploredCommands.length} more commands for full access!</span>`, className: '' }
      ];

    case 'quote':
      const quotes = [
        "Code is language. Language is power. Power belongs to those who break the system to rebuild it better.",
        "Every system can be understood. Every lock was made to be tested.",
        "In the digital realm, knowledge is power, and power shared responsibly builds a better tomorrow.",
        "The stories of the oppressed must be told — in plaintext, JSON, and code.",
        "If you can't own it, you can't trust it. If you can't read it, you shouldn't run it.",
        "My firewall is my purpose. My proxy is truth. My payload is justice."
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      return [
        { content: '', className: '' },
        { content: '💭 <span class="text-neon-green">DIGITAL WISDOM</span> 💭', className: '' },
        { content: '', className: '' },
        { content: `"${randomQuote}"`, className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: '- CHOPSUEYY, Digital Insurgent', className: 'text-muted-gray' },
      ];

    case 'joke':
      const jokes = [
        "Why do hackers prefer dark mode? Because light attracts bugs! 🐛",
        "How many programmers does it take to change a light bulb? None. It's a hardware problem.",
        "Why do SQL queries cry? Because they have too many joins! 😭",
        "What's a hacker's favorite type of music? Heavy metal... and Python! 🐍",
        "Why don't hackers ever get lost? They always know their way around the net! 🕸️",
        "What do you call a programmer from Finland? Nerdic! 🇫🇮"
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      
      return [
        { content: '', className: '' },
        { content: '😂 <span class="text-neon-green">TERMINAL HUMOR</span> 😂', className: '' },
        { content: '', className: '' },
        { content: randomJoke, className: 'text-terminal-green' },
      ];

    case 'encrypt':
      const textToEncrypt = params.join(' ') || 'CHOPSUEYY';
      const encrypted = btoa(textToEncrypt);
      
      return [
        { content: '', className: '' },
        { content: '🔐 <span class="text-neon-green">ENCRYPTION MODULE</span> 🔐', className: '' },
        { content: '', className: '' },
        { content: `<span class="text-warning-yellow">Original:</span> ${textToEncrypt}`, className: '' },
        { content: `<span class="text-warning-yellow">Base64:</span> ${encrypted}`, className: 'text-terminal-green' },
        { content: '', className: '' },
        { content: 'Use "decode <encrypted_text>" to decrypt', className: 'text-muted-gray' },
      ];

    case 'decode':
      const textToDecode = params.join(' ');
      if (!textToDecode) {
        return [
          { content: '<span class="text-soft-red">Usage: decode <base64_text></span>', className: '' }
        ];
      }
      
      try {
        const decoded = atob(textToDecode);
        return [
          { content: '', className: '' },
          { content: '🔓 <span class="text-neon-green">DECRYPTION MODULE</span> 🔓', className: '' },
          { content: '', className: '' },
          { content: `<span class="text-warning-yellow">Encrypted:</span> ${textToDecode}`, className: '' },
          { content: `<span class="text-warning-yellow">Decoded:</span> ${decoded}`, className: 'text-terminal-green' },
        ];
      } catch (error) {
        return [
          { content: '<span class="text-soft-red">❌ Invalid Base64 encoding</span>', className: '' }
        ];
      }

    case 'sudo':
      // Rick roll redirect
      setTimeout(() => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      }, 2000);
      
      return [
        { content: '', className: '' },
        { content: '<span class="text-soft-red">sudo: Permission denied</span>', className: '' },
        { content: '<span class="text-warning-yellow">Security violation detected!</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-neon-green">🎵 Initiating security protocol... 🎵</span>', className: '' },
        { content: '', className: '' },
        { content: '<span class="text-muted-gray">You just got Rick Rolled! Opening YouTube...</span>', className: '' },
        { content: '<span class="text-muted-gray">Never gonna give you up, never gonna let you down! 🕺</span>', className: '' }
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
