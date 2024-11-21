let findsender="";
const massegemainarray=[];


function selectsender(sender){
    findsender=sender;
    

}


function sendmessege(){

    if(findsender==""){
        alert("please select Sender First");
        return;
    }

    let usermsg = document.getElementById("gettext").value;
    if (usermsg === "") {
        alert("Please enter a message.");
        return;
    }

    document.getElementById("gettext").value = "";

    if(findsender=="sender 1"){
        console.log("ala");
        
        let sender1massege={
            sender : "sender1",
            message:usermsg
        }

        massegemainarray.push(sender1massege);
        console.log(massegemainarray);
      


   
    }else{
        console.log("perera");

        sender1massege={
            sender : "sender2",
            message:usermsg
        }

        massegemainarray.push(sender1massege);
        console.log(massegemainarray);
       
        
    }
    loadchatbox();
}

function loadchatbox(){
    const text=document.getElementById("senders");
    let body="";
    massegemainarray.forEach(smassege => {
        if(smassege.sender === "sender1"){
            body+= `

            <div class="d-flex flex-row justify-content-start mb-4">
                        <img src=""
                          alt="avatar 1" style="width: 45px; height: 100%;">
                        <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
                          <p class="small mb-0">${smassege.message}</p>
                        </div>
                      </div>
            `
            
        }else if (smassege.sender === "sender2"){
            body+= `
             <div class="d-flex flex-row justify-content-end mb-4">
                        <div class="p-3 me-3 border bg-body-tertiary" style="border-radius: 15px;">
                          <p class="small mb-0">${smassege.message}</p>
                        </div>
                        <img src=""
                          alt="avatar 1" style="width: 45px; height: 100%;">
                      </div>
            `
        }
    })

    text.innerHTML=body;


}