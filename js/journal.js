async function loadJournal(date) {
  const journalContent = document.getElementById("journal-content");
  const formattedDate = date.toISOString().split("T")[0];

  try {
    const response = await fetch(`../journals/${formattedDate}.md`);
    if (response.ok) {
      const text = await response.text();
      journalContent.innerHTML = `<div class="markdown-content">${marked.parse(
        text
      )}</div>`;
    } else {
      journalContent.innerHTML = "<p>No journals found for this date.</p>";
    }
  } catch (error) {
    console.error("Error loading journal:", error);
    journalContent.innerHTML = "<p>Error loading journal entry.</p>";
  }
}

function initJournalDatePicker() {
  const datePicker = document.getElementById("journal-date");
  // Set to current system date
  const today = new Date();
  datePicker.valueAsDate = today;
  loadJournal(today);

  datePicker.addEventListener("change", (e) => {
    loadJournal(e.target.valueAsDate);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initJournalDatePicker);
