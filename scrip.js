let car = document.querySelector('.car_m')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let foyda = document.querySelector('.foyda')
let foyda2 = document.querySelector('.foyda2')
let doe = document.querySelector('.do')
let nav = document.querySelector('nav')

car.addEventListener('click', function() {
    if (car.src == 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-QfcfS0TW038HOmf5XDADimvOIRxWO00WQ&usqp=CAU') {
        car.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPHLi3zmZwLREItQ5WaKNg4kpyCB8wpQeDSG-Q89L7Z5Fv_BpGEvxMlVLgQMTUALgvbg&usqp=CAU'
    }
    else if (car.src == 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPHLi3zmZwLREItQ5WaKNg4kpyCB8wpQeDSG-Q89L7Z5Fv_BpGEvxMlVLgQMTUALgvbg&usqp=CAU') {
        car.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-QfcfS0TW038HOmf5XDADimvOIRxWO00WQ&usqp=CAU'
    }
})

btn1.addEventListener('click' ,function() {
    if (btn1.style.backgroundColor = '#FF7D41') {
        btn1.style.backgroundColor = 'white'
        btn1.style.color = '#FF7D41'
        btn2.style.backgroundColor = '#FF7D41'
        btn2.style.color = 'white'
        foyda2.style.visibility = 'hidden'
        foyda.style.visibility = 'visible'
    }
    else if (btn2.style.backgroundColor = 'white') {
        btn2.style.backgroundColor = '#FF7D41'
        btn2.style.color = 'white'
        btn1.style.backgroundColor = 'white'
        btn1.style.color = '#FF7D41'
    }
})
btn2.addEventListener('click' ,function() {
    if (btn1.style.backgroundColor = 'white') {
        btn1.style.backgroundColor = '#FF7D41'
        btn1.style.color = 'white'
        btn2.style.backgroundColor = 'white'
        btn2.style.color = '#FF7D41'
        foyda.style.visibility = 'hidden'
        foyda2.style.visibility = 'visible'
        foyda2.style.transform = 'translate(0px ,-183px)'
    }
    else if (btn2.style.backgroundColor = 'white') {
        btn2.style.backgroundColor = '#FF7D41'
        btn2.style.color = 'white'
        btn1.style.backgroundColor = 'white'
        btn1.style.color = '#FF7D41'
    }
})
if (window.scroll < '1000px') {
   saoi = document.createElement('i')
   saoi.classList = 'bi bi-list'
   nav.appendChild(saoi)

}
