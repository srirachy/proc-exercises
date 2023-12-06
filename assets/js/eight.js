const getRes = () => {
    const inputOne = document.getElementById("input-one").value;
    const inputTwo = document.getElementById("input-two").value;
    const check = (!Number(inputOne) && !Number(inputTwo)) ? 'Please enter a valid number.' : '';
    if(!check){
        const res = Number(inputOne) + Number(inputTwo);
        document.getElementById('res-eight').innerHTML = String(res);
    } else {
        alert(check);
    }
}