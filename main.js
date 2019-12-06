const axios = require('axios');

async function pega_carai(){

    //var bodyFormData = new FormData();
    /*
    bodyFormData.set('grupo', 'Aluno+Grad.');
    bodyFormData.set('depto', '');
    bodyFormData.set('nome', '');
    bodyFormData.set('pagina', '3');
    bodyFormData.set('titulo', '');
    */

    let requestContent = await axios.post('https://www.icmc.usp.br/templates/icmc2015/php/pessoas.php',{
        grupo: 'Aluno+Grad.',
        depto: '',
        nome: '',
        pagina: '3',
        titulo: ''
    }, 
    
    {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    console.log(requestContent);
}

pega_carai()