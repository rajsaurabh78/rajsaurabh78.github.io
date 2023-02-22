
let obj=[
    {
        name:"SkinStore Clone",
        URL:"https://d1gzz21cah5pzn.cloudfront.net/img/websites/s/ski/skinstore.com-desktop@2x.1652819931.jpg",
        feat:" "+"\n"+"Skinstore is an online retailer that sells premium beauty, clinical skincare, and luxury spa product.",
        tech:" Sign-in | Sign-up | Cart page | Navbar | Footer "+"\n"+"\n"+"Techstack  :-"+"\n"+"↪ HTML | CSS | JavaScript | Github "+"\n"+"\n"+"An individual project developed within 4 days.",
        deploy:"https://spontaneous-crumble-e389b6.netlify.app/",
    },
    {
        name:"Wrike Clone",
        URL:"https://management.org/wp-content/uploads/2022/03/Wrike-homepage-1024x483.png",
        feat:" "+"\n"+"Wrike is an easy-to-use tool for streamlining the internal project management and collaboration processes between team members.",
        tech:" Sign-in | Sign-up | Price page | Wrike Blog | Tour page | Help center page"+"\n"+"\n"+"Techstack  :-"+"\n"+"↪ HTML | CSS | JavaScript | Github "+"\n"+"\n"+"Area of responsibility  :-"+"\n"+"↪ WrikeBlog page"+"\n"+"\n"+"A collaborative project developed within 4 days, with a team of 5 members.",
        deploy:"https://spontaneous-crumble-e389b6.netlify.app/",
    },
    {
        name:"Get Harvest Clone",
        URL:"https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/homepage/test/spread.png?width=1323&name=spread.png",
        feat:" "+"\n"+"Harvest is a cloud-based time tracking tool designed for businesses of all sizes.",
        tech:" Sign-in | Sign-up | Integrations page | Why harvest page | Features page | Customers page"+"\n"+"\n"+"Techstack  :-"+"\n"+"↪ HTML | CSS | JavaScript | Github "+"\n"+"\n"+"Area of responsibility  :-"+"\n"+"↪ Integrations page"+"\n"+"\n"+"A collaborative project developed within 4 days, with a team of 5 members.",
        deploy:"https://spontaneous-crumble-e389b6.netlify.app/",
    }
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
        let l1=document.createElement("hr");
        let l2=document.createElement("hr");
        let a=document.createElement("a")
        a.src=el.deploy
        h1.innerText=el.name;
        let h2=document.createElement("h2")
        h2.innerText=el.feat;
        let h3=document.createElement("h3")
        h3.innerText="Features :-"+"\n"+"↪"+el.tech;
        let img=document.createElement("img")
        img.src=el.URL;
        let btn1=document.createElement("button")
        btn1.innerText="GitHub"
        let btn2=document.createElement("button")
        btn2.innerText="Deploy"
        btn2.style.textAnchor=el.deploy
        div1.append(h1)
        div2.append(img)
        div3.append(h2,l1,h3,l2)
        div4.append(btn1,btn2)
        div.append(div1,div2,div3,div4)
        par.append(div)
    });
}
display();

$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY>20){
            $("#navbar").addClass("sticky");
        }else{
            $("#navbar").removeClass("sticky");
        }
    })
})


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
