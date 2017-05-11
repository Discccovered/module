/**
 *
 */

$(function(){
    $("#login").click(function(){
        $("#loginModal").modal("show");
    })
    $("#register").click(function(){
        $("#myModal").modal("show");
    })
    $("#right_page").load("shouye.jsp");
    $('body').prop({'scrollTop':'0'},1000);
})

function showModal(){
    console.log("test");
    $("#myModal").modal("show");
}