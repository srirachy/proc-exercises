const getRes = () => {
    const inputOne = document.getElementById("input-one").value;
    const inputTwo = document.getElementById("input-two").value;
    const check =
      isNaN(inputOne) && isNaN(inputTwo)
        ? "Please enter a valid number."
        : isNaN(inputOne)
        ? "Please enter a valid number."
        : isNaN(inputTwo)
        ? "Please enter a valid number."
        : "";
    if(!check){
        const res = Number(inputOne) + Number(inputTwo);
        document.getElementById('res-eight').innerHTML = 'Total: ' + String(res);
    } else {
        alert(check);
    }
}