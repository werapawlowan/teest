  document.addEventListener('keydown', function(event) {
      var keyCode = event.keyCode; // Capture the keyCode from the event
      console.log("Key pressed:", keyCode);
      
      // Manipulate event properties or perform actions based on keyCode
      if (keyCode === 13) {
          console.log("Enter key pressed");
      }
  });
  