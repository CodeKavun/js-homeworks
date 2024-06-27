const elementData = {};

document.querySelector('.info-buttons').childNodes.forEach(element => {
    element.addEventListener('click', () => setTimeout(() => {
        const style = getComputedStyle(element)

        elementData.color = style.color,
        elementData.bgColor = style.backgroundColor,
        elementData.fontSize = style.fontSize,
        elementData.width = style.width,
        elementData.height = style.height

        document.getElementById('info').innerText = `Color: ${elementData.color}\nBG Color: ${elementData.bgColor}\nFont Size: ${elementData.fontSize}\nWidth: ${elementData.width}\nHeight: ${elementData.height}`
    }, 1000));
});