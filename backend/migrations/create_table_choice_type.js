export const choiceType = `CREATE TABLE IF NOT EXISTS choice_type (
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    question_id INT NOT NULL,
    name VARCHAR NOT NULL,
    isAnswer BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);`;
