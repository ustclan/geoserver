/**
 * Created by minjoon on 4/28/15.
 */
var arr = [];
var x = 0;
var y = 0;

$(document).ready(function() {
    $('img').click(function(e) {
        $('#input_label').focus();
        var offset = $(this).offset();
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
    });
});

$('#input_type').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
        $('#button_add').click();
        return false;
    }
});

$('#button_add').click(function(e) {
    var dict = {'x':Math.round(x), 'y':Math.round(y), 'label': $('#input_label').val(), 'type': $('#input_type').val()};
    arr.push(dict);
    $('#id_text').val(JSON.stringify(arr));
    $('#input_type').blur();
    $('#input_type').val('');
    $('#input_label').val('');
});
