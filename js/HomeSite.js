// Features  
$(".Featureslsdata1").html('');
    $.ajax({
		url: "/data/Features.json",	
		dataType: 'json',		
		success: function (data) {
            $(".FeaturesTitle").html(data.Title);                  
            $(".FeaturesImgUrl").attr("src",data.ImgUrl);          
            $(".Featuresdescription").html(data.description);   
			var items = '';          
			$.each(data.lsdata1, function (i, row) {
                items +=  '<div class="d-flex mb-5">'
                +'<div class="flex-shrink-0 btn-square bg-primary rounded-circle" style="width: 90px; height: 90px;">'
                +'<img class="img-fluid" src="'+row.ImgUrl+'" alt="'+data.Title+'">'
                +'</div>'
                +'<div class="ms-4">'
                +'<h5 class="mb-3 ">'+row.Title+'</h5>'
                +'<span>'+row.description+'</span>'
                +'</div>'
                +'</div>';
			});
			$(".Featureslsdata1").html(items);
		}
	});
  //ServicesHome
  $(".Service").html('');
    $.ajax({
		url: "/data/ServicesHome.json",	
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
   //Servicesyoutube

   $(".Serviceyoutub").html('');
   $.ajax({
   url: "/data/ServicesyoutubeHome.json",	
   dataType: 'json',		
   success: function (data) {       
     var itemsServiceyoutub = '';          
     var no=1;
     $.each(data, function (i, row) {
      itemsServiceyoutub+='   <div class="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.'+no+'s">'
      +' <div class="position-relative">'
      +'  <iframe width="350" height="315"                     '
      +'  src="https://www.youtube.com/embed/'+row.description+'"'
      +'   title="'+row.Title+'" '
      +'   frameborder="0" '
      +'   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      +' </div>'
      +' </div>';     
       no++;
       no++;
     });
     $(".Serviceyoutub").html(itemsServiceyoutub);
   }
 });