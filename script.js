$(".question").hide();
$(".beginButton").hide();
$(".userScreen").hide();
$(".homeScreen").hide();
$(".quizBegin").hide();
$(".quiz").hide();
$(".quizAnswers").hide();


var questions = ["What's 5 x 5?", "Is Isreal a city or a Country?"," Is HTML a mark up language or a mark down Language?","How much Presidents have there been?"];
var answers = ["25", "a country"," markup","45"];

var totalScore = 0;


//These are a list of functions which were used to organize code
function transition(){
    setTimeout(function(){
        $("body").css("background-image"," url('https://media1.giphy.com/media/3oEdv4idg2DBlVCU6I/source.gif') ");
    }, 100);
    setTimeout(function(){
        $("body").css("background","white");
    }, 1000);
}
function boot(){
    setTimeout(function(){
    $("body").delay().css("background-image"," url('https://steamuserimages-a.akamaihd.net/ugc/856102182548612976/9A25A1387F2ADDBA938B9D4E001ABA7331DA4286/') ");
    }, 4000);   
    setTimeout(function(){
        $("body").delay().css("background-image"," url('https://media2.giphy.com/media/l41JTOxC7aexswWZO/source.gif') ");
    }, 5000);    
    setTimeout(function(){
        $("body").delay().css("background-image"," url('https://www.ionos.ca/digitalguide/fileadmin/DigitalGuide/Teaser/bluescreen-t.jpg') ");
    $(".beginButton").show();
}, 7500);    
    }
function hackedIn(){
    setTimeout(function(){
        $("body").css("background-image"," url('https://media1.giphy.com/media/3oEdv4idg2DBlVCU6I/source.gif') ");
      }, 100);  
     setTimeout(function(){
        $("body").css("background-image"," url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/646020f1-0ba6-4579-827d-58f65e793994/d87dqz7-84293820-71d7-417b-9b8e-8eafc307602d.png/v1/fill/w_1192,h_670,q_70,strp/windows_xp_home_edition_rtm_desktop_by_aldwinpanny10_d87dqz7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNjQ2MDIwZjEtMGJhNi00NTc5LTgyN2QtNThmNjVlNzkzOTk0XC9kODdkcXo3LTg0MjkzODIwLTcxZDctNDE3Yi05YjhlLThlYWZjMzA3NjAyZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hPzH-cuIPoMqbwnneSdWkTuQXRP-aWEF7C0RC4fKqOc') ");
      }, 1000);
    }
    
function FirstQuestionCheck(){
        var a = $(".b0").val();
    
        if(a === "25"){
        totalScore++;
        }
    }  
function SecondQuestionCheck(){
        var b = $(".b1").val().toLowerCase(); 
    
        if(b === "a country" || b === "country"){
        totalScore++;
        }
} 
function ThirdQuestionCheck(){
        var c = $(".b2").val().toLowerCase(); 
    
    if(c === "markup" || c === "mark up"|| c === "mark up language" || c === "markup language"){
        totalScore++;
        }
}
function FourthQuestionCheck(){
            
    var d = $(".b3").val(); 
    
    if(d === "45"){
        totalScore++;
        }
}

 
//Beginning Animation   
boot();

$(".beginButton").click(function(){
    $(".question").fadeIn(300);
    $(".Start").fadeOut(100);
    $("body").delay(300).css("background"," black");
   
});

$(".userButton").click(function(){  
       $(".question").fadeOut(300);
        $("body").css("background-image"," url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c0bd4a43-0e20-4bc5-b845-a33b8ad62933/d2tbbbl-591fc5c2-ab6a-460b-8d70-00af74277288.png')");
        $("body").css("background-size"," 100% 1000px ");
        $(".userScreen").show(300);
       
});
$(".userName").click(function(){
    $(".userScreen").hide(0);
    hackedIn();
     $(".homeScreen").delay(1000).show(200);   
});
$(".icon").click(function(){
        transition();
        $(".homeScreen").hide(200);   
        $(".quizBegin").delay(1000).show(200);   
    });
$(".testButton").click(function(){
         $(".quiz").delay(1000).show(200);  
         $(".testButton").hide(200);   
});
$(".questionPush").click(function(){
    var boi = parseInt($(".questionAmount").val());
    if(boi >= 4){
      var boi2 = 4;
       }
    else if(boi < 4){
        var boi2 = boi;
        }
    for(var i = 0; i < boi2; i++){
        $(".quiz").append("<h1>"+questions[i]+"</h1><input class='answers b"+i+"'>");   
        
        }
        $(".hide").hide(200);   
        $(".quizAnswers").show(200);  
    
    });
$(".quizAnswers").click(function(){ 
    //This Is where the Questions be checked
    FirstQuestionCheck();
    
    SecondQuestionCheck();    
    
    ThirdQuestionCheck();
    
    FourthQuestionCheck();

    var boi = parseInt($(".questionAmount").val());
    
    
    if(boi >= 4){
        
        $(".hide").hide(200);
        var boi2 = 4;
        }
        else if(boi < 4){
            var boi2 = boi;
        }
        if(100*(totalScore/boi2) >= 50){
            
            $(".quizBegin").hide(200);  
            
            $("body").css("background-image"," url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/646020f1-0ba6-4579-827d-58f65e793994/d87dqz7-84293820-71d7-417b-9b8e-8eafc307602d.png/v1/fill/w_1192,h_670,q_70,strp/windows_xp_home_edition_rtm_desktop_by_aldwinpanny10_d87dqz7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNjQ2MDIwZjEtMGJhNi00NTc5LTgyN2QtNThmNjVlNzkzOTk0XC9kODdkcXo3LTg0MjkzODIwLTcxZDctNDE3Yi05YjhlLThlYWZjMzA3NjAyZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hPzH-cuIPoMqbwnneSdWkTuQXRP-aWEF7C0RC4fKqOc') ");
        $("body").css("background-size","100% 1000px");
            alert("You have passed with a "+100*totalScore/boi2+" out of 100");
        }
        else if(100*totalScore/boi2 < 50){
            $("*").hide(200);  
            alert("You have Failed with a "+100*totalScore/boi2+" out of 100, now all of your files will be deleted");
            }
});
