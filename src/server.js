const express = require("express");

const app = express();

const PORT = 3004;

app.get('/segundaApi',(request, response)=>{
    response.send('testa a rota no express');
})

    
app.listen(PORT, () => console.log(`Running at port ${PORT}`));