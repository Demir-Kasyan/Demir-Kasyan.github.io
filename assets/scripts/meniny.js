class Zaznam{
    constructor(den, SKsviatky, CZsviatky,HU,PL, AT) {
        this.den = den;
        this.SKsviatky = SKsviatky;
        this.CZsviatky = CZsviatky;
        this.HU = HU;
        this.PL = PL;
        this.AT = AT;
    }
    toString(){
        return "SKsviatky > " + this.SKsviatky + "\n" +
            "CZsviatky > " + this.CZsviatky + "\n" +
            "HU > " + this.HU + "\n" +
            "PL > " + this.PL + "\n" +
            "AT > " + this.AT + "\n";
    }
    toStringWithDate(){
        return this.den + "\n" + "SKsviatky > " + this.SKsviatky + "\n" +
           "CZsviatky > " + this.CZsviatky + "\n" +
            "HU > " + this.HU + "\n" +
            "PL > " + this.PL + "\n" +
            "AT > " + this.AT + "\n";
    }
}

var array = [];
var names = [];
//читаем файлик и записываем в массив
function readXml(xmlFile){
    var xmlDoc;

    if(typeof window.DOMParser != "undefined") {
        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET",xmlFile,false);
        if (xmlhttp.overrideMimeType){
            xmlhttp.overrideMimeType('text/xml');
        }
        xmlhttp.send();
        xmlDoc=xmlhttp.responseXML;
    }
    else{
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
        xmlDoc.load(xmlFile);
    }
    var tagObj=xmlDoc.getElementsByTagName("meniny");
    var arr = [];
    for (const tag of tagObj[0].getElementsByTagName("zaznam")) {
        let some = "";
        if(tag.getElementsByTagName("CZ")[0] !== undefined){
            some = tag.getElementsByTagName("CZ")[0].childNodes[0].nodeValue;
        }
        else if(tag.getElementsByTagName("SKsviatky")[0] !== undefined){
            some = tag.getElementsByTagName("SKsviatky")[0].childNodes[0].nodeValue;

        }
        arr.push(
            new Zaznam(
                tag.getElementsByTagName("den")[0] !== undefined?tag.getElementsByTagName("den")[0].childNodes[0].nodeValue:"",
                tag.getElementsByTagName("SK")[0] !== undefined?tag.getElementsByTagName("SK")[0].childNodes[0].nodeValue:"",
                tag.getElementsByTagName("SKd")[0] !== undefined?tag.getElementsByTagName("SKd")[0].childNodes[0].nodeValue:"",
                some,
                tag.getElementsByTagName("PL")[0] !== undefined?tag.getElementsByTagName("PL")[0].childNodes[0].nodeValue:"",
                tag.getElementsByTagName("AT")[0]!== undefined?tag.getElementsByTagName("AT")[0].childNodes[0].nodeValue: ""
            )
        )
    }
    arr = arr.map(x=>{
        x.den = x.den[0] + x.den[1] + "." + x.den[2] + x.den[3]
        return x;
    });
    array = arr;
    array.forEach(x=>{
       ["SKsviatky","CZsviatky","HU","PL","AT"].forEach(y=>{
           x[y].split(",").forEach(z=>{
               if(z.length>2&&!names.includes(z.trimStart())){
                   names.push(z.trimStart());
               }
           })
       })
    });
}
//смотрим сегодняшний день и ищем на сегодня именины
function today(){
    let today = (new Date().getDate()<10?"0"+new Date().getDate():new Date().getDate())+"."+((new Date().getMonth()+1)<10?"0"+(new Date().getMonth()+1):(new Date().getMonth()+1));
    document.getElementById("today").innerText = today;
    array.filter(x=>x.den === today)?.forEach(x=>{
        document.getElementById("todayMeniny").innerText += x.toString();
    });
    if(document.getElementById("todayMeniny").innerText===""){
        document.getElementById("todayMeniny").innerText = "---"
    }
}
//ищем за датой
function findByDate(event){
    event = event || window.event;
    if(event.keyCode === 13){

      let date = event.target.value;
        let d1 = date.split('.')[0];
        let d2 = date.split('.')[1];
        date = (d1.length<=1?"0"+d1:d1)+'.'+(d2.length<=1?"0"+d2:d2);
        document.getElementById("byDayMeniny").innerText = "";
        array.filter(x=>x.den === date)?.forEach(x=>{
            document.getElementById("byDayMeniny").innerText += x.toString();
        });
        if(document.getElementById("byDayMeniny").innerText===""){
            document.getElementById("byDayMeniny").innerText = "---"
        }
    }
}
//ищем по именам везде
function findByWord(event){
    event = event || window.event;
    if(event.keyCode === 13){
        let word1 = event.target.value + ",";
        let word2 = event.target.value;
        document.getElementById("byWordMeniny").innerText = "";
        array.filter(x=>{
            return x.SKsviatky.includes(word1) || x.CZsviatky.includes(word1) ||
                x.HU.includes(word1) || x.PL.includes(word1) || x.AT.includes(word1) ||
                x.SKsviatky.includes(word2) || x.CZsviatky.includes(word2) ||
                    x.HU.includes(word2) || x.PL.includes(word2) || x.AT.includes(word2)
        })?.forEach(x=>{
            document.getElementById("byWordMeniny").innerText += x.toStringWithDate();
        });
        if(document.getElementById("byWordMeniny").innerText===""){
            document.getElementById("byWordMeniny").innerText = "---"
        }
    }
}
//автозавершение
function autocomplete(searchEle, arr) {
    var currentFocus;
    searchEle.addEventListener("input", function(e) {
        var divCreate,
            b,
            i,
            fieldVal = this.value;
        closeAllLists();
        if (!fieldVal) {
            return false;
        }
        currentFocus = -1;
        divCreate = document.createElement("DIV");
        divCreate.setAttribute("id", this.id + "autocomplete-list");
        divCreate.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(divCreate);
        for (i = 0; i <arr.length; i++) {
            if ( arr[i].substr(0, fieldVal.length).toUpperCase() === fieldVal.toUpperCase() ) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, fieldVal.length) + "</strong>";
                b.innerHTML += arr[i].substr(fieldVal.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                    searchEle.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                divCreate.appendChild(b);
            }
        }
    });
    searchEle.addEventListener("keydown", function(e) {
        var autocompleteList = document.getElementById(
            this.id + "autocomplete-list"
        );
        if (autocompleteList)
            autocompleteList = autocompleteList.getElementsByTagName("div");
        if (e.keyCode === 40) {
            currentFocus++;
            addActive(autocompleteList);
        }
        else if (e.keyCode === 38) {
            //up
            currentFocus--;
            addActive(autocompleteList);
        }
        else if (e.keyCode === 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (autocompleteList) autocompleteList[currentFocus].click();
            }
        }
    });
    function addActive(autocompleteList) {
        if (!autocompleteList) return false;
        removeActive(autocompleteList);
        if (currentFocus >= autocompleteList.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = autocompleteList.length - 1;
        autocompleteList[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(autocompleteList) {
        for (var i = 0; i < autocompleteList.length; i++) {
            autocompleteList[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var autocompleteList = document.getElementsByClassName("autocomplete-items"
        );
        for (var i = 0; i < autocompleteList.length; i++) {
            if (elmnt !== autocompleteList[i] && elmnt !== searchEle) {
                autocompleteList[i].parentNode.removeChild(autocompleteList[i]);
            }
        }
    }
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
        findByWord(document.getElementById("searchField").onkeydown)
    });
}
autocomplete(document.getElementById("searchField"), names);
readXml("meniny.xml");
today();
