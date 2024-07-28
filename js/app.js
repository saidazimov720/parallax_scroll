const swiper = new Swiper('.swiper',{
    mousewheel:true,
    direction: 'vertical',
    speed:1700,
    parallax: true
})
document.querySelectorAll('.header_content h1').forEach(e =>{
    e.innerHTML = e.textContent.replace(/ (-|#|){1}/g, s => s[1]+s[0]).replace(/(\S*)/g, m =>{
        return m.replace(/\S(-|#)?/g, '<span class="letter">$&</span>')
    })
})