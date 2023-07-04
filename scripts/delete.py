import psycopg2
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
    cursor.execute("TRUNCATE drivers;")
    cursor.execute("TRUNCATE customers;")

    #commit transaction
    conn.commit()

    #close the database communication
    cursor.close()
except psycopg2.DatabaseError as error:
    print(error)
finally:
    if conn is not None:
        conn.close()