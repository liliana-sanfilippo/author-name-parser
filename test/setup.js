console.log('ts-node setup geladen');

// ts-node initialisieren
require('ts-node').register({
  transpileOnly: true,
  files: true
});

// Debug: alle Loader-Hooks ausgeben
console.log('Registrierte require.extensions:', Object.keys(require.extensions));
