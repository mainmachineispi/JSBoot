console.warn("This will overwrite your W93 firmware!")
dont_kill_your_files = $prompt("This will overwrite your W93 firmware! Are you sure you want to continue? Enter \"yEs\" to continue.")

if (dont_kill_your_files == "yEs") {
  $alert("Installing JSBoot...")
} else {
  window.location.reload(true)
}

$window("https://github.com/mainmachineispi/JSBoot")
