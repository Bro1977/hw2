let text = prompt('сколько блоков вы хотите?');

for (let i = 0; i < text; i++) {
    let color = "";
    if(i > 9){
        break
    } 
    
    else if(i % 3 === 0){
        color = "red";
    } else if (i % 3 === 1){
        color = "yellow";
    } else {
        color = "green";
    } 
    document.write(`<div style = "background-color: ${color}" class="box"></div>`)
}