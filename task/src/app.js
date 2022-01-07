let imageInput = document.getElementById('file-input');
let canvas = document.getElementById('canvas')
let brightnessInput = document.getElementById('brightness');
let contrastInput = document.getElementById('contrast');
let transparentInput = document.getElementById('transparent');
let saveButton = document.getElementById('save-button');
let ctx = canvas.getContext('2d');

// const pixels = imageData.data;
// let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

imageInput.addEventListener('change', function(img) {
    if (img.target.files) {
        let file = img.target.files[0];
        let imgReader = new FileReader();
        imgReader.readAsDataURL(file);
        imgReader.onloadend = function(e) {
            let image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                canvas.height = image.height;
                canvas.width = image.width;
                ctx.drawImage(image,0,0);
            }
        }
    }
})

// brightnessInput.addEventListener('change', function () {
//     for(let i = 0; i < imageData.data.length - 1; i++) {
//         if (i % 4 !== 0) {
//             imageData.data[i] = imageData.data + brightnessInput.value;
//             if (imageData.data[i] > 255) {
//                 imageData.data[i] = 255;
//             }
//             if (imageData.data[i] < 0) {
//                 imageData.data[i] = 0;
//             }
//             // console.log(imageData.data[i]);
//         }
//     }
//     ctx.putImageData(imageData, 0, 0);
// })
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
brightnessInput.addEventListener('change', function () {
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData.data)
    for(let i = 0; i < imageData.data.length - 1; i++) {
        if (i === 0 || i % 3 !== 0) {
            imageData.data[i] = imageData.data[i] + brightnessInput.value;
            if (imageData.data[i] > 255) {
                imageData.data[i] = 255;
            }
            if (imageData.data[i] < 0) {
                imageData.data[i] = 0;
            }
            // console.log(imageData.data[i]);
        }
    }
    ctx.putImageData(imageData, 0, 0);
    console.log("brightnessInput done")
})

saveButton.addEventListener('click', function () {
    console.log(pixels)
    console.log(brightnessInput.value)
    console.log("imageData.data", imageData.data)
    console.log("imageData", imageData)
    console.log(ctx.getImageData(0, 0, canvas.width, canvas.height).data)
    console.log(ctx.getImageData(0, 0, canvas.width, canvas.height))
    console.log({pixels})
})