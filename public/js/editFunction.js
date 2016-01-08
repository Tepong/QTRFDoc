function PopUpDelete(funcname) 
{

    try{
        var tag = window.confirm("Are you sure you want to delete " + funcname + " ?");
        if (tag == true) {
            // document.getElementById("desForm").submit()
            window.location.href="/Deleted/"+funcname
        } 
        else {
            //alert("You pressed Cancel!"); //Do nothing
        }

    }
    catch(e) {
        alert(e);
    }
}


// function fnOpenNormalDialog() {
//     $("#dialog-confirm").html("Confirm Dialog Box");

//     // Define the Dialog and its properties.
//     $("#dialog-confirm").dialog({
//         resizable: false,
//         modal: true,
//         title: "Modal",
//         height: 250,
//         width: 400,
//         buttons: {
//             "Yes": function () {
//                 $(this).dialog('close');
//                 callback(true);
//             },
//                 "No": function () {
//                 $(this).dialog('close');
//                 callback(false);
//             }
//         }
//     });
// }

// $('#btnOpenDialog').click(fnOpenNormalDialog);

// function callback(value) {
//     if (value) {
//         alert("Confirmed");
//     } else {
//         alert("Rejected");
//     }
// }