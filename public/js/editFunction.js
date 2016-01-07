function PopUpDelete(funcname) 
{

    try{
        var tag = window.confirm("Are you sure you want to delete " + funcname + " ?");
        if (tag == true) {
            // var form = document.createElement("form");
            // form.setAttribute("method", "post");
            // form.setAttribute("action", "/ActionStatus/");
            // form.submit();

            document.getElementById("desForm").submit()
            // document.getElementById("formDelete").action = "/ActionStatus/";
            // window.location= "/ActionStatus/";
        } 
        else {
            //alert("You pressed Cancel!"); //Do nothing
        }

    }
    catch(e) {
        alert(e);
    }
}


// function PopUpDelete(funcname) 
// {

//     try{
//         var popup = document.createElement("div");
//         popup.setAttribute("data-role", "page");
//         popup.setAttribute("data-dialog", "true");
//         popup.setAttribute("id", "delPopup");



//         if (tag == true) {
//             // var form = document.createElement("form");
//             // form.setAttribute("method", "post");
//             // form.setAttribute("action", "/ActionStatus/");
//             // form.submit();

//             document.getElementById("desForm").submit()
//             // document.getElementById("formDelete").action = "/ActionStatus/";
//             // window.location= "/ActionStatus/";
//         } 
//         else {
//             //alert("You pressed Cancel!"); //Do nothing
//         }

//     }
//     catch(e) {
//         alert(e);
//     }
// }
