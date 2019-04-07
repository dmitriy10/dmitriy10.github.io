
  textarea_id.addEventListener("input", function() {
	// div.innerText = textarea_id.value.length;
	inputText = textarea_id.value.length;
	div.innerText = '(' + inputText + '/1000)'
	});

	//add photo
	$(function () {
		$(":file").change(function () {
			if (this.files && this.files[0]) {
				var reader = new FileReader();

				reader.onload = imageIsLoaded;
				reader.readAsDataURL(this.files[0]);
			}
		});
	});

	function imageIsLoaded(e) {
		$('#myImg').attr('src', e.target.result);
		$('#yourImage').attr('src', e.target.result);
		$('.photo-text').addClass('active');
	};
