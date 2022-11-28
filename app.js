let triangle = document.querySelector('.triangle');
let n = 6
let string = ''
// ******
// *****
// ****
// ***
// **
// *

for (let i = 0 ; i < n ; i++){
    for(let j = i; j<n ; j++){
string+=" * "
    }
string+='<p>'+'\n'+'</p>'
}

triangle.innerHTML=string