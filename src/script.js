const BillInput = document.getElementById('BillInput');
const NoPeople = document.getElementById('NoPeople');
const NoPeopleBody = document.getElementById('NoPeopleBody');

function Error_handling_people(e) {
    if(isNaN(e.target.value))
        console.log('true');
    else
        console.log('false');

    if (!isNaN(Number(NoPeople.value.trim())) && NoPeople.value.trim() !== "" && Number.isFinite(NoPeople.value.trim())) {
        console.log('true')
        NoPeopleBody.classList.add('focus-within:outline-2')
        NoPeopleBody.classList.add('outline-Agreen')
    }
    else {
        console.log("FAslie");
        NoPeopleBody.classList.add('focus-within:outline-2')
        NoPeopleBody.classList.add('outline-red-500')
    }
}

NoPeople.addEventListener('focus',Error_handling_people(e));