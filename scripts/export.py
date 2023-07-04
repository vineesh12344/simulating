import psycopg2
import pandas as pd
import json

# read json file
with open('../dbconfig.json') as f:
    config= json.load(f)

conn = None
try:
    # Connect to the database
    conn = psycopg2.connect(database = config['dbname'], 
                            user = config['user'], 
                            password = config['password'], 
                            host = 'localhost', 
                            port = config['port'])

    cursor = conn.cursor()

    #delete all data from tables
    sql_drivers = "COPY (SELECT * FROM drivers) TO STDOUT WITH CSV HEADER"
    sql_customers = "COPY (SELECT * FROM customers) TO STDOUT WITH CSV HEADER"

    with open('./data/drivers.csv', 'w', encoding='utf-8') as f:
        cursor.copy_expert(sql_drivers, f)

    with open('./data/customers.csv', 'w', encoding='utf-8') as f:
        cursor.copy_expert(sql_customers, f)

    #commit transaction
    conn.commit()

    #close the database communication
    cursor.close()
except psycopg2.DatabaseError as error:
    print(error)
finally:
    if conn is not None:
        conn.close()