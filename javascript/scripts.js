function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")

    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const uploadImage = reader.result
            
            changeMemeImage(uploadImage)
            // document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList(){
    const memesObject = [
        {
            "name": "chapolin",
            "path": "images/chapolin.jpg"
        },
        {
            "name": "chloe",
            "path": "images/chloe.jpg"
        },
        {
            "name": "nazaré confusa",
            "path": "images/nazare_confusa.jpg"
        },
        {
            "name": "nazaré fugindo",
            "path": "images/nazare_fugindo.jpg"
        },
        {
            "name": "sorriso nervoso",
            "path": "images/sorriso_nervoso.jpg"
        }
    ]
    return memesObject;
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#meme-list")

    imageList.forEach(image => {
        let newOption = document.createElement("option")
        newOption.text = image.name.toUpperCase()
        newOption.value = image.path
        memeSelector.appendChild(newOption) 
    });
}

async function changeMemeImage(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url("${photo}")`
}

async function main(){
    const memesImageList = await mapImageList()

    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemeImage(memesImageList[0].path)
}

main()