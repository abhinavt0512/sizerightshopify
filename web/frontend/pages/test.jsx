<html lang="en">
<head>
  <link rel="stylesheet" href="https://s3.amazonaws.com/aetrex-fit-genius-widgets/size-right/styles.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <size-right session_id="" name="aetrex.com" gender="female"></size-right>
</body>
<script src="https://s3.amazonaws.com/aetrex-fit-genius-widgets/size-right/sizeright_widget.js"></script>

<script >
  $(document).ready(function(){
    console.log('changed');
   window.addEventListener("load", afterLoaded,false);
   window.addEventListener("load", selectSize,false);
   window.addEventListener("resize", resizeFn);
  });
  
function afterLoaded(){
    $('.Recycle').click();
    $('div.sizerighttext').find('div.Header').click();
    resizeFn();
}
  function resizeFn(){
    var element =document.getElementsByClassName("desktopContainer");
    var width = window.outerWidth;
    if (width<600) {
        for (let i = 0; i < element.length; i++) {  
            element[i].setAttribute("style", "display: none;");
        }
    } else {
        for (let i = 0; i < element.length; i++) {
            element[i].setAttribute("style", "display: flex;");  
       }
    }
}
  $('body').on('click', '.first-page-closeBtn, .stepCloseBtn, .video-page-closeBtn', (event) => {
    $('body').css('display','none');
    history.back();
});
$('body').on('click','button[mat-dialog-close=exit]', function(){
  console.log('call2');
  history.back();
});
  // $('body').on('click', '.gotItBtn', function(){
  //   console.log('call');
  // });

  $('#aetrex_foot_profile_container').on('DOMSubtreeModified', function(){
    console.log('changed');
    var footwearSize = $('#aetrex_foot_profile_container').find('span.size').html();
    console.log(footwearSize);
  });
</script>

</html>