<?php
function getPOSTParameter(string $name): string
{
    return $_POST[$name] ?? '';
}

function getRequestMethod(): string
{
    return $_SERVER['REQUEST_METHOD'];
}

function decodeJson(): void
{
    if ($_SERVER['HTTP_CONTENT_TYPE'] === 'application/json')
    {
        $_POST = json_decode(file_get_contents('php://input'), true);
    }
}
