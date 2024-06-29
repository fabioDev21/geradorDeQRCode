async function buscaQRCode(){

    try {
        const data = document.querySelector("#inputSearchQrc").value
        
        if(data == ""){
            throw new Error("Dados nulos, prencher o formulário corretamente!")
        }

        await fetch(`https://quickchart.io/qr?text=${data}`)
        .then(res => mostraQRCode(res))

    } catch (error) {
        alert(error)
    }
    
}

function mostraQRCode({url}){
    
    const qrBox = document.querySelector(".qrBox")
    const img = document.createElement("img")

    if(qrBox.className == 'qrBox ativo'){
        const imgExistente = document.querySelector(".qrBox #qrImage")
        imgExistente.src = url
        imgExistente.title = url

    } else {
        qrBox.append(img)
        img.id = "qrImage"
        img.src = url
        img.title = url
        qrBox.classList.add("ativo")
    }
}

searchQrc.addEventListener("click", buscaQRCode)
document.querySelector("#inputSearchQrc").addEventListener("keydown", (e) => {
    if(e.key == "Enter"){ buscaQRCode(searchQrc) }
})