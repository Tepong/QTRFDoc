function PopUpDelete(funcname) 
{

    try{
        var tag = confirm("Are you sure you want to delete " + funcname + " ?");
        if (tag == true) {
            //alert("You pressed OK!");
            //window.location="/ActionStatus/";
        } 
        else {
            //alert("You pressed Cancel!"); //Do nothing
        }

    }
    catch(e) {
        alert(e);
    }
}