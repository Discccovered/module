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
})

function showModal(){
    console.log("test");
    $("#myModal").modal("show");
}