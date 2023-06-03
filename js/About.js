$(".AboutlsImg").html('');
    $.ajax({
		url: "/data/About.json",	
		dataType: 'json',		
		success: function (data) {
      $(".AboutTitle").html(data.Title);
            $(".AboutImgUrl").attr("src",data.ImgUrl);
            $(".AboutIcon").attr("src",data.Icon);          
            $(".Aboutdescription").html(data.description);   
			var items = '';
           var no=0;
			$.each(data.lsdata1, function (i, row) {
                if(no==0){
                  $(".aboutsub1").html(row.Id);   
                  $(".aboutsub2").html(row.name);   
                  $(".aboutsub3").html(row.description);                    
                }                
                no++;
			});
			$(".AboutlsImg").html(items);
		}
	});