<?php
function getFeedbackPage(): void
{
    if (!empty(getPOSTParameter('email')))
    {
        $dataPath = realpath(__DIR__ . '/../../data/' . strtolower(getPOSTParameter('email')) . '.txt');
        if ($dataPath)
        {
            $userInfo = unserialize(file_get_contents($dataPath));
            renderTemplate('feedbacks.tpl.php', $userInfo);
        }
        else
        {
            renderTemplate('feedbacks.tpl.php', [
                'error' => true,
                'msg' => 'Пользователя нет в базе',
                'email' => getPOSTParameter('email')
            ]);
        }
    }
    else
    {
        renderTemplate('feedbacks.tpl.php', [
            'error' => true,
            'msg' => 'Пустой email'
        ]);
    }
}
