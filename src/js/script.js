let title = document.querySelectorAll('.title')
let subtext = document.querySelectorAll('.subtext')


// 0. The goal is to create a "hover effect" where:
// when the user hovers over the title => the visibility of the subtext becomes visible
// there must be a animation on the subtext where  => subtext transitions from being hidden to visible

//2. trying to change the visibility of the subtext
function showcontent(){
    subtext.forEach(text => {
        text.style.visibility = 'visible'
    })
}

subtext.forEach(text => {
    text.style.visibility = 'hidden'
})

//1.  each title must drop down the subheading
title.forEach(tit =>{
    tit.addEventListener('mouseover', showcontent)
})

//                                      Thoughts:

// maybe hide the buttons as well and make them animate with the subtext => create a class 