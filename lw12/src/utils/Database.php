<?php
class Database
{
    private static ?Database $instance = null;
    private PDO $connection;

    private function __construct()
    {
        $this->connection = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    }

    public static function getInstance(): Database
    {
        if (self::$instance === null)
        {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function saveFeedback(array $feedback): void
    {
        $stm = $this->connection->prepare('REPLACE INTO feedback
                (name, email, country, gender, message)
            VALUES
                (:name, :email, :country, :gender, :message);');
        $stm->execute([
            ':name' => $feedback['name'],
            ':email' => $feedback['email'],
            ':country' => $feedback['country'],
            ':gender' => $feedback['gender'],
            ':message' => $feedback['message'],
        ]);
        $stm->fetch();
    }

    public function getFeedback(string $email): ?array
    {
        $stm = $this->connection->prepare('SELECT *
            FROM feedback
            WHERE email=:email');
        $stm->execute([
            ':email' => $email,
        ]);
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        unset($result['id']);
        return $result ? $result : null;
    }
}
