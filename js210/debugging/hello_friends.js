function randomGreeting() {
  const words = [
    'Hello',
    'Howdy',
    'Hi',
    'Hey there',
    "What's up",
    'Greetings',
    'Salutations',
    'Good to see you',
  ];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let idx = 0; idx < names.length; idx += 1) {
    const name = names[idx];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
