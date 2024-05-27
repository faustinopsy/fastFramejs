<?php
define('JSON_DIR',  '../json/');

// if (!is_dir(JSON_DIR)) {
//     mkdir(JSON_DIR, 0777, true);
// }

function carregarJson($filename) {
    $filepath = JSON_DIR . $filename;
    if (file_exists($filepath)) {
        $json = file_get_contents($filepath);
        return json_decode($json, true);
    }
    return null;
}

function salvarJson($filename, $data) {
    $filepath = JSON_DIR . $filename;
    $json = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($filepath, $json);
}

$defaultJson = [
    "estiloPadrao" => [
        "border" => "2px solid black",
        "box-sizing" => "border-box"
    ],
    "main" => [
        "tipo" => "main",
        "style" => [
            "border" => "2px solid black",
            "box-sizing" => "border-box",
            "display" => "flex",
            "flex-direction" => "column",
            "background" => "black",
            "height" => "auto"
        ]
    ],
    "article" => [
        "tipo" => "article",
        "style" => [
            "border" => "2px solid black",
            "box-sizing" => "border-box",
            "background" => "lightgreen",
            "display" => "flex",
            "flex-wrap" => "wrap",
            "width" => "100%",
            "height" => "100%"
        ]
    ],
    "section1" => [
        "tipo" => "section",
        "style" => [
            "border" => "2px solid black",
            "box-sizing" => "border-box",
            "background" => "lightcoral",
            "width" => "40%",
            "height" => "300px"
        ]
    ],
    "section2" => [
        "tipo" => "section",
        "style" => [
            "border" => "2px solid black",
            "box-sizing" => "border-box",
            "background" => "lightsalmon",
            "width" => "40%",
            "height" => "300px"
        ],
        "conteudo" => [
            "json" => "./json/formulario.json"
        ]
    ],
    "aside" => [
        "tipo" => "aside",
        "style" => [
            "border" => "dashed 2px",
            "box-sizing" => "border-box",
            "background" => "lightpink",
            "width" => "20%",
            "height" => "300px"
        ]
    ],
    "imagem" => [
        "tipo" => "img",
        "style" => [
            "border" => "2px solid black",
            "box-sizing" => "border-box",
            "width" => "100%",
            "height" => "200px",
            "background" => "url(./img/rick.jpg) 100%",
            "background-repeat" => "no-repeat",
            "background-size" => "cover"
        ]
    ]
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['json_file'])) {
        $filename = basename($_FILES['json_file']['name']);
        $filepath = JSON_DIR . $filename;
        if (move_uploaded_file($_FILES['json_file']['tmp_name'], $filepath)) {
            $jsonData = carregarJson($filename);
        } else {
            echo "Falha ao mover o arquivo carregado.";
        }
    }

    if (isset($_POST['salvar_json'])) {
        $filename = $_POST['filename'];
        $jsonData = json_decode($_POST['dados_json'], true);
        if (json_last_error() === JSON_ERROR_NONE) {
            salvarJson($filename, $jsonData);
            echo "JSON salvo com sucesso!";
        } else {
            echo "Erro: Conteúdo do JSON inválido.";
        }
    }
} else {
    $jsonData = $defaultJson;
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Editor</title>
    <link rel="stylesheet" href="style.css">
    <script src="jsonlint.min.js"></script>
</head>
<body>
    <div class="container">
        <h1>Editor de JSON</h1>
        <main>
            <form method="post" enctype="multipart/form-data">
                <label for="json_file">Carregar JSON:</label>
                <input type="file" name="json_file" id="json_file" accept=".json">
                <button type="submit">Carregar</button>
            </form>

            <form method="post" id="formulario_json">
                <label for="filename">Nome do arquivo JSON:</label>
                <input type="text" name="filename" id="filename" value="<?php echo htmlspecialchars($filename ?? 'novo_arquivo.json'); ?>">

                <label for="dados_json">Conteúdo do JSON:</label>
                <div class="textarea-container">
                    <div class="linhaNumeros" id="linhaNumeros"></div>
                    <textarea name="dados_json" id="dados_json" rows="20" cols="100"><?php echo json_encode($jsonData, JSON_PRETTY_PRINT); ?></textarea>
                </div>
                <button type="submit" name="salvar_json">Salvar JSON</button>
            </form>
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>
