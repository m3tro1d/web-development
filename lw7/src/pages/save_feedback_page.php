<?php
function saveFeedbackPage(): void
{
    $saveDir = __DIR__ . '/../../data';
    ensureDir($saveDir);

    $data = formFeedbackArray();
    validateData($data);
    if (thereAreNoErrors($data))
    {
        saveFeedbackFile($saveDir, $data);
        renderTemplate('main.tpl.php', [
            'msg' => 'Успешно сохранено'
        ]);
    }
    else
    {
        renderTemplate('main.tpl.php', $data);
    }
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
        'name' => getPOSTParameter('name'),
        'email' => getPOSTParameter('email'),
        'country' => getPOSTParameter('country'),
        'gender' => getPOSTParameter('gender'),
        'message' => getPOSTParameter('message'),
    ];
}

function validateData(array &$data): void
{
    if (!isValidName($data['name']))
    {
        $data['name-msg'] = 'Некорректное имя';
    }
    if (!isValidEmail($data['email']))
    {
        $data['email-msg'] = 'Некорректный email';
    }
    if (!isValidMessage($data['message']))
    {
        $data['message-msg'] = 'Некорректное сообщение';
    }
    if (!isValidCountry($data['country']))
    {
        $data['country-msg'] = 'Некорректная страна';
    }
    if (!isValidGender($data['gender']))
    {
        $data['gender-msg'] = 'Некорректный пол';
    }
}

function thereAreNoErrors(array &$data): bool
{
    return !(isset($data['name-msg']) ||
        isset($data['email-msg']) ||
        isset($data['message-msg']) ||
        isset($data['country-msg']) ||
        isset($data['gender-msg']));
}

function isValidName(?string $name): bool
{
    return (!empty($name) && preg_match('/^[a-zA-ZА-Яа-я]+$/', $name));
}

function isValidEmail(?string $email): bool
{
    return (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL));
}

function isValidMessage(?string $message): bool
{
    return !empty($message);
}

function isValidCountry(?string $country): bool
{
    $countries = [
        'RUS',
        'USA',
        'GER',
        'ITA',
        'GSK',
    ];
    return (!empty($country) && in_array($country, $countries));
}

function isValidGender(?string $gender): bool
{
    $genders =[
        'male',
        'female',
    ];
    return (!empty($gender) && in_array($gender, $genders));
}

function saveFeedbackFile(string $saveDir, array &$data): void
{
    $savePath = "$saveDir/" . strtolower($data['email']) . '.txt';
    file_put_contents($savePath, serialize($data));
}
