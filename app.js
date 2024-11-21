let selectedsender="";
const mainarray=[];


function selectsender(sender){
    selectedsender=sender;
    

}


function sendmessege(){

    if(selectedsender==""){
        alert("please select Sender First");
        return;
    }

    let usermsg = document.getElementById("gettext").value;
    if (usermsg === "") {
        alert("Please enter a message.");
        return;
    }

    document.getElementById("gettext").value = "";

    if(selectedsender=="sender 1"){
        console.log("ala");
        
        let sender1massege={
            sender : "sender1",
            message:usermsg
        }

        mainarray.push(sender1massege);
        console.log(mainarray);

   
    }else{
        console.log("perera");

        sender1massege={
            sender : "sender2",
            message:usermsg
        }

        mainarray.push(sender1massege);
        console.log(mainarray);
        
    }








  

}