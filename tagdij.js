document.addEventListener("DOMContentLoaded",function(){
    // A ("const") nem váltosztatja meg a gombot hanem fixálva van. A ("let{egymunkamenetre alkalmas}"). A ("var") dokument élettartam.
    const insertbutton = document.getElementById("create"); 
    const readbutton = document.getElementById("read");
    const updatebutton = document.getElementById("update");
    const deletebutton = document.getElementById("delete");
    insertbutton.addEventListener("click", async function(){
        let baseUrl="http://localhost/tagdijbackend/index.php?ugyfel";
        let dataJSON = {
            "nev": document.getElementById("nev").value,
            "irsz": document.getElementById("irsz").value,
            "orszag": document.getElementById("orszag").value,
            "szulev": document.getElementById("szulev").value,
        };
        let options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dataJSON)
        }
        let response = await fetch(baseUrl, options);
    })
});