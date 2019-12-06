const axios = require('axios');
const querystring = require('querystring')
let jsdom = require('jsdom').JSDOM

async function pega_carai(){

    let res = await axios({
        method: 'post',
        url: 'https://www.icmc.usp.br/templates/icmc2015/php/pessoas.php',
        data: querystring.stringify({ grupo: 'Aluno Grad.', pagina: '3'}),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    })

 
    // some hard coded html
    html = res.data
     
    // get the dom by calling the jsdom constructor, and giving it the html
    dom = new jsdom(html),
     
    // get the window object @ dom.window
    window = dom.window,
     
    // now just do whatever, just like in the browser
    elements = window.document.getElementsByClassName("col-xs-6 col-sm-4 col-md-3 col-lg-2")


    for(let i = 0; i < elements.length; i++){
        let nusp = elements[i].children[0].children[0].href.replace('/pessoas?id=','');

        console.log(elements[i].children[0].children[1].children[0].children[0].innerHTML + " | " +  (nusp - 3)/2)
    }

    
}

pega_carai()

