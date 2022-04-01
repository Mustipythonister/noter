function save(){
	var note = document.getElementById("text").value;
	var name = document.getElementById("name").value;
	localStorage.setItem(name, note);
}
function open_note(){
	var note_name = document.getElementById("open").value;
	var latest_notes = localStorage.getItem(note_name);
	var display = document.getElementById("display");
	var display_name = document.getElementById("display_name");
	display_name.innerHTML = note_name;
	display.innerHTML = latest_notes;

}

function open_all(){
	var display_all = document.getElementById("all");
	var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    display_all.innerHTML = "<br>"+values;
}