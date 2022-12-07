export const enrollments = `CREATE TABLE IF NOT EXISTS enrollments (
    id INT GENERATED BY DEFAULT AS IDENTITY,
    course_id INT NOT NULL,
    user_id INT NOT NULL,
    enroll_date VARCHAR NOT NULL,
    unenroll_date VARCHAR,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY ("id"),
    FOREIGN KEY ("user_id") REFERENCES "users" ("id"),
    FOREIGN KEY ("course_id") REFERENCES "courses" ("id")
);`;