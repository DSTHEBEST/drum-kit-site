//$("h1").css("color", "red")
$("body").keypress(function(event){
    $("h1").text(event.key)
})
$("body").on("mouseover", function () {
    $("h1").css("color", "purple")
    setTimeout(function() {
        $("h1").css("color", "black")
    }, 500)
})