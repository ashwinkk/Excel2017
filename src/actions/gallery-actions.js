export function fetchImages() {
	return dispatch => {
		dispatch({ type: "FETCHING_IMAGES" });
		fetch("/assets/gallery.json")
			.then(response => response.json())
			.then(data => {
				dispatch({ type: "FETCHED_IMAGES", payload: data });
			})
			.catch(err => console.log(err));
		// let imagePromises = []
		// files.forEach((pic, index) => {
		//     imagePromises.push(fetch("/static/gallery/" + pic, {
		//         headers: {
		//             "Content-Type": "image/png",
		//             Accept: "image/png"
		//         }
		//     }))
		// });
		// Promise.all(imagePromises)
		// .then(images=>{
		//     return Promise.all(images.map(image=>image.blob()));
		// })
		// .then(imageBlobs=>{
		//     let imageJSON = imageBlobs.map((image,index)=>{
		//         return {
		//             url: URL.createObjectURL(image),
		//             priority: Math.ceil(Math.random()*3)
		//         }
		//     });

		// })
	};
}
