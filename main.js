const axios = require('axios');
const querystring = require('querystring')

async function pega_carai(){

    let res = await axios({
        method: 'post',
        url: 'https://www.icmc.usp.br/templates/icmc2015/php/pessoas.php',
        data: querystring.stringify({ grupo: 'Aluno Grad.', pagina: '3'}),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    })

    console.log(res.data)
}

pega_carai()