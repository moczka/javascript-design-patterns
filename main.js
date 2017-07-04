window.addEventListener('load', onWindowLoad, false);

function onWindowLoad(){
    init();
}
function init(){
    var selection = document.getElementById('jsPatterns');
    var frame = document.getElementById("frame");
    console.log(frame);
    selection.onchange = function(e){
        var choice = e.target;

        switch(choice.value){
            case "1":
                frame.src = 'observer/index.html';
                break;
            case "2":
                console.log(e.value);
                break;
            case "3":
                console.log(e.value);
                break;
                
                
        }
    }
    
    
}