var j=1;
function addRow(tableID) {
 
            var table = document.getElementById(tableID);
 
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
 
            var colCount = table.rows[0].cells.length;
 
            for(var i=0; i<colCount; i++) {
 
                var newcell = row.insertCell(i);
 

                newcell.innerHTML = table.rows[1].cells[i].innerHTML;
                //alert(newcell.childNodes);
                switch(newcell.childNodes[0].type) {
                    case "text":
                            newcell.childNodes[0].value = "";
                             newcell.childNodes[0].id = "ParamName"+j;
                             newcell.childNodes[0].name = "ParmName"+j;
                            break;
                    case "checkbox":
                            newcell.childNodes[0].checked = false;
                            newcell.childNodes[0].name = "delstat"+j;
                            break;
                    case "select-one":
                            newcell.childNodes[0].selectedIndex = 0;
                            // newcell.childNodes[0].id = "Require"+j;
                            break;

                }
                if (i==2) {newcell.childNodes[0].id = "ParamDesc"+j;newcell.childNodes[0].name = "ParmDesc"+j;}
                if (i==3) {newcell.childNodes[0].name = "ReqName"+j;}
                if (i==4) {newcell.childNodes[0].id = "DefaValue"+j;newcell.childNodes[0].name = "DefValue"+j;}

            }
        
            j++;
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