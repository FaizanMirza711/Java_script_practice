const input = document.getElementById('Numberofwords');
const container = document.querySelector(".container");


const gen_words = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < n; ++i) {
        const random = Math.floor(Math.random() * 26); // Fix: Generate random number from 0 to 25
        text += letters[random];
    }
    return text;
};


const gen_para = () => {
    let numberofwords;
    numberofwords = Number((input.value));



    const para = document.createElement("p");
    let data ="";
  
    for(let i=0; i<numberofwords;++i){
        const random_no=((Math.random() * 15));
        data += gen_words(random_no).toLowerCase(); 
        data += " ";
     
    }
   
    para.innerText =  data;  //now we need to put the random text inside tgis parra  so create a function to gwenerate Words
    para.setAttribute("class", "parras");
    container.append(para)

};

