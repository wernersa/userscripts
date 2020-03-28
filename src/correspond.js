import "arrive"; // https://github.com/uzairfarooq/arrive

(function() {
  "use strict";

  // Remove unneccesary relative date information:
  document.arrive("mws-tombstone-message-wrapper", function() { this.remove(); });
  document.arrive("mws-message-status", function() { this.remove(); });
  document.arrive("mws-avatar", function() {
    if (this.closest("mws-message-wrapper")) this.remove();
  });

  // Format each text message that arrives in the DOM:
  document.arrive(".text-msg", function() {
      var parent_container = this.closest("mws-text-message-part");
      if (parent_container.firstChild.getAttribute('class') == "text-msg-container outgoing"){
        var outgoing = true;
      } else {
        var outgoing = false;
      }
      var aria_text = parent_container.getAttribute('aria-label');
      
      // Get date message was sent and format it:
      var time = aria_text.match(/\d*. \w* \d* kl. \d*:\d*/)
      var time_text = "<b>" + time + "</b>";

      // Remove unwanted text:
      aria_text = aria_text.split(" sa: ")[1];
      aria_text = aria_text.split(/. Mottatt|. Sendt /)[0]

      
      // Add message author:
      if (outgoing) {
        var author_text = "SMS fra <b>u.t.</b>"
      } else {
        var author_text = "SMS fra <b>pas.</b>"
      }

      var result_text = time_text + " - " + author_text + "</br>" + aria_text + "</br></br>";
      this.innerHTML = result_text;
    });


})();
