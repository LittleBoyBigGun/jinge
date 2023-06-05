$(document).ready(function(){
  $("#money").on("input", function(e){
    var m = parseInt(e.target.value.trim())
    if(isNaN(m)){
      $(".showpannel").text("input not a number")
    } else {
      $(".showpannel").text(yongjing(m))
    }
  })
})

function yongjing(money) {

  if (money >= 8000) {
    return 40
  }

  if (money < 500) {
    return 0
  }

  var c = Math.floor(money/500)
  switch(c) {
    case 1:
      return 3
    case 2:
    case 3:
      return 5
    case 4:
      return 10
    case 5:
      return 13
    case 6:
    case 7:
      return 15
    case 8:
    case 9:
      return 20
    case 10:
    case 11:
      return 25
    case 12:
    case 13:
      return 30
    case 14:
    case 15:
      return 35
  }
}