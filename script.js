let transaction = [
    {
        id: 1,
        date: "2026-01-15",
        amount: -75,
        status: "success",
        type: "expense",
    },

    
    {
        id: 1,
        date: "2026-01-11",
        amount: -75,
        status: "success",
        type: "expense",
    },



    {
        id: 1,
        date: "2026-01-9",
        amount: -75,
        status: "success",
        type: "expense",
    },



    {
        id: 1,
        date: "2026-01-15",
        amount: -75,
        status: "success",
        type: "expense",
    },

];

let monthlyIncome = 132.67;
let monthlyExpenses = 79.60;

const today = new date().toISOSString().split('T')[0]
document.getElementById('incomeDate').value = today
document.getElementById('expenseDate').value = today

function openIncomeModal () {
    document.getElementById('incomeModal').style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function openExpenseModal () {
    document.getElementById('expenseModal').style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none'
    document.body.style.overflow = 'auto'

    if (modalId === 'incomeModal') {
        document.getElementById('incomeForm').reset()
        document.getElementById('incomeDate').value = today
    }else {
                document.getElementById('expenseForm').reset()
        document.getElementById('expenseDate').value = today
    }
}

window.onclick = function (event) {
    const incomeModal = document.getElementById('incomeModal')
    const expenseModal = document.getElementById('expenseModal')

    if (event.target === incomeModal) {
        closeModal('incomeModal')
    }

    if (event.target === expenseModal) {
        closeModal('expenseModal')
    }
}




