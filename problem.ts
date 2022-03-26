
//Contar el numero de veces que se repite cada palabra
let text ="Hola que tal bienvenidos a mi casa. Si deseas tomar un cafe sientete como en casa";
 
function normalize(word: string){
    return word.toLowerCase().replace(/[.!,]/g ,"");
}
 function wordRepetitions(text: string) {
     let dict: {[key: string]: number } = {};
     let separatedWords = text.split ("");
     for (let word of separatedWords){
         if (normalize(word)in dict){
             ++dict[normalize(word)];

         }
         else {
             dict[normalize(word)]=1;

         }
     }
     
 }
