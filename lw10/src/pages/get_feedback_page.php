<?php
function getFeedbackPage(): void
{
    decodeJson();
    $email = getPOSTParameter('email');
    if (!empty($email))
    {
        $feedbackPath = getFeedbackPath($email);
        if (!empty($feedbackPath))
        {
            $feedbackContents = getFeedbackContents($feedbackPath);
            header('HTTP/1.1 200 OK');
            echo json_encode($feedbackContents);
        }
        else
        {
            header('HTTP/1.1 404 Not Found');
            echo json_encode([
                'msg' => 'Пользователя нет в базе'
            ]);
        }
    }
    else
    {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode([
            'msg' => 'Пустой email'
        ]);
    }
}


function getFeedbackPath(string $email): string
{
    define("DATA_DIRECTORY", __DIR__ . '/../../data/');
    return realpath(DATA_DIRECTORY . strtolower($email) . '.txt') ?? '';
}

function getFeedbackContents(string $path): array
{
    return unserialize(file_get_contents($path));
}
