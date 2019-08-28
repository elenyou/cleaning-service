//Animation
// init controller
var controller = new ScrollMagic.Controller();

// build scene
new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0.7, // show, when scrolled 10% into view
  duration: "95%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 75 // move trigger to center of element
})
  .setClassToggle("#reveal1", "visible") // add class to reveal
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.7, // show, when scrolled 10% into view
    duration: "95%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 75 // move trigger to center of element
    })
    .setClassToggle("#reveal2", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    triggerHook: 0.7, // show, when scrolled 10% into view
    duration: "95%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 75 // move trigger to center of element
    })
    .setClassToggle("#reveal3", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger4",
    triggerHook: 0.7, // show, when scrolled 10% into view
    duration: "95%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 75 // move trigger to center of element
    })
    .setClassToggle("#reveal4", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger5",
    triggerHook: 0.7, // show, when scrolled 10% into view
    duration: "95%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 75 // move trigger to center of element
    })
    .setClassToggle("#reveal5", "visible") // add class to reveal
    .addTo(controller);



