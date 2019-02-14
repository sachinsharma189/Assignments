
$("#one").click(function(){
    console.log("Hello Word");
});

$("#second").click(function(){
    $("#test").addClass("load");
});

$("#third").click(function(){
      $("p[class$='new']").css('color','red');
});

$("#fourth").click(function(){
    $("input[type=submit]").attr('disabled','disabled');
});

$("#fifth").click(function(){
    $("#main>.target").css('font-size','20px');
});

$(window).on('load',function(){
    $("div[id='divi']").replaceWith("<p>");    
});

$("#seventh").click(function(){
     $("p[class='appendtry']").append("<button class=dynamic>Click</button>");  
});

$("p").on('click',"button[class=dynamic]",function(){
    console.log("Hello");
});

$("#Fruits").change(function () {
    var selectedText='';
    selectedText = $(this).find("option:selected").text();
    $("div[class='fruits']").html(selectedText);
});

 $("#menu").hover(function(){
     $(".dropdown-menu",this).slideDown(100);
   }, function(){
     $(".dropdown-menu",this).stop().slideUp(100);
});

// $("#Selected").hover(function(){
//      $("option").css('display','block');
// }, function(){
//     $("option").css('display','none');
// });

$("a").on('click', function(e){
    e.preventDefault();
});

$(".parent").click(function(){
    alert("Parent Element is clicked");
    $(".child").on('click', function(e){
     e.stopPropagation();
     alert("The child element was clicked.");
 });
});

$("#height").click(function(){
    var maxh= 0;
    $("div[class='container']").children().each(function(){
    var h = $(this).height();
    if(h>=maxh)
    {
    maxh=h;
    }
    });
    alert("max height is " + maxh);
    });

$("#fourteenth").click(function(){
    var a = 0;
    $('tr').children().each(function(){
        var b = $(this).text();
        if(b>10)
        {
            this.id = "col" +a;
            $('#'+this.id).css('background-color','red');
            a++;
        }
    });
    });
