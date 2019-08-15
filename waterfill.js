var waterflow;

function openTap(state) {
    if (state=='open') {
    waterflow = setInterval(function(){ 
            var elem = document.getElementById("water");
            var waterStyle = getComputedStyle(document.querySelector("#water"));
            elem.style.top = parseInt(waterStyle.top, 10) + 1 + "px"
        }, 100);
    }
    else if(state=='close'){
        clearInterval(waterflow);
    }
    else if(state=='fill'){
        location.reload();
    // waterflow = setInterval(function(){ 
    //         var elem = document.getElementById("water");
    //         var waterStyle = getComputedStyle(document.querySelector("#water"));
    //         elem.style.top = parseInt(waterStyle.top) - 1 + "px"
    //     }, 1000);
    }
    
}
