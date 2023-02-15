$(document).ready(function(){

    function countDown(){
         var min = $('input[id=min]').val();
         var sec = $('input[id=sec]').val(); 
         var end = parseInt(min) * 60 + parseInt(sec);
         var start = 0;
         var counter = setInterval(function(){
         start++;
         sec = Math.floor((end-start)%60);
         min = Math.floor((end-start)/60);
      
         var minLength = String(min).length;
         var secLength = String(sec).length;
         
         if(minLength > 2 || secLength < 10){
             var minutes = min.toString().length == 2 ? min:`${min}`;
             var seconds = sec.toString().length == 2 ? sec:`0${sec}`;
         }
         else if(min < 0  ||  secLength == 0){
            var minutes = min.toString().length == 2 ? min: `0${0}`;
            var seconds = sec.toString().length == 2 ? sec:`0${0}`;
        };

         if(min < 10){
            var minutes = min.toString().length == 2 ? min: `0${min}`;
         };
         
         if(minutes == 0 && seconds == 0){
            audio = new Audio('./audio/bell.wav')
            clearInterval(counter)
            audio.play();
           
         }

         $('#event').click(function(){
            if($(this).text() == 'Start'){
                clearInterval(counter)
          
            };
         });
         
      


         $('input[id=min]').val(minutes);
         $('input[id=sec]').val(seconds);
       
         }, 1000);       

}


function reset(){
    min = $('input[id=min]').val();
    sec = $('input[id=sec]').val();
    
    $('#reset').click(function(){
        if($('#event').text() == 'Start'){
            $('input[id=min]').val(min);
            $('input[id=sec]').val(sec);
        }  
    });
   
}

reset();


          //Button start/stop clicked
     $('#event').click(function(){
        if($(this).text() == 'Start'){
             //Editable
            $('input[id="min"]').prop('readonly',true)
            $('input[id="sec"]').prop('readonly',true)  
            var push = new Audio('./audio/Button.mp3');
            push.play();
    
            $('.container').css({
                'position':'absolute',
                'left':'50%',
                'top':'50%',
                'transform':'translate(-50%,-50%)',
                'border-radius':'50%',
                'transition-duration':'1s'
            });
            
            $(this).css('box-shadow','none').text('Pause');
            $('.tab').css({
                'display':'none',
        
            });
            $('#reset').css('display','none')
            countDown();
          
  
        }


       else if($(this).text() != 'Start'){
            //Editable
           $('input[id="min"]').prop('readonly',false)
           $('input[id="sec"]').prop('readonly',false)  
           var push = new Audio('./audio/Button.mp3');
           push.play();
   
           $('.container').css({
               'position':'absolute',
               'left':'50%',
               'top':'50%',
               'transform':'translate(-50%,-50%)',
               'border-radius':'30px',
               'transition-duration':'1s'
           });
          
           $('.tab').css({
               'display':'inline-block',
               'transition-duration':'1s'
       
           });
           $('#reset').css('display','inline-block');
         
           
           $(this).css('box-shadow','none').text('Start');
           
       }
       

       
       
    });
   
 
     //Pomodoro Tab
     $('#pomodoro').click(function(){
         $('input[id=min]').val('25');
         $('input[id=sec]').val('00'); 
 
         $('.tab').removeClass('active');
         $(this).addClass('active');
         $('body,.container').css({
             'background-color':'coral',
             'transition-duration':'1s'
         })
         $('#event').css({
             'color':'coral',
             'transition-duration':'1s'
         });
         $('.container').css({
             'background-color': 'rgba(255, 255, 255, 0.1)'
         });
         
         reset();
    
     });
 
     //Short-Break tab
     $('#short-break').click(function(){
         $('input[id=min]').val('10');
         $('input[id=sec]').val('00'); 
 
 
         $('.tab').removeClass('active');
         $(this).addClass('active');
         $('body,.container').css({
             'background-color':'cadetblue',
             'transition-duration':'1s'
         });
         $('.container').css({
             'background-color': 'rgba(255, 255, 255, 0.1)'
         });
         $('#event').css({
             'color':'cadetblue',
             'transition-duration':'1s'
         })
         reset();
    
     });
 
     //Long Break tab
     $('#long-break').click(function(){
         $('input[id=min]').val('15');
         $('input[id=sec]').val('00'); 
 
         $('.tab').removeClass('active');
         $(this).addClass('active');
         $('body,.container').css({
             'background-color':'burlywood',
             'transition-duration':'1s'
         });
         $('.container').css({
             'background-color': 'rgba(255, 255, 255, 0.1)'
         });
         $('#event').css({
             'color':'burlywood',
             'transition-duration':'1s'
         })
         reset();
    
     });
 });
