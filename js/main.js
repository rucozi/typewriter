document.addEventListener('DOMContentLoaded', function () {
  // your startup code here

  const makeSearch = document.getElementById('make-search');
  const makeSelect = document.getElementById('make');

  if (makeSearch && makeSelect) {
    makeSearch.addEventListener('input', (e) => {
      const q = (e.target.value || '').trim().toLowerCase();
      for (const opt of makeSelect.options) {
        // show all options when query is empty, otherwise hide non-matching
        opt.hidden = q ? !opt.text.toLowerCase().includes(q) : false;
      }
      // if the selected option was hidden by the filter, clear selection
      if (makeSelect.selectedIndex >= 0 && makeSelect.options[makeSelect.selectedIndex].hidden) {
        makeSelect.selectedIndex = -1;
      }
    });
  }
});

// Modern browser / Node 18+
async function getData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error('Request failed:', err);
        throw err;
    }
}

// usage
getData('https://api.example.com/items')
  .then(data => console.log(data));