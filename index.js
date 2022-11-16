window.addEventListener("load", () => {
    
    const obj = {
        2: "#FFFF99",
        4: "#FFCC99",
        8: "#FF9933",
        16: "#FF8000",
        32: "#99FF99",
        64: "#66FF66",
        128: "#99FFFF",
        256: "#66B2FF",
        512: "#3399FF",
        1024: "#FF66B2",
        2048: "#202020"
    }
    let score = 0;
    // Create matrix

    let matrix = [[], [], [], []];
    for(let i = 0; i < 4; i++){
        for(let j = 0 ; j < 4; j++){
            matrix[i][j] = document.getElementsByClassName(`${i+1}_${j+1}`)[0];
        }
    }
    let curr1 = getRandom();
    let curr2 = getRandom();

    matrix[curr1[0] - 1][curr1[1] - 1].innerHTML = 2;
    matrix[curr1[0] - 1][curr1[1] - 1].classList.add("_2");
    if(matrix[curr2[0] - 1][curr2[1] - 1].innerHTML == "2"){
        curr2 = getRandom();
    }
    matrix[curr2[0] - 1][curr2[1] - 1].innerHTML = 2;
    matrix[curr2[0] - 1][curr2[1] - 1].classList.add("_2");
    

    //On move
    document.getElementsByTagName("body")[0].addEventListener("keypress", (e) => {
        console.log(e.key);
        score++;
        if(e.key == "w"){
            move("up");
        }
        if(e.key == "s"){
            move("down");
        }
        if(e.key == "a"){
            move("left");
        }   
        if(e.key == "d"){
            move("right");
        }
    })
    function move(dir){
        let res = 0;
        if(dir == "left"){
            let curr = [];  
            for(let i = 0; i < 4; i++){
                curr = [];
                for(let j = 0; j < 4; j++){
                    if(matrix[i][j].innerHTML == ""){
                    }else{
                        curr.push(Number(matrix[i][j].innerHTML));
                        res++;
                    }
                }
                console.log(curr);
               
                for(let j = 0;j < curr.length - 1; j++){
                    if(curr[j] == curr[j+1]){
                        curr[j] *= 2;
                        curr.splice(j + 1, 1);
                    }
                }
                console.log(curr);
                for(let j = 0; j < 4; j++){
                    if(j >= curr.length){
                        matrix[i][j].innerHTML = "";
                        matrix[i][j].className = "";
                        matrix[i][j].classList.add("block");
                        matrix[i][j].classList.add(`${i + 1}_${j + 1}`);
                    }else{
                        matrix[i][j].innerHTML = curr[j];
                        matrix[i][j].className = "";
                        matrix[i][j].classList.add("block");
                        matrix[i][j].classList.add(`${i + 1}_${j + 1}`);
                        console.log(curr[j]);
                        matrix[i][j].classList.add("_" + curr[j].toString());
                    }
                }
            }
            
            
        }else if(dir == "right"){
            let curr = [];  
            for(let i = 0; i < 4; i++){
                curr = [];
                for(let j = 3; j >= 0; j--){
                    if(matrix[i][j].innerHTML == ""){
                    }else{
                        curr.push(Number(matrix[i][j].innerHTML));
                        res++;
                    }
                }
                console.log(curr);
               
                for(let j = 0;j < curr.length - 1; j++){
                    if(curr[j] == curr[j+1]){
                        curr[j] *= 2;
                        curr.splice(j + 1, 1);
                    }
                }
                console.log(curr);
                for(let j = 3; j >= 0; j--){
                    if(3 - j >= curr.length){
                        matrix[i][j].innerHTML = "";
                        matrix[i][j].className = "";
                        matrix[i][j].classList.add("block");
                        matrix[i][j].classList.add(`${i + 1}_${j + 1}`);

                    }else{
                        matrix[i][j].innerHTML = curr[3 - j];
                        matrix[i][j].className = "";
                        matrix[i][j].classList.add("block");
                        console.log(curr[3 - j]);
                        matrix[i][j].classList.add(`${i + 1}_${j + 1}`);

                        matrix[i][j].classList.add("_" + curr[3 - j].toString());
                    }
                }
            }

        }else if(dir == "up"){
            let curr = [];  
            for(let i = 0; i < 4; i++){
                curr = [];
                for(let j = 0; j < 4; j++){
                    if(matrix[j][i].innerHTML == ""){
                    }else{
                        curr.push(Number(matrix[j][i].innerHTML));
                        res++;
                    }
                }
                console.log(curr);
               
                for(let j = 0;j < curr.length - 1; j++){
                    if(curr[j] == curr[j+1]){
                        curr[j] *= 2;
                        curr.splice(j + 1, 1);
                    }
                }
                console.log(curr);
                for(let j = 0; j < 4; j++){
                    if(j >= curr.length){
                        matrix[j][i].innerHTML = "";
                        matrix[j][i].className = "";
                        matrix[j][i].classList.add("block");
                        matrix[i][j].classList.add(`${j + 1}_${i + 1}`);

                    }else{
                        matrix[j][i].innerHTML = curr[j];
                        matrix[j][i].className = "";
                        matrix[j][i].classList.add("block");
                        matrix[i][j].classList.add(`${j + 1}_${i + 1}`);
                        console.log(curr[j]);
                        matrix[j][i].classList.add("_" + curr[j].toString());
                    }
                }
            }            
        }else if(dir == "down"){
            let curr = [];  
            for(let i = 0; i < 4; i++){
                curr = [];
                for(let j = 3; j >= 0; j--){
                    if(matrix[j][i].innerHTML == ""){
                    }else{
                        curr.push(Number(matrix[j][i].innerHTML));
                        res++;
                    }
                }
                console.log(curr);
               
                for(let j = 0;j < curr.length - 1; j++){
                    if(curr[j] == curr[j+1]){
                        curr[j] *= 2;
                        curr.splice(j + 1, 1);
                    }
                }
                console.log(curr);
                for(let j = 3; j >= 0; j--){
                    if(3 - j >= curr.length){
                        matrix[j][i].innerHTML = "";
                        matrix[j][i].className = "";
                        matrix[j][i].classList.add("block");
                        matrix[i][j].classList.add(`${j + 1}_${i + 1}`);

                    }else{
                        matrix[j][i].innerHTML = curr[3 - j];
                        matrix[j][i].className = "";
                        matrix[j][i].classList.add("block");
                        matrix[i][j].classList.add(`${j + 1}_${i + 1}`);
                        console.log(curr[3 - j]);
                        matrix[j][i].classList.add("_" + curr[3 - j].toString());
                    }
                }
            }
            
        }
        if(res == 16){
            gameover();
        }
        let rand1 = getRandom();
        while(matrix[rand1[0] - 1][rand1[1] - 1].innerHTML != ""){
            rand1 = getRandom();
        }
        matrix[rand1[0] - 1][rand1[1] - 1].innerHTML = "2";
        matrix[rand1[0] - 1][rand1[1] - 1].classList.add("_2");
        
    }
    
    function gameover(){
        restart(score);
    }
    function restart(score){
        
    }

    function getRandom(){
        let a = Math.ceil(Math.random()*4);
        let b = Math.ceil(Math.random()*4);
        return [a,b];
    }

})
