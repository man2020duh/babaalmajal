$(".navbar-nav").html('');
$(".itemsFooter").html('');
    $.ajax({
		url: "/data/dataSite.json",	
		dataType: 'json',		
		success: function (data) {
            $(".IconSite").attr("src",data.Icon);
            $(".imgSite").attr("src",data.Img);
            $(".NameSite").html(data.NameSite);
            $(".descriptionSite").html(data.description);
            $(".mobileSite").html(data.mobile);
            $(".mobileSitehref").attr("href","tel:"+data.mobile);
            
           

            $(".whatsAppSite").attr("href","https://wa.me/+966"+data.whatsApp);
            $(".addressSite").html(data.address);
            $(".emailSite").html(data.email);

            $(".facebook").html(data.facebook);
            $(".facebookhref").attr("href",data.facebook);
            $(".youtube").html(data.youtube);
            $(".youtubehref").attr("href",data.youtube);
            $(".instagram").html(data.instagram);         
            $(".instagramhref").attr("href",data.instagram);
			var items = '';
      var itemsFooter = '';
           var no=0;
			$.each(data.main, function (i, row) {
                if(no==0){
					items +='<a href="'+row.Url+'" class="nav-item nav-link active">'+row.Name+'</a>';	
                }else{
					items +='<a href="'+row.Url+'" class="nav-item nav-link">'+row.Name+'</a>';
                }
                itemsFooter+='<a class="btn btn-link" href="'+row.Url+'">'+row.Name+'</a>';
                no++;
			});
			$(".navbar-nav").html(items);
      $(".itemsFooter").html(itemsFooter);
		}
	});