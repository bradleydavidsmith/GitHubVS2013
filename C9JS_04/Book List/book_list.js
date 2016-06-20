var $ = function (id) {
	return document.getElementById(id);
}

window.onload = function () {
    var categories = $("categories");   // The Section
    var imageNode = $("image");         // the main img element

    var h2_elements = categories.getElementsByTagName("h2");

    var headingNode;
    for (var i = 0; i < h2_elements.length; i++) {
        headingNode = h2_elements[i];

        // Attach event handler
        headingNode.onclick = function () {
            var h2 = this;         // h2 is the current headingNode object

            // Expand and contract the bullet points when clicking the headings
            if (h2.getAttribute("class") == "plus") {
                h2.setAttribute("class", "minus");
                h2.nextElementSibling.setAttribute("class", "open");
            }
            else {
                h2.setAttribute("class", "plus");
                h2.nextElementSibling.setAttribute("class", "closed");
                imageNode.src = "";
            }
            //if (h2.nextElementSibling.getAttribute("class") == "closed") {
            //	h2.nextElementSibling.setAttribute("class", "open");
            //}
            //else {
            //	h2.nextElementSibling.setAttribute("class", "closed");
            //} 

        }
    }

    // Swap Images when book links are clicked

    var imageLinks = categories.getElementsByTagName("a");

    var linkNode, image;
    for (var i = 0; i < imageLinks.length; i++) {
        linkNode = imageLinks[i];

        // Attach the event handler
        linkNode.onclick = function (evt) {
            var link = this;
            imageNode.src = link.getAttribute("href");

            //Cancel the default action of the event
            if (!evt) evt = window.event;
            if (evt.preventDefault) {
                evt.preventDefault();       // DOM compliant
            } else {
                evt.returnValue = false;    // Older versions of IE
            }
        }
        // Preload image
        image = new Image();
        image.src = linkNode.getAttribute("href");
    }
}