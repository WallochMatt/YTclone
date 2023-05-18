-- CREATE DATABASE IF NOT EXISTS yt_db;
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'yt_db')
BEGIN
    CREATE DATABASE database_name;
END;
GO