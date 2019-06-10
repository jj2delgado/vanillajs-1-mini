
let count = 0
let counter = document.getElementById('counter')

function increase(){
    count++
    counter.innerText = count
}

function decrease(){
    count--
    counter.innerText = count
}

function reset(){
    count = 0
    counter.innerHTML = `<mark>${count}</mark>`
}

function selectTheme(theme){
    document.getElementsByTagName('body')[0].className = theme
    document.getElementsByTagName('main')[0].className = theme
    const btns = document.getElementsByTagName('button')
        for(let i = 0; i < btns.length; i++){
            btns[i].className = theme
        }
}
