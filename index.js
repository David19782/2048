window.addEventListener("load", () => {
    console.log("here");
    let obj = {
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

    let matrix = [[], [], [], []];
    for(let i = 0; i < 4; i++){
        for(let j = 0 ; j < 4; j++){
            matrix[i][j] = document.getElementsByClassName(`${i+1}_${j+1}`)[0];
        }
    }
    let curr1 = getRandom();
    let curr2 = getRandom();

    matrix[curr1[0] - 1][curr1[1] - 1].innerHTML = 2;
    if(matrix[curr2[0] - 1][curr2[1] - 1].innerHTML == "2"){
        curr2 = getRandom();
    }
    matrix[curr2[0] - 1][curr2[1] - 1].innerHTML = 2;

    function move(dir){
        if(dir == "left"){

        }else if(dir == "right"){

        }else if(dir == "up"){
            
        }else if(dir == "down"){
            
        }
    }


    function getRandom(){
        let a = Math.ceil(Math.random()*4);
        let b = Math.ceil(Math.random()*4);
        return [a,b];
    }

    

    console.log(getRandom());
    console.log(getRandom());
    console.log(matrix);
})