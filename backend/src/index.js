const express = require('express');
const cors = require('cors');
const rota = require('./routes');

const app = express();

// VEM ANTES DAS ROTAS PARA QUE O EXPRESS CONVERTA O RECEBIMENTO DOS ARQUIVOS PARA JSON
app.use(cors());
app.use(express.json());
app.use(rota);

app.listen(3333);