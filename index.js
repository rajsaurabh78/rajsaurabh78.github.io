
let obj=[
    {
        name:"SkinStore Clone",
        URL:"https://static.thcdn.com/images/xlarge/webp/widgets/121-us/38/1180x450-082838.jpg",
        feat:"",
        tech:"Html | CSS | JavaScript | Github ",
    },
    {
        name:"Wrike Clone",
        URL:"https://static.thcdn.com/images/xlarge/webp/widgets/121-us/38/1180x450-082838.jpg",
        feat:"",
        tech:"Html | CSS | JavaScript | Github "
    },
    {
        name:"Get Harvest",
        URL:"https://static.thcdn.com/images/xlarge/webp/widgets/121-us/38/1180x450-082838.jpg",
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
        let par=document.querySelector("#demo");
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
        h3.innerText="Techstack  "+"\n"+el.tech;
        let img=document.createElement("img")
        img.src=el.URL;
        let btn1=document.createElement("button")
        btn1.innerText="GitHub"
        let btn2=document.createElement("button")
        btn2.innerText="Deploy"
        div1.append(h1)
        div2.append(img)
        div3.append(h2,h3)
        div4.append(btn1,btn2)
        div.append(div1,div2,div3,div4)
        par.append(div)
    });
}
display();


let image=[
    "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/04/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot2-1180x450-021804.png",
    "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/16/0701-STDCRE-38244-SS-BME-Skinstore-July-4-Assets-Shot_01-1180x450-095516.jpg",
    "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/38/1180x450-082838.jpg",
    "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/0712_THG0034801_SS_JUL_22_SHOT_03_1180x450-061455.jpg"
    ]

    let leftbtn=document.querySelector("#lbtn")
    let rightbtn=document.querySelector("#rbtn")
    let imagestate=0;
    let crau=document.querySelector("#crauser")

    rightbtn.addEventListener("click",function(){
        imagestate++;
        if(imagestate===image.length){
            imagestate=0;
        }
        crau.src=image[imagestate];
    })

    leftbtn.addEventListener("click",function(){
        imagestate--;
        if(imagestate<0){
            imagestate=image.length-1;
        }
        crau.src=image[imagestate];
    })


    let dis=(x)=>{
        x++
    }