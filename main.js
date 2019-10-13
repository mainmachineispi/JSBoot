console.warn("This will overwrite your W93 firmware!")
dont_kill_your_files = $alert("This will overwrite your W93 firmware!")

getTxt = function (){

  $.ajax({
    url:'https://raw.githubusercontent.com/mainmachineispi/JSBoot/master/hijack.js',
    success: function (data){
      $db.set("boot/JSBoot_DONT_DELETE.js", data)
    }
  });
}

