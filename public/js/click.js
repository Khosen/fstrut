var clicks = 0;
function onClick() {
    if(clicks != 0){
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    }
    else{
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    }
};