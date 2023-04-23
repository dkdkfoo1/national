const disney_p = document.querySelectorAll('.con2 .align p')
const disney_span = document.querySelectorAll('.con2 .align p span')

// 디즈니 부분 

for(let i of disney_span){i.style.opacity = '0'}

disney_p.forEach((target,index)=>{
    target.addEventListener('mouseover',(e)=>{
        for(let i of disney_span){
            i.style.opacity = '0'
        }
        disney_span[index].style.opacity = '1'
        disney_span[index].style.transition = 'opacity 0.5s'
    })
})