/**
 * Created by egor on 14.03.2017.
 */
var execStr = ""
function checkExec(str) {
  re = "[^0-9\-\+\/\*\.\(\)e]"
  var res = str.match(re);
  if (res !== null) {
    return false;
  } else {
    return true;
  }
}
var isResultGood = true;
$(window).click(function (event) {
  if (isResultGood == false) {
    $("#first_name2").attr("class", "validate valid");
    isResultGood = true;
  }
  if(!event.toElement.hasAttribute("valid-press"))
  {
    return;
  }
  var elem = event.toElement.innerText;

  if (elem == "=") {
    if (checkExec(execStr)) {
      try {
        execStr=execStr.replace(/\b0*((\d+\.\d+|\d+))\b/g, "$1");
        var result = eval(execStr);
      }
      catch (err) {
        //alert("Error: Error in input!");
        isResultGood = false;
        $("#first_name2").attr("class", "validate invalid");
        return;
      }
      if (result === undefined) {
        //alert("Error: Error in input!")
        isResultGood = false;
        $("#first_name2").attr("class", "validate invalid")
      }
      else {
        $("#first_name2").val(result);
        execStr = result.toString();
      }
    } else {
      isResultGood = false;
      $("#first_name2").attr("class", "validate invalid")
    }
  } else {
    if (elem == "C") {
      execStr = "";
    } else if (checkExec(elem)) {
      execStr += elem;
    }
    $("#first_name2").val(execStr);
  }
});
$("#first_name2").change(function () {
  execStr = $("#first_name2").val();
});