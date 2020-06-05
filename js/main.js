window.onload = () => {
    // selects elements function
    const selectElement = (element) => document.querySelector(element);
    const input = selectElement("#tntsearch-wrapper > input[type=text]");
    const clearSearch = selectElement(".tntsearch-clear");
    const overlay = selectElement("#overlay");
    const toggleNav = selectElement("#sidebar-toggle");
    let isSidebarToggled = false;

    toggleNav.addEventListener("click", () => {

        if (!isSidebarToggled){
            selectElement("#sidebar").style.left = "251px";
            selectElement("#body").style.left = "251px";
            isSidebarToggled = true;
        }
        else if (isSidebarToggled) {
            selectElement("#sidebar").style.left = "0px";
            selectElement("#body").style.left = "0px";
            isSidebarToggled = false;
        }
    });

    // listen event which checks if the user has typed anything into the search bar
    input.addEventListener("input", () => {
        selectElement(".tntsearch-results").style.visibility = "visible";

        // checks if there are 0 inputs in the search bar
        if (input.value.length === 0){
            selectElement("#overlay").style.visibility = "hidden";
        }
        else {
            selectElement("#overlay").style.visibility = "visible";
        }
    });

    // listen event which checks if user has clicked on the clear input button
    clearSearch.addEventListener("click", () => {
        selectElement("#overlay").style.visibility = "hidden";
    });

    // hides the results when the user clicks on the overlay
    overlay.addEventListener("click", () => {
        selectElement(".tntsearch-results").style.visibility = "hidden";
        selectElement("#overlay").style.visibility = "hidden";
    });
}