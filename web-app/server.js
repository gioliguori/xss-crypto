const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const knex = require('./knexfile');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/comments.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'comments.html'));
});

app.get('/get-comments', async (req, res) => {
  try {
    const comments = await knex('posts')
                         .select('utente', 'commento', 'timestamp')
                         .orderBy('timestamp', 'asc');
    // console.log('Dati recuperati:', comments);
    res.json(comments);
  } catch (err) {
    console.error('Errore nel recuperare i commenti:', err);
    res.status(500).send('Errore nel server');
  }
});

app.post('/submit-comment', async (req, res) => {
  const utente = req.body.user;
  const commento = req.body.text;

  try {
    await knex('posts').insert({utente: utente, commento: commento});
    // console.log('Commento inserito:', {utente, commento});
    res.redirect('/comments.html');
  } catch (err) {
    console.error('Errore nell\'inserire il commento:', err);
    res.status(500).send('Errore nel server');
  }
});

// Avvio server
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
