
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
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

function d(){
	var where = document.getElementById("map").value;
	localStorage.removeItem(where);
	open_all();

}
function save(){
	var note = document.getElementById("text").value;
	var name = document.getElementById("name").value;
	var all_display = document.getElementById("all");
	
	localStorage.setItem(name, note_correct);
	open_all();
}
