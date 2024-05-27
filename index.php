<?php
define('JSON_DIR', __DIR__ . '/json/');

if (!is_dir(JSON_DIR)) {
    mkdir(JSON_DIR, 0777, true);
}

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
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 800px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        main {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        form {
            margin: 20px;
            padding: 20px;
        }
        label {
            font-weight: bold;
            color: #555;
        }
        input[type="file"],
        input[type="text"],
        textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        textarea {
            resize: vertical;
            background-color: black;
            color: white;
        }
        button {
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            background-color: #007BFF;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .message {
            text-align: center;
            color: red;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsonlint/1.6.0/jsonlint.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('formulario_json');
            const jsonData = document.getElementById('dados_json');

            function validarJson(jsonString) {
                try {
                    jsonlint.parse(jsonString);
                    return true;
                } catch (e) {
                    const errorMessage = e.message;
                    const match = errorMessage.match(/line (\d+)/);
                    if (match) {
                        const lineNumber = match[1];
                        alert(`Erro de JSON na linha ${lineNumber}: ${errorMessage}`);
                    } else {
                        alert(`Erro de JSON: ${errorMessage}`);
                    }
                    return false;
                }
            }

            function validarFormulario() {
                if (!validarJson(jsonData.value)) {
                    jsonData.style.border = '2px solid red';
                    return false;
                }
                jsonData.style.border = '2px solid green';
                return true;
            }

            jsonData.addEventListener('blur', validarFormulario);
            form.addEventListener('submit', function(e) {
                if (!validarFormulario()) {
                    e.preventDefault();
                }
            });
        });
    </script>
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
                <textarea name="dados_json" id="dados_json" rows="20" cols="100"><?php echo json_encode($jsonData, JSON_PRETTY_PRINT); ?></textarea>
                
                <button type="submit" name="salvar_json">Salvar JSON</button>
            </form>
        </main>
    </div>
</body>
</html>
