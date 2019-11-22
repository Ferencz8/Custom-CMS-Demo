The [BackOffice](https://ferencz8.github.io/Custom-CMS-Demo) & [PublicSite](https://ferencz8.github.io/Custom-CMS-Demo/public) can be accessed using Github Pages. 

# Description
I built this CMS in order to better understand the concept behind an actual CMS.
I used a CSS template and modified it to have static content, which cannot be changed via backoffice, and editable content. There are 2 types of editable contents: Navbars and Widgets. 

Navbars appear on the top of the page(and their link can be mapped to the id's of widgets, e.g. #about)
Widgets are also of 2 types: 
- Html Widget, which uses a Rich Text Editor 
- Product Widget, which is displayed in the Portfolio section

### Built using:
- Angular 7 for FrontEnd (FE) 
- ASP.NET Core 2.0 for BackEnd/BackOffice (BE)
- SQL Server / PetaPoco for the database

### Steps to setup:
1. Run "npm install" for the angular project in the main folder.
2. Run "ng serve --open" to start the FE.
3. Change in /BackOffice/appsettings.json the connection string to the SQL Server.
4. Run the scripts from: BackOffice\Repositories\Scripts\Initial.sql to create the db schema.
5. Build/Restore Nuget packages using Visual Studio 2017+.
6. Start the BE on port 44377
 
### ToDos:
1. Add functionality to Delete Widgets/Navbars
2. Add functionality to publish / unpublish.
3. Add display ordering
