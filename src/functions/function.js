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