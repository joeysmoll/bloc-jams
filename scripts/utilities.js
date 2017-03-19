var pointsArray = document.getElementsByClassName('point');

function forEach(callback){
    for(var i = 0; i < pointsArray.length;i++){
        callback([i]);
    }
}
