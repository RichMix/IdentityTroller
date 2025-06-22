import { useState, useEffect, useRef } from 'react';
import { processCommand } from '../utils/commandProcessor';
import { createMatrixRain } from '../utils/matrixRain';

interface TerminalLine {
  content: string;
  className?: string;
}

// Session state for command tracking
let sessionCommands = new Set<string>();
let sessionStartTime = Date.now();

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<TerminalLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBootComplete, setIsBootComplete] = useState(false);
  const [tabSuggestions, setTabSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  // Available commands for tab completion
  const availableCommands = [
    'help', 'ls', 'pwd', 'cat', 'clear', 'whoami', 'sudo',
    // Fun commands
    'neofetch', 'fortune', 'matrix', 'cowsay', 'cowthink', 'parrot', 'nmap',
    'figlet', 'toilet', 'lolcat', 'nyancat', 'sl', 'pipes', 'asciiquarium', 
    'cmatrix', 'banner', 'factor', 'yes', 'rev', 'games',
    // Games
    'snake', 'tetris', 'pong', 'breakout', 'hangman', 'nim',
    'blackjack', 'slots', 'dice', 'coinflip', 'magic8', 'riddle', 'maze', 'sudoku', 'life'
  ];

  useEffect(() => {
    // Reset session state on page refresh - generates new random command set
    sessionCommands.clear();
    sessionStartTime = Date.now();
    
    // Force regeneration of required commands for new session
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem('terminalSession');
    }

    // Initialize matrix rain
    if (matrixRef.current) {
      createMatrixRain(matrixRef.current);
    }

    // Boot sequence
    const bootMessages = [
      { content: 'INITIALIZING DIGITAL INSURGENT INTERFACE...', className: 'text-neon-green glitch-text' },
      { content: 'Loading neural pathways... [OK]', className: 'text-terminal-green' },
      { content: 'Establishing encrypted channels... [OK]', className: 'text-terminal-green' },
      { content: 'Bypassing corporate firewalls... [OK]', className: 'text-terminal-green' },
      { content: 'Welcome to the resistance.', className: 'text-terminal-green' },
      { content: '', className: '' },
      { content: "Type 'help' to see available commands.", className: 'text-muted-gray' },
      { content: "Type 'ls' to explore the file system.", className: 'text-muted-gray' },
      { content: '', className: '' },
    ];

    bootMessages.forEach((message, index) => {
      setTimeout(() => {
        setOutput(prev => [...prev, message]);
        if (index === bootMessages.length - 1) {
          setIsBootComplete(true);
          setTimeout(() => {
            setOutput(prev => [...prev, { 
              content: '💡 Hint: Explore the system to unlock access to restricted commands', 
              className: 'text-muted-gray' 
            }]);
          }, 2000);
        }
      }, index * 500);
    });

    // Auto-focus input
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', focusInput);
    focusInput();

    return () => {
      document.removeEventListener('click', focusInput);
    };
  }, []);

  useEffect(() => {
    // Smooth scroll to bottom when output changes
    if (outputRef.current) {
      const scrollElement = outputRef.current;
      const scrollToBottom = () => {
        scrollElement.scrollTo({
          top: scrollElement.scrollHeight,
          behavior: 'smooth'
        });
      };
      
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(scrollToBottom);
    }
  }, [output]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !isBootComplete) return;

    // Add command to history
    const newHistory = [...commandHistory, input];
    setCommandHistory(newHistory);
    setHistoryIndex(newHistory.length);

    // Add command to output
    setOutput(prev => [...prev, { 
      content: `insurgent@hacker:~$ ${input}`, 
      className: 'text-neon-green' 
    }]);

    // Track command for session
    sessionCommands.add(input.trim().toLowerCase());

    // Process command
    if (input.trim().toLowerCase() === 'clear') {
      setOutput([]);
      setInput('');
      return;
    }
    
    const result = await processCommand(input.trim(), sessionCommands);
    
    // Add result to output
    result.forEach(line => {
      setOutput(prev => [...prev, line]);
    });

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(commandHistory.length);
        setInput('');
      }
    }
  };

  return (
    <div className="h-screen bg-terminal-bg text-terminal-green font-mono overflow-hidden">
      {/* Matrix Rain Background */}
      <div ref={matrixRef} className="matrix-rain"></div>
      
      {/* Terminal Container */}
      <div className="terminal-container h-full flex flex-col p-4">
        {/* Terminal Header */}
        <div className="border border-terminal-green rounded-t-lg p-3 bg-terminal-bg bg-opacity-90">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-soft-red rounded-full"></div>
            <div className="w-3 h-3 bg-warning-yellow rounded-full"></div>
            <div className="w-3 h-3 bg-terminal-green rounded-full"></div>
            <span className="ml-4 text-sm">insurgent@hacker:~$</span>
          </div>
        </div>
        
        {/* Terminal Body */}
        <div className="border-l border-r border-terminal-green bg-terminal-bg bg-opacity-90 flex-1 flex flex-col">
          {/* Terminal Output */}
          <div ref={outputRef} className="terminal-output flex-1 p-4 space-y-1">
            {output.map((line, index) => (
              <div 
                key={index} 
                className={line.className || 'text-terminal-green'}
                dangerouslySetInnerHTML={{ __html: line.content }}
              />
            ))}
          </div>
          
          {/* Terminal Input */}
          <div className="p-4 border-t border-terminal-green bg-terminal-bg">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center">
                <span className="text-neon-green mr-2">insurgent@hacker:~$</span>
                <input 
                  ref={inputRef}
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-terminal-green outline-none caret-terminal-green"
                  autoComplete="off"
                  spellCheck={false}
                  disabled={!isBootComplete}
                />
                <span className="animate-blink text-terminal-green ml-1">█</span>
              </div>
            </form>
          </div>
        </div>
        
        {/* Terminal Footer */}
        <div className="border border-terminal-green rounded-b-lg p-2 bg-terminal-bg bg-opacity-90">
          <div className="text-xs text-muted-gray text-center">
            Digital Insurgent Terminal v2.1.0 | Secure Shell Protocol Enabled
          </div>
        </div>
      </div>
    </div>
  );
}
