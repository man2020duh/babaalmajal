$(".carousel-inner").html('');
    $.ajax({
		url: "/data/Carousel.json",	
		dataType: 'json',		
		success: function (data) {
			var items = '';
           var no=0;
			$.each(data, function (i, row) {
                if(no==0){
                    items +=' <div class="carousel-item active">'
                    +' <img class="w-100" src="'+row.ImgUrl+'" alt="'+row.Title+'">'                   
                    +' </div>';
                }else{
                    items +=' <div class="carousel-item">'
                    +' <img class="w-100" src="'+row.ImgUrl+'" alt="'+row.Title+'">'                   
                    +' </div>';
                }
                no++;
			});
			$(".carousel-inner").html(items);
		}
	});