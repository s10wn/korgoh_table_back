CREATE TABLE orders(id SERIAL PRIMARY KEY, 
name VARCHAR(255), 
address VARCHAR(255),  
date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
created_date VARCHAR(255), 
end_date VARCHAR(255), 
actual_date VARCHAR(255), 
price INTEGER,
prepayment INTEGER, 
rest INTEGER, 
status VARCHAR(255), 
comment VARCHAR(255), 
difficulty VARCHAR(255), 
responsible VARCHAR(255), 
deal VARCHAR(255));

create TABLE material( 
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    price INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES orders (id)
);

end_date, 
actual_date, 
price,
prepayment, 
rest, 
status, 
comment, 
difficulty, 
responsible, 
deal
