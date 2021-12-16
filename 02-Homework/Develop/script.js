$( document ).ready(function() {
    console.log( "ready!" );

var updateTime = function() {
    document.getElementById("currentTime")
    .innerHTML = moment().format('[Today is ]MMMM Do YYYY, h:mm:ss a');
}
setInterval(updateTime, 1000);
var lockButton = document.querySelector('.button');

console.log(lockButton)
lockButton.addEventListener("click", function () {
    var activityEl = $(this).siblings("textarea").val();
    console.log(activityEl);
    //console.log($(this).siblings("textarea").val()); <--MAKE VAR 
    //localStorage.setItem("activity", $(this).siblings("textarea").val() )
});


var time = moment().format("k");
console.log(time);


    $(".row").each 
    (function(){
        var hourInt = parseInt(this.dataset.hour);
        
        if (hourInt < time) {
            console.log("this is in the past" + hourInt) 
        } 
        else if (hourInt == time) {
            console.log("this is in the present hour" + hourInt) 
        }
        else {
            console.log("this is in the future" + hourInt) 
        }
    })

});