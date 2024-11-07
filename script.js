document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        const li = document.createElement('li');
        li.textContent = `${name} - ${phone}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.style.background = 'black';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.padding = '5px 10px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('contactList').appendChild(li);

        document.getElementById('contactForm').reset();
    }
});