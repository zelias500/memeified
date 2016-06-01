var auth = "Client-ID 9d25afc66b7c110"
function imgurHost (imageID){
	$.ajax({
		url:"https://api.imgur.com/3/image/",
		method: "POST",
		headers: {
			Authorization: auth,
		},
		data: {
			image: imageID
		},
		success: function(response){
			window.location.replace('http://imgur.com/gallery/'+response.data.id)
		}
	})
}

$(document).ready(function(){
	var imgUrl = window.location.hash.substring(1)
	var img = $('<img>', {src: imgUrl, id: 'image'})
	var editor = new Aviary.Feather({
		apiKey: "6f1fb81092c749be87bc066d6a4b29c8",
		tools:['meme', 'text', 'stickers', 'draw', 'effects', 'resize', 'enhance', 'frames', 'overlays', 'crop', 'color', 'orientation', 'lighting'],
		onSave: function(imageID, newURL){
			console.log(newURL)
			imgurHost(newURL);
		},
		onError: function(err){
			console.log(err.message)
		},
		onLoad: function(){
			editor.launch({
				image: img.attr("id"),
				url: img.attr("src")
			})
			
			return false;
		}
	});
	$('#imgArea').append(img)
});