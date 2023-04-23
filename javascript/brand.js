const brand_p = document.querySelector('.con3 .align2')
const brand_span = document.querySelector('main .con3 .align2 p')

// 디즈니 부분 
console.log(brand_p,brand_span)


brand_span.style.opacity = '0'

brand_p.addEventListener('mouseover',(e)=>{
    brand_span.style.opacity = '1'
    brand_span.style.transition = 'opacity 0.5s'
})
brand_p.addEventListener('mouseout',(e)=>{
    brand_span.style.opacity = '0'
})

//
const explanation_img = document.querySelectorAll('main .con1 .align .img')
const explanation = document.querySelectorAll('main .con1 .align p')

// 디즈니 부분 

for(let i of explanation){i.style.opacity = '0'}

explanation_img.forEach((target,index)=>{
    target.addEventListener('mouseover',(e)=>{
        for(let i of explanation){
            i.style.opacity = '0'
        }
        explanation[index].style.opacity = '1'
        explanation[index].style.transition = 'opacity 0.5s'
    })
})