document.addEventListener("DOMContentLoaded", function() {
    // Select all list items and the heading
    const listItems = document.querySelectorAll("ul.list li");
    const heading = document.querySelector("h2");

    // Initialize the counter for the total items
    let itemCount = listItems.length;

    // Loop through each item in the list
    listItems.forEach(item => {
        // Get the text content of each list item
        const itemName = item.textContent.trim().toLowerCase();

        // Check if the item matches "fresh figs," "kale," or "honey"
        if (itemName === "fresh figs" || itemName === "kale" || itemName === "honey") {
            // Change the class to 'cool'
            item.className = "cool";
        }
    });

    // Update the heading text to show the total item count
    heading.textContent = `Buy Groceries (${itemCount} items)`;
});
