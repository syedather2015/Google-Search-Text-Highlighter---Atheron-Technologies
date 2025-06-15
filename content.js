// Content script to highlight search query in Google search results - Extension by Atheron Technologies - Developer Syed Ather Rizvi

function highlightSearchQuery() {
  console.log("Highlighting search query...");

  // Function to handle mutations in the DOM - Extension by Atheron Technologies - Developer Syed Ather Rizvi
  function handleMutations(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        console.log("DOM mutation detected. Re-highlighting search query...");
        rehighlightSearchQuery();

        // Disconnect the observer after the initial highlighting - Extension by Atheron Technologies - Developer Syed Ather Rizvi
        observer.disconnect();
      }
    }
  }

  // Function to re-highlight the search query in specific HTML tags - Extension by Atheron Technologies - Developer Syed Ather Rizvi
  function rehighlightSearchQuery() {
    const searchQuery = document.querySelector('input[name="q"]').value;
    console.log("Search query:", searchQuery);

    // Select specific HTML tags for highlighting (e.g., <em>) - Extension by Atheron Technologies - Developer Syed Ather Rizvi
    const elementsToHighlight = document.querySelectorAll('em');

    elementsToHighlight.forEach((element) => {
      const content = element.textContent;

      const highlightedContent = content.replace(
        new RegExp(searchQuery, 'gi'),
        (match) => `<span style="background-color: Yellow; border: 2px solid Red; padding: 2px; color: red;">${match}</span>`
      );

      if (content !== highlightedContent) {
        element.innerHTML = highlightedContent;
      }
    });
  }

  // Set up a MutationObserver to detect changes in the DOM - Extension by Atheron Technologies - Developer Syed Ather Rizvi
  const observer = new MutationObserver(handleMutations);
  observer.observe(document.body, { childList: true, subtree: true });

  // Initial highlighting - Extension by Atheron Technologies - Developer Syed Ather Rizvi
  rehighlightSearchQuery();
}

// Wait for the page to load before highlighting the search query - Extension by Atheron Technologies - Developer Syed Ather Rizvi
window.addEventListener('load', highlightSearchQuery);
