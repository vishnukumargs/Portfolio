function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}

function closesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// function footerShowsidebar(){
//     const sidebar = document.querySelector('.footer-sidebar');
//     sidebar.style.display = "flex";
// }

// function footerClosesidebar(){
//     const sidebar = document.querySelector('.footer-sidebar');
//     sidebar.style.display = "none";
// }


document.getElementById('saveButton').addEventListener('click', function () {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = [
        ['Name', 'Email', 'Message'],  
        [name, email, message]         
    ];

   
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Data');


    XLSX.writeFile(workbook, 'Contact_Form_Data.xlsx');
});
