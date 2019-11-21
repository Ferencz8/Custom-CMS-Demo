PublicSite: https://ferencz8.github.io/Custom-CMS-Demo/public
BackOffice: https://ferencz8.github.io/Custom-CMS-Demo

Custom CMS built using:
- Angular 7 for FrontEnd (FE) 
- ASP.NET Core 2.0 for BackEnd/BackOffice (BE)
- SQL Server / PetaPoco for the database

Steps to setup:
1. Run "npm install" for the angular project in the main folder.
2. Run "ng serve --open" to start the FE.
3. Change in /BackOffice/appsettings.json the connection string to the SQL Server.
4. Run the scripts from: BackOffice\Repositories\Scripts\Initial.sql to create the db schema.
5. Build/Restore Nuget packages using Visual Studio 2017+.
6. Start the BE on port 44377
 
