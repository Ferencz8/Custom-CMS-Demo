CREATE DATABASE BackOffice

CREATE TABLE Navbars(
    Id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    Name VARCHAR(MAX) NOT NULL,
    Url VARCHAR(MAX) NOT NULL,
    IsPublished BIT NOT NULL DEFAULT 0,
    CreatedDate DATETIME NOT NULL,
    IsDeleted BIT,
    DisplayOrder INT 
)
