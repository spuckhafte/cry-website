let bannerSlogan = document.querySelector('#banner-slogan')

function typingEffect(text) {
    bannerSlogan.innerHTML = "A"
    let textArray = text.split("")
    let index = 0
    let timer = setInterval(() => {
        if (index == textArray.length) {
            clearInterval(timer)
            setTimeout(() => {
                clearInterval(timer)
                deleteEffect()
            }, 1500)
        } else {
            bannerSlogan.innerHTML += textArray[index]
            index++
        }
    }, 100)
}

function deleteEffect() {
    let textArray = bannerSlogan.innerHTML.split("")
    textArray.shift()
    let index = textArray.length - 1
    let timer = setInterval(() => {
        if (index == -1) {
            clearInterval(timer)
            setTimeout(() => {
                bannerSlogan.innerHTML = " bot based on blockchain."
                typingEffect(bannerSlogan.innerHTML)
            }, 1000)
        } else {
            textArray.pop()
            bannerSlogan.innerHTML = "A" + textArray.join("")
            index--
        }
    }, 50)
}
typingEffect(" bot based on blockchain.")

document.querySelector('.vote-tabs').addEventListener('click', (e) => {
    window.open('https://top.gg/servers/930378932702838834');
});