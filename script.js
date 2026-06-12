// document.getElementById('customerForm').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const name = document.getElementById('name').value;
//   const phone = document.getElementById('phone').value;

//   const response = await fetch('/api/customers', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, phone })
//   });

//   const data = await response.json();
//   alert(data.message);
// });



app.put("/api/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const cat = categories.find(c => c.id === id);
  if (!cat) return res.status(404).json({ error: "Category not found" });

  cat.name = name;
  saveCategoriesToFile(categories);
  res.json(cat);
});


  // Populate category display
  
          const list = document.getElementById('categoryList');
          list.innerHTML = '';
          data.forEach(cat => {
            const div = document.createElement('div');
            div.className = 'category-box';
            div.innerHTML = `<strong>${cat.name}</strong>`;
            if (cat.crackers.length > 0) {
              cat.crackers.forEach(cr => {
                div.innerHTML += `<div class="cracker-item">- ${cr.name} (₹${cr.price})</div>`;
              });
            } else {
              div.innerHTML += `<div class="cracker-item">No crackers added yet</div>`;
            }
            list.appendChild(div);
          })

  // accordian //

  // Function that executes when button is clicked
function toggleAccordion(button) {
  button.classList.toggle("active");
  const panel = button.nextElementSibling;

  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}





// document.getElementById('customerForm').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const name = document.getElementById('name').value;
//   const phone = document.getElementById('phone').value;
//   const mail = document.getElementById('mail').value;
//   const message = document.getElementById('message').value;

//   try {
//     const response = await fetch('/api/customers', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, phone, mail, message })
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error || 'Unknown error');
//     }

//     alert(data.message);
//   } catch (err) {
//     alert('Failed to save customer: ' + err.message);
//     console.error('❌', err);
//   }
// });

async function sendMessage() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const mail = document.getElementById('mail').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('/api/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, mail, message })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Unknown error');
    }

    alert(data.message);
  } catch (err) {
    alert('Failed to save customer: ' + err.message);
    console.error('❌', err);
  }
}

    // Load categories on page load
    window.onload = () => {
      loadCategories();
    };

  // submit category

  async function createCategory() {
    const name = document.getElementById('categoryName').value.trim();
    if (!name) {
      alert("⚠️ Please enter a category name");
      return;
    }

    try {
      const response1 = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });

      const data = await response1.json();

      if (!response1.ok) {
        throw new Error(data.error || 'Failed to save category');
      }

      alert('✅ Category added successfully');
      document.getElementById('categoryForm').reset();
      loadCategories(); // <-- Assuming you have this function defined

    } catch (err) {
      alert('❌ Failed to save category: ' + err.message);
      console.error('Error:', err);
    }
  }

    // Submit Cracker
    document.getElementById('crackerForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('crackerName').value;
      const price = document.getElementById('crackerPrice').value;
      const product_image = document.getElementById('crackerImage').value;
      const category_id = document.getElementById('categorySelect').value;

      fetch('/api/crackers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, category_id })
      })
      .then(res => res.json())
      .then(() => {
        document.getElementById('crackerForm').reset();
        loadCategories();
      });
    });

    // Load categories and populate UI
    
 async function loadCategories() {
  try {
    const response = await fetch('/api/categories');  // GET request
    const data = await response.json();

    const container = document.getElementById('categoriesContainer');
    container.innerHTML = ''; // clear old list

    if (data.length === 0) {
      container.innerHTML = `<p>No categories found</p>`;
      return;
    }

    data.forEach(cat => {
      const div = document.createElement('div');
      div.className = "category-box";
      div.innerHTML = `<strong>${cat.id} - ${cat.name}</strong>`;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Error loading categories:", err);
  }
}









