
const scrollClick=document.querySelectorAll('a[href^="#"]')

function scrolPage(e){
    e.preventDefault()
    const href=e.currentTarget.getAttribute('href')
    const secao= document.querySelector(href)

    secao.scrollIntoView({
        behavior:'smooth',
        block:'start'
    })
}


scrollClick.forEach((item)=>{
    item.addEventListener('click',scrolPage)
})


function clickScrol(){
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    }


const scrolToUp=document.querySelector('.scrol_btn')
scrolToUp.addEventListener('click',clickScrol)


