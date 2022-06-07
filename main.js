document.getElementById('submit_gal').addEventListener('click',submitGal)
document.getElementById('submit_bar').addEventListener('click',submitBal)

function get(id){
    return document.getElementById(id).value;
}

function submitGal(){
    console.log("gal")
}

function submitBal(){
    console.log("bar")
}
