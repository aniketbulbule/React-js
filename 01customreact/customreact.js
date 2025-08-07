function customRender(reactElement,container){

    //! way 1
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.href)
    domElement.setAttribute('target',reactElement.target)
    mainConatiner.appendChild(domElement)
    */  //! it is not good way when 3rd attribute we get problem

    //!when we want open google page
    // domElement.addEventListener('click',()=>[
    //     window.location.href="https://google.com"
    // ])

    //! way 2

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop=='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
    
}

const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:"click me to visit google"
}

const mainConatiner=document.querySelector('#root')

customRender(reactElement,mainConatiner) 