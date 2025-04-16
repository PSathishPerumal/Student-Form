document.getElementById("studentform").addEventListener("submit", function (event) {
    event.preventDefault();


    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const gendervalue = gender ? gender.value : "";
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;




    const tablebody = document.getElementById("studenttable").querySelector("tbody");

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td style="padding: 10px; border: 1px; border-style: solid; gap: 10px;">${name}</td>
      <td style="padding: 10px; border: 1px; border-style: solid; gap: 10px;">${age}</td>
      <td style="padding: 10px; border: 1px; border-style: solid; gap: 10px;">${gendervalue}</td>
      <td style="padding: 10px; border: 1px; border-style: solid; gap: 10px;">${course}</td>
      <td style="padding: 10px; border: 1px; border-style: solid; gap: 10px;">${email}</td>
      <td style="padding: 10px; border: 1px; border-style: solid; gap: 10px;"><button class="delete-btn" style="background-color: red; color:white; padding:5px; ">Delete</button></td>`;


    newRow.querySelector(".delete-btn").addEventListener("click", function () {
        tablebody.removeChild(newRow);

    });

    tablebody.appendChild(newRow);

    document.getElementById("studentform").reset();
})