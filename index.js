
let obj=[
    {
        name:"SkinStore Clone",
        URL:"https://d1gzz21cah5pzn.cloudfront.net/img/websites/s/ski/skinstore.com-desktop@2x.1652819931.jpg",
        feat:" "+"\n"+"Skinstore is an online retailer that sells premium beauty, clinical skincare, and luxury spa product.",
        tech:" Sign-in | Sign-up | Cart page | Navbar | Footer "+"\n"+"\n"+"Techstack  :-"+"\n"+"↪ HTML | CSS | JavaScript | Github "+"\n"+"\n"+"An individual project developed within 4 days."
    },
    {
        name:"Wrike Clone",
        URL:"https://management.org/wp-content/uploads/2022/03/Wrike-homepage-1024x483.png",
        feat:" "+"\n"+"Wrike is an easy-to-use tool for streamlining the internal project management and collaboration processes between team members.",
        tech:" Sign-in | Sign-up | Price page | Wrike Blog | Tour page | Help center page"+"\n"+"\n"+"Techstack  :-"+"\n"+"↪ HTML | CSS | JavaScript | Github "+"\n"+"\n"+"Area of responsibility  :-"+"\n"+"↪ WrikeBlog page"+"\n"+"\n"+"A collaborative project developed within 4 days, with a team of 5 members.",
      
    },
    {
        name:"Get Harvest Clone",
        URL:"https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/homepage/test/spread.png?width=1323&name=spread.png",
        feat:" "+"\n"+"Harvest is a cloud-based time tracking tool designed for businesses of all sizes.",
        tech:" Sign-in | Sign-up | Integrations page | Why harvest page | Features page | Customers page"+"\n"+"\n"+"Techstack  :-"+"\n"+"↪ HTML | CSS | JavaScript | Github "+"\n"+"\n"+"Area of responsibility  :-"+"\n"+"↪ Integrations page"+"\n"+"\n"+"A collaborative project developed within 4 days, with a team of 5 members.",
      
    },
    {
        name:"Student Registration System",
        URL:"https://user-images.githubusercontent.com/108000350/213931898-5ba7c970-87ad-4c29-bdba-16af83da0d25.png",
        feat:" "+"\n"+"This automated application help Institute to enroll students efficiently, create batches under a course and allocates the students in a batch.",
        tech:" Sign-in | Sign-up | Cart page | Navbar | Footer "+"\n"+"\n"+"Techstack  :-"+"\n"+"↪ JAVA | MySql | JDBC | Github "+"\n"+"\n"+"An individual project developed within 4 days."
    },
    {
        name:"Online Customer Service Center",
        URL:"https://camo.githubusercontent.com/84f591541f458b2bbc86ec12377ed484055403e45711adafb257d22e1de91335/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d31735559675a327153496e795230636e5746586d434a57334b6369534e7038314e",
        feat:" "+"\n"+"Service Today is an Online Customer Service Center management system which helps in storing and retrieving Information regarding Customer data, Issue data and Operator data. Customers can raise issues that they are facing and the Operators can provide Solution to their issues.",
        tech:" Sign-in | Sign-up | Cart page | Navbar | Footer "+"\n"+"\n"+"Techstack  :-"+"\n"+"↪ JAVA | Spring | Spring Boot | Hibernate | MySql | Github "+"\n"+"\n"+"A Collabrative Project Consisting Of the 4 Developer within 4 days."
    }
]

let display=()=>{
    obj.forEach((el,i)=> {
        let par=document.querySelector("#demo");
        let div=document.createElement("div")
        let div1=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div4=document.createElement("div")
        let h1=document.createElement("h1")
        let l1=document.createElement("hr");
        let l2=document.createElement("hr");
        h1.innerText=el.name;
        let h2=document.createElement("h2")
        h2.innerText=el.feat;
        let h3=document.createElement("h3")
        h3.innerText="Features :-"+"\n"+"↪"+el.tech;
        let img=document.createElement("img")
        img.src=el.URL;
        let btn1=document.createElement("button")
        btn1.innerText="GitHub"
        btn1.onclick=(()=>{
            githubLin(i);
        })
        let btn2=document.createElement("button")
        btn2.innerText="Deploy"
        btn2.onclick=(()=>{
            deployLin(i);
        })
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
let deploy=["https://spontaneous-crumble-e389b6.netlify.app/","https://profound-lamington-2fcd8c.netlify.app/index.html","https://vermillion-gumdrop-83c95e.netlify.app/index.html"]
let github=["https://github.com/rajsaurabh78/precious-birds-1544","https://github.com/Durgesh9871/Wrike","https://github.com/farhaz1o/standing-frog-1055","https://github.com/rajsaurabh78/disagreeable-level-7374","https://github.com/RitishFG/abstracted-wren-623"]
let deployLin=(i)=>{
    window.location.href=deploy[i];
    display()
}
let githubLin=(i)=>{
    window.location.href=github[i];
    display()
}




//+++++++++++++++++++++++++++++++++vavbar
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
//+++++++++++++++++++++++++++++++++vavbar
