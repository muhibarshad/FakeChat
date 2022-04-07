let innerText = document.getElementById('text');
let innermessage = innerText.innerHTML;
let sendIcon = document.getElementById('send-icon');
let html = "";
let htmlUn = "";
let arr = [
    {
        name: `My name is unknown!`,
        yourName: `What is your name!`,
        good: `your name is very nice!`
    },
    {
        age: `My age is 19`,
        city: `I am living in Jannah :xd🤣`
    }
    , {
        religion: `Are you muslim?`,
        yes: `I am  Muslim!😊`
    },
    {
        ok: `Ok! Good Night🌃`,
        TC: `Take Care!❤️`
    },
    {
        love: `No :LOL I never love you okie!😒`,
        hate: `I hate You ya mera area hai!`
    },
    {
        hi:`Hi How are you?`,
        fine:`I am fine,AllhumdullilAllah.`
    }
];
sendIcon.addEventListener('click', (e) => {
    let innerText = document.getElementById('text');
    let innermessage = innerText.innerText;
    html += `<div class="me">${innermessage}</div>`;

if(innermessage.toLocaleLowerCase().includes('name'))
    {
        setTimeout(()=>{
            htmlUn += `<div class="leftUnknown">
            <img src="strange.jpg" alt="">
            <div class="Unknown">${arr[0].name}</div>
        </div>`;
            let showUn = document.getElementById('showUn');
            showUn.innerHTML = htmlUn;
        },3000)
        setTimeout(()=>{
            htmlUn += `<div class="leftUnknown">
            <img src="strange.jpg" alt="">
            <div class="Unknown">${arr[0].yourName}</div>
        </div>`;
            let showUn = document.getElementById('showUn');
            showUn.innerHTML = htmlUn;
        },6000)
}
else if(innermessage.toLocaleLowerCase().includes('muhib arshad')){
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[0].good}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },3000)
}
else if(innermessage.toLocaleLowerCase().includes('age')){
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[1].age}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },3000)
}
else if(innermessage.toLocaleLowerCase().includes('city')){
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[1].city}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },3000)
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[2].religion}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },5000)
}
else if(innermessage.toLocaleLowerCase().includes('love')){
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[4].love}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },3000)
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[4].hate}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },5000)
}
else if(innermessage.toLocaleLowerCase().includes('muslim')){
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[2].yes}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },3000)
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[2].religion}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },5000)
}
else if(innermessage.toLocaleLowerCase().includes('night')){
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[3].TC}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },3000)
}
else if(innermessage.toLocaleLowerCase().includes('how are you')){
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[5].fine}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },3000)
}
else if(innermessage.toLocaleLowerCase().includes('hi')){
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">${arr[5].hi}</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },3000)
}
else{
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">Sorry!I have not answer of your that question</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },3000)
    setTimeout(()=>{
        htmlUn += `<div class="leftUnknown">
        <img src="strange.jpg" alt="">
        <div class="Unknown">I am working on it!😊</div>
    </div>`;
        let showUn = document.getElementById('showUn');
        showUn.innerHTML = htmlUn;
    },5000)

}

     let showMessage = document.getElementById('message');
    showMessage.innerHTML = html;
    innerText.innerHTML = "";
})

