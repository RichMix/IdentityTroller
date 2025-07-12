export function getCowsay(text: string = "HACK THE PLANET!"): string {
  const message = text.substring(0, 40); // Limit message length
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

export function getCowthink(text: string = "This might be a trap..."): string {
  const message = text.substring(0, 40);
  const border = '─'.repeat(message.length + 2);
  return `
 ┌${border}┐
 │ ${message} │
 └${border}┘
        o   ^__^
         o  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
}

export function getFiglet(text: string = "CHOPSUEYY"): string {
  const displayText = text.toUpperCase();
  
  if (displayText === "CHOPSUEYY") {
    return `
 ██████╗██╗  ██╗ ██████╗ ██████╗ ███████╗██╗   ██╗███████╗██╗   ██╗██╗   ██╗
██╔════╝██║  ██║██╔═══██╗██╔══██╗██╔════╝██║   ██║██╔════╝╚██╗ ██╔╝╚██╗ ██╔╝
██║     ███████║██║   ██║██████╔╝███████╗██║   ██║█████╗   ╚████╔╝  ╚████╔╝ 
██║     ██╔══██║██║   ██║██╔═══╝ ╚════██║██║   ██║██╔══╝    ╚██╔╝    ╚██╔╝  
╚██████╗██║  ██║╚██████╔╝██║     ███████║╚██████╔╝███████╗   ██║      ██║   
 ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝ ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   `;
  }
  
  if (displayText === "HACKER") {
    return `
 ██   ██  █████   ██████ ██   ██ ███████ ██████  
 ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
 ███████ ███████ ██      █████   █████   ██████  
 ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
 ██   ██ ██   ██  ██████ ██   ██ ███████ ██   ██ `;
  }
  
  // For other text, create a simple representation
  return `
 ███████████████████████████████████████████████
 █                                             █
 █            ${displayText.padEnd(20)}█
 █                                             █
 ███████████████████████████████████████████████`;
}

export function getParrot(): string {
  return `
<div class="parrot-container animate-bounce" style="font-size: 12px; line-height: 1.2; animation: parrot-dance 1.5s infinite;">
                      .-.                                                     .-.
                     (   )                                                   (   )
                      \\-/                                                     \\-/
                      /v\\                                                     /v\\
                     /(_)\\                                                   /(_)\\
                    ^^   ^^                                                 ^^   ^^
                  
                 ████████████████████████████████████████████████████████████████████
                 █▓▓▓▓▓▓▓▓▓█  ██  █▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
                 █▓░░░░░░░▓█ ████ █▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█
                 █▓░██░██░▓█ ████ █▓░██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██████░░▓█
                 █▓░██░██░▓█ ████ █▓░██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██████░▓█
                 █▓░░░░░░░▓█ ████ █▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█
                 █▓▓▓▓▓▓▓▓▓█ ████ █▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
                 ████████████████████████████████████████████████████████████████████
                   ████████████████████████████████████████████████████████████████
                     ████████████████████████████████████████████████████████████
                       ████████████████████████████████████████████████████████
                         ████████████████████████████████████████████████████
                           ████████████████████████████████████████████████
                             ████████████████████████████████████████████
                               ████████████████████████████████████████
                                 ████████████████████████████████████
                                   ████████████████████████████████
                                     ████████████████████████████
                                       ████████████████████████
                                         ████████████████████
                                           ████████████████
                                             ████████████
                                               ████████
                                                 ████
                                                  ██
                                                  
🦜 PARTY PARROT ACTIVATED! DANCE MODE ENGAGED! 🦜
</div>`;
}

export function getToilet(text: string = "CHOPSUEYY"): string {
  const displayText = text.toUpperCase();
  
  if (displayText === "CHOPSUEYY") {
    return `
 ██████╗██╗  ██╗ ██████╗ ██████╗ ███████╗██╗   ██╗███████╗██╗   ██╗██╗   ██╗
██╔════╝██║  ██║██╔═══██╗██╔══██╗██╔════╝██║   ██║██╔════╝╚██╗ ██╔╝╚██╗ ██╔╝
██║     ███████║██║   ██║██████╔╝███████╗██║   ██║█████╗   ╚████╔╝  ╚████╔╝ 
██║     ██╔══██║██║   ██║██╔═══╝ ╚════██║██║   ██║██╔══╝    ╚██╔╝    ╚██╔╝  
╚██████╗██║  ██║╚██████╔╝██║     ███████║╚██████╔╝███████╗   ██║      ██║   
 ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝ ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   `;
  }
  
  // Generic toilet art for other text
  return `
████████╗ ██████╗ ██╗██╗     ███████╗████████╗
╚══██╔══╝██╔═══██╗██║██║     ██╔════╝╚══██╔══╝
   ██║   ██║   ██║██║██║     █████╗     ██║   
   ██║   ██║   ██║██║██║     ██╔══╝     ██║   
   ██║   ╚██████╔╝██║███████╗███████╗   ██║   
   ╚═╝    ╚═════╝ ╚═╝╚══════╝╚══════╝   ╚═╝   
         ${displayText.padEnd(40)}`;
}

export function getNyancat(): string {
  return `
<div style="font-size: 10px; line-height: 1; animation: pulse-glow 1.5s infinite;">
         +      o     +              o   
    +             o     +       +
o          +
    o  +           +        +
+        o     o       +        o
-_-_-_-_-_-_-_,------,      o 
_-_-_-_-_-_-_-|   /\\_/\\  
-_-_-_-_-_-_-~|__( ^ .^)  +     +  
_-_-_-_-_-_-_-""  ""      
+      o         o   +       o
    +         +
o        o         o      o     +
    o           +
+      +     o        o      +  
🌈 NYAN NYAN NYAN NYAN NYAN 🌈
</div>`;
}

export function getSteamLocomotive(): string {
  return `
<div style="font-size: 11px; line-height: 1.1; font-family: monospace;">
                                          (@@) (  ) (@)  (  )  @@     ()    @     O      @
                                     (   )
                                  (@@@@)
                               (   )
                            (@@@)
     o O O               ____          :::::::::::::::::: :::::::::::::::::: :::::::::::
     o   \\   ____      _/   \\_       ::::::::::::::::::  ::::::::::::::::  :::::::::::
     .[]  \\ |    |__ /      __|      ::::::::::::::::::  ::::::::::::::::  :::::::::::
    ..[]   \\|      | \\      \\       ::::::::::::::::::  ::::::::::::::::  :::::::::::
     ..[]            \\ \\      |       ::::::::::::::::    ::::::::::::::::::::::::::::
     ..[]             > >     |       ~~~~~~~~~~~~~~~~     ||||||||||||||||||||||||||||
     ..[]            / /      |                           /_||||||||||||||||||||||||||||\\
     .[]   /|        \\_\\      |                          (                                )
     [].  |\\         \\_\\     |                           \\                              /
     []...\\|           \\      |                            \\____________________________/
     [].   \\             \\     |                             [___][___][___][___][___][___]
     []....|              \\    |                              [_][_][_][_][_][_][_][_][_]
     []....|               \\   |                               [][][][][][][][][][][][][]
     [].   |                \\  |                                [__][__][__][__][__][__]
     .[]   |__               \\ |                                 [][][][][][][][][][][][]
      []...|  \\___            \\|                                  [_][_][_][_][_][_][_]
     ..[]...|     \\___         |                                   [][][][][][][][][][]
    ...[]...|        \\___      |                                    [__][__][__][__][__]
     .[]....|           \\___   |                                     [_][_][_][_][_][_]
     .[]....|              \\__ |                                      [][][][][][][][]
      []....|                 \\|                                       [__][__][__][__]
       []...|                  |                                        [_][_][_][_][_]
        []..\\                  |                                         [][][][][][]
         []..\\                 |                                          [__][__][__]
          []..\\                |                                           [_][_][_][_]
           []..\\               |                                            [][][][][][]
            []..\\              |                                             [__][__][__]
             []._\\             |                                              [][][][][][]
              [].\\             |                                               [_][_][_]
               []..\\           |                                                [][][][][]
                []..\\          |                                                 [__][__]
                 []..\\         |                                                  [_][_]
                  []._\\        |                                                   [][]
                   [].\\        |
                    []..\\      |
                     []..\\     |
                      []..\\    |
                       []..\\   |
                        []._\\  |
                         [].\\  |
                          [].\\ |
                           []._\\
                            []..
                             [].
                              []
                               [
                               
🚂 CHOO CHOO! Steam locomotive coming through! 🚂
</div>`;
}

export function getPipes(): string {
  return `
<div style="font-size: 12px; line-height: 1; color: var(--neon-green);">
┌─┐ ┌─┐ ┌─┐ ┌─┐ 
│ └─┘ └─┘ └─┘ │
│ ┌─┐ ┌─┐ ┌─┐ │
└─┘ └─┘ └─┘ └─┘
│ ┌─┐ ┌─┐ ┌─┐ │
│ │ └─┘ └─┘ │ │
└─┘ ┌─┐ ┌─┐ └─┘
  │ │ │ │ │ │
  └─┘ └─┘ └─┘
🔧 Animated pipes drawing across terminal! 🔧
</div>`;
}

export function getAsciiAquarium(): string {
  return `
<div style="font-size: 10px; line-height: 1; color: var(--terminal-green);">
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      o                    o       o
           o    ><>    o              o
  o              o        ><>    o
       ><>   o       o               o
  o        o      ><>      o    ><>
                     o            o
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        🐠 ASCII Aquarium Swimming! 🐠
</div>`;
}

export function getNeofetch(): string {
  return `
<span class="text-neon-green">                    ╭───────────────╮</span>
<span class="text-neon-green">    ╭─╮╭─╮╭─╮╭─╮    │ </span><span class="text-warning-yellow">[CLASSIFIED]</span><span class="text-neon-green">      │</span>
<span class="text-neon-green">    │ ╰╯ ╰╯ ╰╯ │    │ </span><span class="text-terminal-green">Digital Insurgent</span><span class="text-neon-green"> │</span>
<span class="text-neon-green">    ╰─╮╭─╮╭─╮╭─╯    ├───────────────┤</span>
<span class="text-neon-green">      ╰╯ ╰╯ ╰╯      │ </span><span class="text-muted-gray">OS:</span> ParrotSec<span class="text-neon-green">     │</span>
<span class="text-neon-green">                    │ </span><span class="text-muted-gray">Kernel:</span> Linux 5.18<span class="text-neon-green"> │</span>
<span class="text-neon-green">                    │ </span><span class="text-muted-gray">Shell:</span> zsh 5.9<span class="text-neon-green">    │</span>
<span class="text-neon-green">                    │ </span><span class="text-muted-gray">Terminal:</span> tmux<span class="text-neon-green">    │</span>
<span class="text-neon-green">                    ╰───────────────╯</span>`;
}

export function getLolcat(text: string = "RAINBOW TEXT"): string {
  const colors = ['#ff0000', '#ff8800', '#ffff00', '#88ff00', '#00ff00', '#00ff88', '#00ffff', '#0088ff', '#0000ff', '#8800ff', '#ff00ff', '#ff0088'];
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    result += `<span style="color: ${color}">${text[i]}</span>`;
  }
  return result;
}
