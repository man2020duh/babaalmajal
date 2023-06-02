$("#About_sub").html('');
    $.ajax({
		url: "/data/dataAbout.json",	
		dataType: 'json',		
		success: function (data) {
			var items = '';
          
		   $('.AboutImg').attr("src","img/"+data.imgUrl);
		   $('.About_h1').html(data.title_h1);
		   $('.About_h2').html(data.title_h2);
		   $('.About_h5').html(data.title_h5);
		   $('.details').html(data.details);
			$.each(data.sub, function (i, row) {
                items +='<div class="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.1s">'
					+' <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>'
					+'<h2 class="mb-0">'+row.name+'</h2>'
					+'</div> ';
			});
			$("#About_sub").html(items);
		}
	});