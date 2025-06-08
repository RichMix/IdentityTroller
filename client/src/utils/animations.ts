interface TerminalLine {
  content: string;
  className?: string;
}

export async function animateTypewriter(text: string, delay: number = 30): Promise<string> {
  return new Promise((resolve) => {
    let output = '';
    let i = 0;
    
    const typeChar = () => {
      if (i < text.length) {
        output += text[i];
        i++;
        setTimeout(typeChar, delay);
      } else {
        resolve(output);
      }
    };
    
    typeChar();
  });
}

export async function animateProgress(duration: number = 3000): Promise<TerminalLine[]> {
  return new Promise((resolve) => {
    const frames = ['█', '██', '███', '████', '█████', '██████', '███████', '████████', '█████████', '██████████'];
    const lines: TerminalLine[] = [];
    let currentFrame = 0;
    
    const updateProgress = () => {
      if (currentFrame < frames.length) {
        lines.push({
          content: `Progress: [${frames[currentFrame]}${' '.repeat(10 - frames[currentFrame].length)}] ${((currentFrame + 1) * 10)}%`,
          className: 'text-terminal-green'
        });
        currentFrame++;
        setTimeout(updateProgress, duration / frames.length);
      } else {
        lines.push({
          content: 'Complete!',
          className: 'text-neon-green'
        });
        resolve(lines);
      }
    };
    
    updateProgress();
  });
}

export async function animateMatrixHack(): Promise<TerminalLine[]> {
  const sequences = [
    'Initializing neural interface...',
    'Connecting to mainframe...',
    'Bypassing security protocols...',
    'Accessing data streams...',
    'Decrypting quantum encryption...',
    'Uploading consciousness...',
    'Integration complete.'
  ];
  
  const lines: TerminalLine[] = [];
  
  for (let i = 0; i < sequences.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 800));
    lines.push({
      content: `<span class="text-neon-green">[${String(i + 1).padStart(2, '0')}]</span> ${sequences[i]}`,
      className: ''
    });
  }
  
  lines.push({
    content: '<span class="text-neon-green">🔮 You are now in the Matrix. Welcome to reality.</span>',
    className: ''
  });
  
  return lines;
}

export async function animateNmapScan(target: string): Promise<TerminalLine[]> {
  const ports = [22, 80, 443, 8080, 3389, 5432, 27017, 6379, 9200, 3306];
  const lines: TerminalLine[] = [
    { content: '', className: '' },
    { content: `<span class="text-neon-green">Starting Nmap scan on ${target}</span>`, className: '' },
    { content: '', className: '' }
  ];
  
  for (const port of ports) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const status = Math.random() > 0.3 ? 'open' : 'closed';
    const service = getServiceName(port);
    const statusClass = status === 'open' ? 'text-terminal-green' : 'text-muted-gray';
    
    lines.push({
      content: `<span class="${statusClass}">${port}/tcp ${status.padEnd(8)} ${service}</span>`,
      className: ''
    });
  }
  
  lines.push({ content: '', className: '' });
  lines.push({
    content: '<span class="text-warning-yellow">Scan complete. Target reconnaissance finished.</span>',
    className: ''
  });
  
  return lines;
}

function getServiceName(port: number): string {
  const services: Record<number, string> = {
    22: 'ssh',
    80: 'http',
    443: 'https',
    8080: 'http-proxy',
    3389: 'rdp',
    5432: 'postgresql',
    27017: 'mongodb',
    6379: 'redis',
    9200: 'elasticsearch',
    3306: 'mysql'
  };
  
  return services[port] || 'unknown';
}

export async function animateLoadingSequence(steps: string[]): Promise<TerminalLine[]> {
  const lines: TerminalLine[] = [];
  
  for (let i = 0; i < steps.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 600));
    lines.push({
      content: `<span class="text-warning-yellow">[${String(i + 1).padStart(2, '0')}]</span> ${steps[i]}`,
      className: ''
    });
    
    // Add loading dots
    await new Promise(resolve => setTimeout(resolve, 300));
    lines.push({
      content: `<span class="text-muted-gray">   ${'█'.repeat(Math.floor((i + 1) / steps.length * 20))}</span>`,
      className: ''
    });
  }
  
  return lines;
}