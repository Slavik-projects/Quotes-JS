fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
		const speed = 100;
		let textPosition = 0;
			function typewritter(){
				document.querySelector("#message").innerHTML = data[index].text.substring(0, textPosition) + '<span>\u25AE</span>'
				if(textPosition++ != data[index].text.length){
					setTimeout(typewritter, speed)
				}
				else{
					document.querySelector("#message").innerHTML =''+'<span>\u25AE</span>';
				}
			}
			
         
		let promise = new Promise(function (resolve){
			resolve();
			typewritter();
		})
		   promise.then(function(){
				setInterval(function(){
				index = Math.floor(Math.random() * (99 - 0) + 0);
				typewritter()
			},5000)
			})
         
		})

