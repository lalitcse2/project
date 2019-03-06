class phone {
    constructor(name, phoneno){
        this.name = name;
        this.phoneno = phoneno;
    }
}

class UI {
    static displayPhoneNo(){
        const StoreNumber = [
            {
            name: 'lalit ',
            phoneno: '9486548655'
            }
        ];

        const phones = StoreNumber;

        phones.forEach((phone) => UI.addNumberToList(phone));
    }

    static addNumberToList(phone){
        const list = document.querySelector('#phone-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${phone.name}<td>
        <td>${phone.phoneno}<td>
        <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>
        `;

        list.appendChild(row);
    }

    static deletephone(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static  clearFields(){
        document.querySelector('#name').value= '';
        document.querySelector('#phoneno').value= '';
    }
}




document.addEventListener('DOMContentLoaded', UI.displayPhoneNo);



document.querySelector('#phone-form').addEventListener('submit', (e) =>{


    e.preventDefault();
    const name = document.querySelector("#name").value;
    const phoneno = document.querySelector("#phoneno").value;

    const phones = new phone(name, phoneno);
    
    UI.addNumberToList(phones);


    UI.clearFields();
});


document.querySelector('#phone-list').addEventListener('click', (e) =>{
    UI.deletephone(e.target)
})