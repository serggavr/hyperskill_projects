let imageInput = document.getElementById('file-input');
let canvas = document.getElementById('canvas')
let brightnessInput = document.getElementById('brightness');
let contrastInput = document.getElementById('contrast');
let transparentInput = document.getElementById('transparent');
let saveButton = document.getElementById('save-button');
let ctx = canvas.getContext('2d');
let image = null;

brightnessInput.addEventListener('change', changeImage);
contrastInput.addEventListener('change', changeImage);
transparentInput.addEventListener('change', changeImage);


imageInput.addEventListener('change', function(img) {
    if (img.target.files) {
        let file = img.target.files[0];
        let imgReader = new FileReader();
        imgReader.readAsDataURL(file);
        imgReader.onloadend = function(e) {
            image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                canvas.height = image.height;
                canvas.width = image.width;
                ctx.drawImage(image,0,0);
            }
        }
    }
})

function truncate(value) {
    if (value > 255) return 255;
    if (value < 0 ) return 0;
    return value;
}

function changeImage() {
    ctx.drawImage(image,0,0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const factor = 259*(255+Number(contrastInput.value))/(255*(259-Number(contrastInput.value)))
    let pixels = imageData.data;
    for(let i = 0; i < pixels.length - 1; i += 4) {
        pixels[i] = truncate(factor * (pixels[i] - 128) + 128 + Number(brightnessInput.value))
        pixels[i+1] = truncate(factor * (pixels[i+1] - 128) + 128 + Number(brightnessInput.value))
        pixels[i+2] = truncate(factor * (pixels[i+2] - 128) + 128 + Number(brightnessInput.value))
        pixels[i+3] = pixels[i+3] * Number(transparentInput.value);
    }
    ctx.putImageData(imageData, 0, 0);
    console.log("changeImage done")
}

// function changeImage() {
//     ctx.drawImage(image,0,0);
//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const factor = 259*(255+128)/(255*(259-128))
//     let pixels = imageData.data;
//     for(let i = 0; i < pixels.length - 1; i += 4) {
//         pixels[i] = truncate(factor * (pixels[i] - 128) + 128 + 92)
//         pixels[i+1] = truncate(factor * (pixels[i+1] - 128) + 128 + 92)
//         pixels[i+2] = truncate(factor * (pixels[i+2] - 128) + 128 + 92)
//         pixels[i+3] = pixels[i+3] * 0.8;
//     }
//     ctx.putImageData(imageData, 0, 0);
//     console.log("changeImage done")
//     console.log(imageData)
// }

saveButton.addEventListener('click', function () {
    let downloadImage = canvas.toDataURL('image/png', 1);
    let element = document.createElement('a');
    element.download = 'result.png';
    element.href = downloadImage;
    element.click();
    document.body.removeChild(element);
})

// saveButton.addEventListener('click', changeImage)