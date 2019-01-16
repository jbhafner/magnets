// Submit Button Onclick
$("#submitBtn").click(doSubmit);

// Grabs all the input fields
function doSubmit() {
    console.log('submit button clicked!');
    const inputs = document.querySelectorAll("input");
    console.log('inputs', inputs);
    inputs.forEach(createMagnet);
}

// Assigns each input field to the magnet mockup
function createMagnet(item) {
    console.log('item', item);
    console.log($(item).attr("id"));
    let magID = $(item).attr("id");
    let magValue = $(item).val();
    console.log('magID', magID, 'value', magValue);
    console.log(`#mag${magID}`);
    $(`#mag${magID}`).text(magValue);
}