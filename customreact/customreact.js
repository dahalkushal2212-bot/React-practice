function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute("href", reactElement.prop.href);
    domElement.setAttribute("target", reactElement.prop.target);
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for (const props in reactElement.prop) {
        if (props === "children") continue;
        domElement.setAttribute(props, reactElement.prop[props]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type : "a",
    prop : {
        href : "https://www.google.com",
        target : "_blank",
    },
    Children : "click me to visit google"
}


const maincontainer = document.getElementById('root');
customRender(reactElement, maincontainer);