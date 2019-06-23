// for(let x=0; x < image.width; x++){
//     for(let y=0; y< image.height; y++){
//         let idx = (x + (y * image.width)) * 4
//         imageData.data[idx] = imageData.data[idx] * 1.9

//     }
// }

addEventListener('message', (d) => {
    const imageData = d.data
    const w = imageData.width
    const h = imageData.height
    const data = imageData.data

    for(let x=0; x < w; x++){
        for(let y=0; y< h; y++){
            let idx = (x + (y * w)) * 4
            data[idx] = data[idx] * 1.2
        }
    }

    postMessage(imageData, [imageData.data.buffer])
    
})