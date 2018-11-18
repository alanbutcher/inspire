const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const apiUrl = url + encodeURIComponent(url2);


// @ts-ignore
const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {


	getImage(drawBgImg) {
		// ^^^^^^^ How do you call this function?
		// console.log("Looking for a good pic")
		imgApi().then(res => {
			console.log('Image Data:', res.data)
			let pictures = res.data.images;
			let picture = pictures[Math.floor(Math.random() * pictures.length-1)]
			drawBgImg(picture.url);
		})
	}
}
