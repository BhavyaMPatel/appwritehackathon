


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




