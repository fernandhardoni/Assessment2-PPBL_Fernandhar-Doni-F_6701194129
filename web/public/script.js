$(document).ready(function () {
    displayMahasiswas();
});

function displayMahasiswas() {

    $.ajax({
        url: 'server/server.php',
        type: 'GET',
        dataType: 'json',
        success: function (mahasiswas) {
            updateTable(mahasiswas);
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
}

function addMahasiswa() {
    const nama = $('#nama').val();
    const nim = $('#nim').val();

    $.ajax({
        url: 'server/server.php',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ nama, nim }),
        success: function (response) {
            displayMahasiswas();
            $('#nama').val('');
            $('#nim').val('');
            console.log(response.message);
        },
        error: function (xhr, status, error) {
            console.error('Error adding data:', error);
        }
    });
}

function updateTable(mahasiswas) {
    const tableBody = $('#mahasiswaTableBody');
    tableBody.empty();

    mahasiswas.forEach(mahasiswa => {
        tableBody.append(`<tr><td>${mahasiswa.nama}</td><td>${mahasiswa.nim}</td></tr>`);
    });
}
