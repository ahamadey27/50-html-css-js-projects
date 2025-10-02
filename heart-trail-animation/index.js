// Cache a reference to the <body> element which acts as the drawing surface
// for the generated heart images. We attach the mousemove listener to the
// body so that hearts appear wherever the user moves the cursor.
const bodyEl = document.querySelector("body");

// On every mouse move create a new <span> element at the cursor position.
// Each span is sized randomly and then removed after a short timeout to
// prevent the DOM from growing indefinitely.
bodyEl.addEventListener("mousemove", (event) => {
    // event.offsetX/Y give the coordinates relative to the event target
    // (the body). These are used to position the created element.
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    // Create the element that will display the heart image.
    const spanEl = document.createElement("span");

    // Position the element using absolute coordinates. The CSS for span
    // centers its own transform origin, so setting left/top to the cursor
    // position makes it appear centered under the mouse.
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    // Give each heart a random size for visual variety. Size is between
    // 0 and 100 pixels (you can change the multiplier to adjust range).
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // Append the element to the document so CSS animations can run.
    bodyEl.appendChild(spanEl);

    // Remove the element after 3 seconds to keep the DOM small. The
    // CSS animation runs independently, so removing the element simply
    // clears it from the page once it has finished (or while it's fading).
    setTimeout(() => {
         spanEl.remove();
    }, 3000);
});