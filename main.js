const axios = require('axios'); //http client 
const querystring = require('querystring') //Icmc server does not use JSON as a data format 
let jsdom = require('jsdom').JSDOM //Emulates a browser window, which allows handeling HTML in server-side as in client-side (Document.getElements.., .innerhtml, etc) 

async function crawls_page_by_id(pag){

    //Requests a page that contains students and their "hashed" id
    let res = await axios({
        method: 'post',
        url: 'https://www.icmc.usp.br/templates/icmc2015/php/pessoas.php',
        data: querystring.stringify({ grupo: 'Aluno Grad.', pagina: pag }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    })
 
    // res.data contains the data of icmc's server response, which is in html. 
    html = res.data
     
    // get the dom by calling the jsdom constructor, and giving it the html
    dom = new jsdom(html),
     
    // get the window object @ dom.window
    window = dom.window,
     
    // References all divs with the specific class that contains 
    elements = window.document.getElementsByClassName("col-xs-6 col-sm-4 col-md-3 col-lg-2")


    for(let i = 0; i < elements.length; i++){ //For every div with the specific class
        let nusp = elements[i].children[0].children[0].href.replace('/pessoas?id=',''); //Extracts id from poluted href attribute
        let name = elements[i].children[0].children[1].children[0].children[0].innerHTML //Extracts name 
        console.log(name + " | " +  (nusp - 3)/2) //Converts hashed id into the true ID and prints 
    }

    
}

for(let pag = 0; pag < 10; pag++){ //Crawls 10 pages
    crawls_page_by_id(pag)
}
