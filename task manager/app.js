var iconImportant = "important";
var iconNonImportant = "notImportant";
var isImportant = false;
var isVisible = true;

function toggleImportant() {
  if (isImportant) {
    //shouldnt be important
    $("#iImportant").removeClass(iconImportant);
    $("#iImportant").addClass(iconNonImportant);
    isImportant = false;
  } else {
    //should be important
    $("#iImportant").removeClass(iconNonImportant);
    $("#iImportant").addClass(iconImportant);
    isImportant = true;
  }
}

function toggleForm() {
  if (isVisible) {
    $(".form").hide();
    isVisible = false;
  } else {
    $(".form").show();
    isVisible = true;
  }
}
function saveTask() {
  console.log("Saving....");
}

function init() {
  console.log("Task manager");

  //load data

  //hook events
  $("#btnSave").click(saveTask);
  $("#iImportant").click(toggleImportant);
  $("#btnHideForm").click(toggleForm);
}

window.onload = init;

/**
 *
 * create button
 *  create a variable to store the state
 * when the bitton is clicked call a toggleForm
 * hide/ show inside the toggleForm rn
 */
