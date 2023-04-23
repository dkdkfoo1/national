const disney_p = document.querySelectorAll('main .con3 .align2 .p')
const disney_span = document.querySelectorAll('main .con3 .align2 .p p')



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