CREATE TABLE team(
    partener_id serial PRIMARY KEY,
    name TEXT,
    role TEXT,
    image TEXT
)

CREATE TABLE approvals(
    approval_id serial PRIMARY KEY,
    name TEXT,
    college TEXT,
    image TEXT
)
