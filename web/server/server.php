<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$data = json_decode(file_get_contents("db.json"), true);

function saveData($data) {
    file_put_contents("db.json", json_encode($data, JSON_PRETTY_PRINT));
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($data['mahasiswas']);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newMahasiswa = json_decode(file_get_contents("php://input"), true);
    $data['mahasiswas'][] = $newMahasiswa;
    saveData($data);
    echo json_encode(['message' => 'Data mahasiswa berhasil ditambahkan']);
} else {
    echo json_encode(['error' => 'Metode HTTP tidak didukung']);
}
?>
