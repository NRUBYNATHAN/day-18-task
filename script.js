 //SORRY I TRY THIS TASK MORE THEN TIME , I GET ONLY REST DATAS AND SEPARATELY I DO WEATHER DATA, 
//BUT I DID NOT KNOW HOW TO MERGE TWO CODES
//PLS SOLVE THIS PROBLEM AFTER VALIDATION,BECAUSE ITS HELPS MORE.


 async function res(){
    try{
    var res_url="https://restcountries.com/v3.1/all"
    var fetch_url=await fetch(res_url)
    var con_json=await fetch_url.json()
    
    var create_div0=document.createElement("div")
    create_div0.classList.add("container")

    var create_div00=document.createElement("div")
    create_div00.classList.add("row")
for(var i = 0;i<con_json.length;i++){
   

    var create_div1=document.createElement("div")
    create_div1.classList.add("col-lg-4")

    var create_div2=document.createElement("div")
    create_div2.classList.add("col-sm-12")

    var create_div3=document.createElement("div")
    create_div3.classList.add("card")

    var create_div4=document.createElement("div")
    create_div4.classList.add("card-header")
    
    var create_h3=document.createElement("h3")
    create_h3.innerText=`${con_json[i].name.common}`

    var create_div5=document.createElement("div")
    create_div5.classList.add("card-body")

    var create_p1=document.createElement("p")
    create_p1.innerText=`CAPITAL: ${con_json[i].capital}`

    var create_p2=document.createElement("p")
    create_p2.innerText=`REGION: ${con_json[i].region}`

    var create_p3=document.createElement("p")
    create_p3.innerText=`COUNTRY CODE : ${con_json[i].cca3}`

    var create_p4=document.createElement("p")
    create_p4.innerText=`${con_json[i].flags.png}`
    

    var create_p5=document.createElement("p")
    create_p5.classList.add("latlan")
    create_p5.innerText=`LAT : ${con_json[i].latlng[0]}`

    var create_p6=document.createElement("p")
    create_p6.classList.add("latlan1")
    create_p6.innerText=`LNG : ${con_json[i].latlng[1]}`

   
    
    var create_btns=document.createElement("button")
    create_btns.setAttribute("class","btn btn-primary")
    create_btns.innerText="clicktheweather"

    

    
create_div5.append(create_p1)
create_div5.append(create_p2)
create_div5.append(create_p3)
create_div5.append(create_p4)
create_div5.append(create_p5)
create_div5.append(create_p6)
create_div5.append(create_btns)
create_div4.append(create_h3)
create_div3.append(create_div4)
create_div3.append(create_div5)
create_div2.append(create_div3)
create_div1.append(create_div2)
create_div00.append(create_div1)
create_div0.append(create_div00)
document.querySelector("body").insertAdjacentElement("beforeend",create_div0)

    

}}
    catch{
        
        document.querySelector("body").innerText="this url is not valid 😣😣"
        
}
  
    
   
}
 

//  async function data(){
//     var url="https://api.openweathermap.org/data/2.5/weather?lat=13.0827&lon=80.2707&appid=350991bd648b48b6d958f0b4aaf3e625"
// let fet=await fetch(url)
// let jso=await fet.json()
// var ans=document.querySelector(".btn btn-primary")
// ans.addEventListener("click",(e)=>{
// e.preventDefault()



//     let cre_div=document.createElement("div")
//     let cre_p1=document.createElement("p")
//     cre_p1.innerText=`WEATHER ID : ${jso.weather[0].id}`
//     let cre_p2=document.createElement("p")
//     cre_p2.innerText=`WEATHER MAIN : ${jso.weather[0].main}`
//     let cre_p3=document.createElement("p")
//     cre_p3.innerText=`WEATHER ICON : ${jso.weather[0].icon}`
//     let cre_p4=document.createElement("p")
//     cre_p4.innerText=`MAIN TEMP : ${jso.main.temp}`
//     let cre_p5=document.createElement("p")
//     cre_p5.innerText=`MAIN PRESSURE : ${jso.main.pressure}`
//     let cre_p6=document.createElement("p")
//     cre_p6.innerText=`MAIN HUMITITY : ${jso.main.humidity}`
//     let cre_p7=document.createElement("p")
//     cre_p7.innerText=`WIND SPEED : ${jso.wind.speed}`
//     let cre_p8=document.createElement("p")
//     cre_p8.innerText=`WIND DEG : ${jso.wind.deg}`

//     cre_div.append(cre_p1)
//     cre_div.append(cre_p2)
//     cre_div.append(cre_p3)
//     cre_div.append(cre_p4)
//     cre_div.append(cre_p5)
//     cre_div.append(cre_p6)
//     cre_div.append(cre_p7)
//     cre_div.append(cre_p8)
//     document.querySelector("body").insertAdjacentElement("afterbegin",cre_div)
// })

// }
// data()

res()


