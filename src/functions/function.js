export async function Chat(){
    let data=document.getElementById("chat");
    let msg=document.getElementById("chatmsg");
    data.innerHTML+= `<div>${msg.value}</div>`
    await databases.createDocument("6462f35ceb505509c4ff","6462f3deb9ff444beaaf",ID.unique(),{chat:msg.value})
    msg.value="";
}

function Data(){
    console.log(databases.listCollections());
    let promise = databases.listDocuments("6462f35ceb505509c4ff","6462f3deb9ff444beaaf");
    // console.log(promise);
    promise.then(function (response){
      // console.log(response.documents);
      response.documents.forEach(function (doc){
        console.log(doc.chat);
      });
    }, function (error) {
      console.log(error);
    });
  }

  export function alert(){
    const ele=document.getElementById("alert-side");
    ele.classList.toggle("hidden")
    SetRoomStatus("Join Room");
  }

  export async function JoinRoom(){
    const x = await nodedatabase.listCollections('6462f35ceb505509c4ff');
    let data=document.getElementById('default-search')
    console.log(data.value);
   
      if(data.value===""){
          alert()
          Setclick(1);
          SetRoomStatus("Room Not Found")
      }else{
          x.collections.forEach((e)=>{
            if(( e.name == data.value) && !Join){
              SetRoomStatus("Successfully Joined");
              SetRoomId(e.$id);
              SetRoom(data.value)
              SetJoin(true);
            }
          });
      }
      if(Join==false){
        SetRoomStatus("Room Not Found");
      }
  }


  export function Disconnect(){
    SetRoomStatus("Join Now");
    SetRoomId('');
    SetJoin(false)
    let data=document.getElementById('default-search')
    data.value="";
  }