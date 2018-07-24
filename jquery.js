$(function(){
    $(".launcher, .background, .close").click(function() {
        $(".content, .background").toggleClass("active");
    });
});