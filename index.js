
let obj=[
    {
        name:"SkinStore Clone",
        URL:"rajsaurabh78.github.io\img\skin.png",
        feat:"",
        tech:"Html | CSS | JavaScript | Github ",
    },
    {
        name:"Wrike Clone",
        URL:"rajsaurabh78.github.io\img\wrike.png",
        feat:"",
        tech:"Html | CSS | JavaScript | Github "
    },
    {
        name:"Get Harvest",
        URL:"rajsaurabh78.github.io\img\integ.png",
        feat:"",
        tech:"Html | CSS | JavaScript | Github "
    }
    // {
    //     name:"",
    //     img:"",
    //     feat:"",
    //     tech:""
    // },
    // {
    //     name:"",
    //     img:"",
    //     feat:"",
    //     tech:""
    // }
]

let display=()=>{
    obj.forEach((el)=> {
        let par=document.querySelector("#par");
        let div=document.createElement("div")
        let div1=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div4=document.createElement("div")
        let h1=document.createElement("h1")
        h1.innerText=el.name;
        let h2=document.createElement("h2")
        h2.innerText=el.feat;
        let h3=document.createElement("h2")
        h3.innerText=el.tech;
        let img=document.createElement("img")
        img.src=el.URL;
        let btn1=document.createElement("button")
        btn1.innerText="git"
        let btn2=document.createElement("button")
        btn2.innerText="net"
        div1.append(h1)
        div2.append(img)
        div3.append(h2,h3)
        div4.append(btn1,btn2)
        div.append(div1,div2,div3,div4)
        par.append(div)
    });
}
display();
