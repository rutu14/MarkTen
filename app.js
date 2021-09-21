var bill=document.querySelector("#bill-amt")
var cash=document.querySelector("#cash-given")
var btn=document.querySelector("#btn")
var noofnote=document.querySelectorAll(".notes")
var clear = document.querySelector("#btn-reset")
var outp = document.querySelector("#outp");

console.log(bill.value)
bill.addEventListener("change", function (){
    if ( bill.value != "" || bill.value != null || bill.value != 0 ){
        document.getElementById("cash-given").disabled = false;
    }
})


btn.addEventListener("click",function clickEventHandler(){
    

    var input1 = Number ( bill.value );    
    var input2 = Number ( cash.value );
    let back = 0;

    if ( input2 > input1 && input1 > 0 ){
        back = input2 - input1;
    }
    else{
        outp.innerText = "Enter the valid amount";
        outp.classList.add( "hidden" );
    }
    
    notes = [2000, 500, 100, 20, 10, 5, 1];
    var bt = [];
    while (back != 0 ) {
            for ( i=0; i<notes.length; i++ ) {
                amt = Math.floor( back / notes[i] );
                bt[i] = amt;
                rem = back % notes[i];
                back = back - ( notes[i] * amt );
                noofnote[i].innerText = bt[i];
            }
    }
    
    
});


clear.addEventListener("click",function clickEventHandler(){
    bill.value = "";
    cash.value = "";
    noofnote.forEach(()=>{
        for ( i = 0; i < notes.length; i++ ) {
            noofnote[i] = "";
        }
    });
    outp.classList.remove( "hidden" );
    outp.innerText = "";

});