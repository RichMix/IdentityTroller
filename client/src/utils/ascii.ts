export function getCowsay(text: string = "HACK THE PLANET!"): string {
  const message = text;
  const border = '─'.repeat(message.length + 2);
  return `
 ┌${border}┐
 │ ${message} │
 └${border}┘
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
}

export function getFiglet(text: string = "CHOPP_SUEYY"): string {
  return `
 ██████ ██   ██  ██████  ██████  ██████      ███████ ██    ██ ███████ ██    ██ ██    ██ 
██      ██   ██ ██    ██ ██   ██ ██   ██     ██      ██    ██ ██       ██  ██   ██  ██  
██      ███████ ██    ██ ██████  ██████      ███████ ██    ██ █████     ████     ████   
██      ██   ██ ██    ██ ██      ██               ██ ██    ██ ██         ██       ██    
 ██████ ██   ██  ██████  ██      ██          ███████  ██████  ███████    ██       ██    `;
}

export function getParrot(): string {
  return `
<div class="parrot-container">
                    ░░░░░░░░░░░░░░░░░░░░░░█████████
                    ░░███████░░░░░░░░░░███▒▒▒▒▒▒▒▒███
                    ░░█▒▒▒▒▒▒█░░░░░░░███▒▒▒▒▒▒▒▒▒▒▒▒▒███
                    ░░░█▒▒▒▒▒▒█░░░░██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
                    ░░░░█▒▒▒▒▒█░░░██▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒███
                    ░░░░░█▒▒▒█░░░█▒▒▒▒▒▒████▒▒▒▒████▒▒▒▒▒▒██
                    ░░░█████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
                    ░░░█▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒██
                    ░██▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██
                    ██▒▒▒███████████▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒██
                    █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒████████▒▒▒▒▒▒▒██
                    ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
                    ░█▒▒▒███████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
                    ░██▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
                    ░░████████████░░░█████████████████
</div>
PARTY PARROT ACTIVATED! 🦜`;
}

export function getToilet(text: string = "CHOPP"): string {
  return `
████████╗ ██████╗ ██╗██╗     ███████╗████████╗
╚══██╔══╝██╔═══██╗██║██║     ██╔════╝╚══██╔══╝
   ██║   ██║   ██║██║██║     █████╗     ██║   
   ██║   ██║   ██║██║██║     ██╔══╝     ██║   
   ██║   ╚██████╔╝██║███████╗███████╗   ██║   
   ╚═╝    ╚═════╝ ╚═╝╚══════╝╚══════╝   ╚═╝   `;
}

export function getNeofetch(): string {
  return `
<span class="text-neon-green">                    ╭───────────────╮</span>
<span class="text-neon-green">    ╭─╮╭─╮╭─╮╭─╮    │ </span><span class="text-warning-yellow">CHOPP_SUEYY</span><span class="text-neon-green">      │</span>
<span class="text-neon-green">    │ ╰╯ ╰╯ ╰╯ │    │ </span><span class="text-terminal-green">Digital Insurgent</span><span class="text-neon-green"> │</span>
<span class="text-neon-green">    ╰─╮╭─╮╭─╮╭─╯    ├───────────────┤</span>
<span class="text-neon-green">      ╰╯ ╰╯ ╰╯      │ </span><span class="text-muted-gray">OS:</span> ParrotSec<span class="text-neon-green">     │</span>
<span class="text-neon-green">                    │ </span><span class="text-muted-gray">Kernel:</span> Linux 5.18<span class="text-neon-green"> │</span>
<span class="text-neon-green">                    │ </span><span class="text-muted-gray">Shell:</span> zsh 5.9<span class="text-neon-green">    │</span>
<span class="text-neon-green">                    │ </span><span class="text-muted-gray">Terminal:</span> tmux<span class="text-neon-green">    │</span>
<span class="text-neon-green">                    ╰───────────────╯</span>`;
}
