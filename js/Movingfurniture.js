 //ServicesHome
 $(".Service").html('');
 $.ajax({
     url: "/data/Movingfurniture.json",	
     dataType: 'json',		
     success: function (data) {       
         var itemsService = '';          
   var no=1;
         $.each(data, function (i, row) {
     itemsService += '<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.'+no+'s">'
     +'<div class="service-item">'
     +'<img class="img-fluid" src="'+row.ImgUrl+'" alt="'+row.Title+'">'
     +'<div class="d-flex align-items-center bg-light">'
     +'<div class="service-icon flex-shrink-0 bg-primary">'
     +'<img class="img-fluid" src="'+row.Icon+'" alt="'+row.Title+'">'
     +'</div>'
     +'<h1 class="h4 mx-4 mb-0" >'+row.Title+'</h1>'        
     +'</div>'
     +'<h2 class="h6 mx-4 mb-0" >'+row.description+'</h2>'
     +'</div>'
     +'</div>';
     no++;
     no++;
         });
         $(".Service").html(itemsService);
     }
 });