let count = 0;
let min =50;
let sec = 0;
var interval = setInterval(function(){
    count++

},1000)

     
 
         $('#event').text(function(_,text){
        
             if(text === 'Start'){
                 //Display title
                 $('title').text(`Jammer`);
 
                 $('#event').click(function(){
                     $('.container').css({
                         'position':'absolute',
                         'left':'50%',
                         'top':'50%',
                         'transform':'translate(-50%,-50%)',
                         'border-radius':'50%',
                         'transition-duration':'1s'
                     });
                     $('#items').css({
                         'position': 'relative',
                         'left': '50%',
                         'top': '50%',
                         'padding': '10px',
                         'transform': 'translate(-50%,-50%)',
                         'border':'1px solid black'
                     });
                     $(this).css('box-shadow','none');
                     $('.tab').css({
                         'display':'none',
                 
                     });


                     $(this).text('Stop')
                     clearInterval(counter)
                });
 
             }
             else if(text != 'Start'){
           
                 var time = `${minutes}:${seconds}`;
                 var tone = new Audio('../audio/bell.wav')
 
                 //Display time and Title
                 $('title').text(`${time} Jammer`);
                

                 if(minutes == 0 && seconds == 0 ){
                    clearInterval(counter);
                    tone.play();
                 }

                 $('#event').click(function(){
 
                     $('.tab').css({
                         'display':'inline-block',
                         
                     });
                     $('.container').css({
                         'border-radius':'30px',
                         'transition-duration':'1s'
                     });
                     
                    $('input[id=min]').val()+25;
                    var sec = $('input[id=sec]').val(); 
                    console.log(sec)
                     
                     $(this).css({
                         'box-shadow':'inset 0px -6px 0px #EBEBEB'
                     }).text('Start')
 
                 });
 
               
                
             };
           
             //display minutes and Secondss
             $('input[id="min"]').val(minutes)
             $('input[id="sec"]').val(seconds)

        
         });