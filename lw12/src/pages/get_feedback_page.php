<?php
function getFeedbackPage(): void
{
    header('Content-Type: application/json');
    decodeJson();

    $email = getPOSTParameter('email');
    if (!empty($email))
    {
        $db = Database::getInstance();
        $feedback = $db->getFeedback($email);
        if (!empty($feedback))
        {
            header('HTTP/1.1 200 OK');
            echo json_encode($feedback);
        }
        else
        {
            header('HTTP/1.1 404 Not Found');
            echo json_encode([
                'message' => 'Пользователя нет в базе'
            ]);
        }
    }
    else
    {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode([
            'message' => 'Пустой email'
        ]);
    }
}
