<?php
function getFeedbackPage(): void
{
    decodeJson();
    if (!empty(getPOSTParameter('email')))
    {
        $dataPath = realpath(__DIR__ . '/../../data/' . strtolower(getPOSTParameter('email')) . '.txt');
        if ($dataPath)
        {
            $feedbackContents = getFeedbackContents($dataPath);
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


function getFeedbackContents(string $path): array
{
    return unserialize(file_get_contents($path));
}
