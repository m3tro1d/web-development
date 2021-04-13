<?php
function saveFeedbackPage(): void
{
    $saveDir = __DIR__ . '/../../data';
    ensureDir($saveDir);

    $data = formFeedbackArray();
    echo var_dump($data);
    $args = checkFeedbackArray($data);
    if (!$args['error'])
    {
        saveFeedbackFile($saveDir, $data);
    }
    renderTemplate('main.tpl.php', $args);
}


function ensureDir(string $dirName): void
{
    if (!is_dir($dirName))
    {
        mkdir($dirName);
    }
}

function formFeedbackArray(): array
{
    return [
        'name' => checkName(getPOSTParameter('name')),
        'email' => checkEmail(getPOSTParameter('email')),
        'country' => checkCountry(getPOSTParameter('country')),
        'gender' => checkGender(getPOSTParameter('gender')),
        'message' => checkMessage(getPOSTParameter('message'))
    ];
}

function checkName(string $name): string
{
    if (isset($name) && !empty($name) && preg_match('/[a-zA-ZА-Яа-я]+/', $name))
    {
        return $name;
    }
    return '';
}

function checkEmail(string $email): string
{
    if (isset($email) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        return $email;
    }
    return '';
}

function checkCountry(string $country): string
{
    if (isset($country) && !empty($country))
    {
        return $country;
    }
    return '';
}

function checkGender(string $gender): string
{
    return checkCountry($gender);
}

function checkMessage(string $message): string
{
    return checkCountry($message);
}

function checkFeedbackArray(array $data): array
{
    if (empty($data['name']))
    {
        $data['error'] = true;
        $data['msg'] = 'Некорректное имя';
    }
    else if (empty($data['email']))
    {
        $data['error'] = true;
        $data['msg'] = 'Некорректный email';
    }
    else if (empty($data['message']))
    {
        $data['error'] = true;
        $data['msg'] = 'Некорректное сообщение';
    }
    else
    {
        $data['msg'] = 'Успешно сохранено';
    }
    return $data;
}

function saveFeedbackFile(string $saveDir, array $data): void
{
    $savePath = "$saveDir/" . strtolower($data['email']) . '.txt';
    file_put_contents($savePath, serialize($data));
}
