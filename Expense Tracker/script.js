let expenses = [];
let totalAmount = 0;

// Fix typo in 'document'
const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expenses-table-body'); // Fix typo 'exepense' to 'expenses'
const totalAmountCell = document.getElementById('total-amount');

// Add expense when 'Add' button is clicked
addBtn.addEventListener('click', function () {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    // Validate inputs
    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    // Add the new expense to the list
    const newExpense = { category, amount, date };
    expenses.push(newExpense);

    // Update total amount
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount.toFixed(2); // Show fixed decimals

    // Add new row to the table
    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    // Add event listener to the delete button
    deleteBtn.addEventListener('click', function () {
        const rowIndex = Array.from(expensesTableBody.rows).indexOf(newRow);

        // Remove the expense from the list
        const removedExpense = expenses.splice(rowIndex, 1)[0];
        totalAmount -= removedExpense.amount;
        totalAmountCell.textContent = totalAmount.toFixed(2); // Update total

        // Remove the row from the table
        expensesTableBody.deleteRow(rowIndex);
    });

    // Populate the row with the expense data
    categoryCell.textContent = newExpense.category;
    amountCell.textContent = newExpense.amount.toFixed(2); // Show fixed decimals
    dateCell.textContent = newExpense.date;
    deleteCell.appendChild(deleteBtn);

    // Clear inputs
    amountInput.value = '';
    dateInput.value = '';
    categorySelect.value = '';
});

// If you want to populate from an existing expenses array, make sure it's properly looped
for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount.toFixed(2);

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.addEventListener('click', function () {
        const rowIndex = Array.from(expensesTableBody.rows).indexOf(newRow);

        // Remove the expense from the list
        const removedExpense = expenses.splice(rowIndex, 1)[0];
        totalAmount -= removedExpense.amount;
        totalAmountCell.textContent = totalAmount.toFixed(2);

        // Remove the row from the table
        expensesTableBody.deleteRow(rowIndex);
    });

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount.toFixed(2);
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}
