//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from '../image/image-service.js'

let imageService = new ImageService()

function drawBgImg(imgUrl) {
  document.getElementById('body').style.backgroundImage = `url(${imgUrl})`
}

export default class ImageController {

  constructor() {
    //this will fire off get image right away
    this.getImage()
  }
  getImage() {
    imageService.getImage(drawBgImg)
  }

}

