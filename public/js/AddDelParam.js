// var j=1;
function addRow(tableID) {
 
            var table = document.getElementById(tableID);
 
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
 
            var colCount = table.rows[0].cells.length;
 
            for(var i=0; i<colCount; i++) {
 
                var newcell = row.insertCell(i);
 

                newcell.innerHTML = table.rows[1].cells[i].innerHTML;
                // //alert(newcell.childNodes);
                // switch(newcell.childNodes[0].type) {
                //     case "text":
                //             newcell.childNodes[0].value = "";
                //              newcell.childNodes[0].id = "ParamName"+j;
                //              newcell.childNodes[0].name = "params[0][paramname]";
                //             break;
                //     case "checkbox":
                //             newcell.childNodes[0].checked = false;
                //             newcell.childNodes[0].name =  "params[0][paramrequire]";
                //             break;
                //     case "select-one":
                //             newcell.childNodes[0].selectedIndex = 0;
                //             // newcell.childNodes[0].id = "Require"+j;
                //             break;

                // }
                if (i==1) {
                    newcell.childNodes[0].id = "ParamName"+rowCount;
                    newcell.childNodes[0].name = "params["+rowCount+"][paramname]";
                    newcell.childNodes[0].value="";
                }else if (i==2) {
                    newcell.childNodes[0].id = "ParamDesc"+rowCount;
                    newcell.childNodes[0].name = "params["+rowCount+"][paramdesc]";
                    newcell.childNodes[0].value="";
                } else if (i==3) {
                    newcell.childNodes[0].id = "ParamReq"+rowCount;
                    newcell.childNodes[0].name = "params["+rowCount+"][paramrequire]";                    
                } else if (i==4){
                    newcell.childNodes[0].id = "DefValue"+rowCount;
                    newcell.childNodes[0].name = "params["+rowCount+"][paramdefaultvalue]";
                    newcell.childNodes[0].value="";
                }
            }//num=num+1;
        
            // j++;
        }



function deleteRow(tableID) {
            try {
            var table = document.getElementById(tableID);
            var rowCount = table.rows.length;
 
            for(var i=0; i<rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];
                if(null != chkbox && true == chkbox.checked) {
                    if(rowCount <= 2) {
                        alert("Cannot delete all the rows.");
                        break;
                    }else{
                    table.deleteRow(i);

                    rowCount--;
                    i--;}
                }
 
 
            }
            }catch(e) {
                alert(e);
            }
        }