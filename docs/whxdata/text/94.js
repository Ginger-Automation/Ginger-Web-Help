rh._.exports({"0":[["Database Action"]],"1":[["\n  ","\n    "," ","\n    "," Database Action","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Introduction","\n    ","How to Configure Action?","\n    ","\n      ","Pre-requisite","\n      ","Action Operation","\n    ","\n    ","How to use Cassandra in Ginger?","\n    ","\n      ","What is Cassandra?","\n      ","What does Ginger support in Cassandra?","\n      ","Which Cassandra operations are supported in Ginger?","\n      ","How to configure Cassandra in Ginger?","\n      ","How to add Database Action for Cassandra?","\n    ","\n    ","How to use Couchbase in Ginger?","\n    ","\n      ","What is Couchbase?","\n      ","What does Ginger support in Couchbase?","\n      ","Which Couchbase operations are supported in Ginger?","\n      ","How to configure Couchbase in Ginger?","\n      ","How to add Database Action for Couchbase?","\n    ","\n    ","How to use MongoDb in Ginger?","\n    ","\n      ","What is MongoDb?","\n      ","What does Ginger support in MongoDb?","\n      ","Which MongoDb operations are supported in Ginger?","\n      ","How to configure MongoDb in Ginger?","\n      ","How to add Database Action for MongoDb?","\n    ","\n    "," ","\n    ","\n    "," ","\n    "],["\n    ","D","atabase Action is used to update/validate/read data from a database system.","\n    "],["\n    "],["\n    ","             A Solution should be created.","\n    ","             A Data source should be defined. Either define it in Ginger’s DataSource or define the ","database details in the environment.","\n    ","\n    ","Creating Ginger Data Source","\n    ","\n    ","When a new solution is created, the default Data Source is automatically added.","\n    ","It has Key table and a customized table.","\n    ","\n    ","\n    ","To add another “ Key_Table”, right-click on the GingerDataSource, select Add New table-> Add New Key Value table.","\n    ","\n    ","\n    ","Define the key data in the area “ Key_Data” using the + button as shown","\n    ","            ","\n    ","\n    ","\n    ","              The Customized database is manually added using the + button as shown by the arrow","\n    ","             ","\n    ","\n    ","             How to Define Database in Ginger","\n    ","\n    ","In the Solution tab, go to Environments->Default. Then click the desired platform where the database should be connected.","\n    ","Go to the Database tab. Click the + button to add the database connection details.","\n    ","\n    ","\n    ","\n    "],["\n    ","\n    ","        Click on the Business Flows. Click on the ‘+’ icon as shown below","\n    ","         ","\n    ","\n    ","\n    ","Click on ‘Actions Library’","\n    ","\n    ","\n    "," Go to the ‘General Actions’ tab under the ‘Action Library’ screen and double click on ‘DataBase Action’.","\n    ","              ","\n    ","\n    ","This will add the DataBase Action under the Actions","\n    ","\n    ","\n    ","        Double click on it and the below screen should be displayed.","\n    ","    ","\n    ","\n    ","     Go to the ‘Operation Settings’ tab and Select the ‘Environment Application Name’, ‘Environment Application DB Name’ and","\n    ","      the ‘DB Operation Type’ from the respective dropdowns.","\n    ","             ","\n    ","\n    ","The ‘DB Operation Type’ drop-down contains the below options. Select the desired option.","\n    ","\n    ","\n    ","Free SQL - It allows to enter a free SQL query","\n    ","\n    ","Record Count - It allows you to return the count from a table giving an example of the query","\n    ","\n    ","Simple SQL One value – this is used when a query is going to return one value output.","\n    ","\n    ","Here you can select the table from the list of tables in the database. ‘Column’ is selected from the list of columns in the selected table.","\n    ","You can add a where clause if required.","\n    ","\n    ","Update DB- this will update the Database with the query that you will provide.","\n    ","\n    ","           There are 2 options, viz. provide a Free SQL to update the DB or use a file that has multiple queries.","\n    ","          You have to select the “Do commit after Update” check box to commit the changes to the DB.","\n    ","\n    ","\n    ","'Input type’ as ‘From File’ can also be selected. For this, the file needs to have a set of SQL","\n    ","commands.","\n    ","The below screen will be displayed which will give the Browse option to select the file.","\n    ","\n    ","\n    ","\n    "],["\n    "],["\n    ","A","pache Cassandra is a free and open source distributed NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point failure.","\n    ","\n    "],["\n    ","UDT values which have been widely used in Cassandra Database.","\n    ","JSON variant of SELECT and INSERT operation","\n    "],["\n    ","Read Data","\n    ","Write Data","\n    ","Update Data","\n    ","Record Count","\n    ","\n    "],["\n    ","Under the Resources tab, go to Environment and select the desired environment.","\n    ","Using the + button add the Cassandra DB. Enter name, select DB Type as “Cassandra”, enter the host and user name and password if any.","\n    ","\n    ","\n    ","\n    ","\n    ","Click on the Test Connection button to get the connection successful message.","\n    ","\n    "," ","\n    ","               ","\n    ","\n    ","\n    "],["\n    ","1) Click on the Business flow. Click on the ‘+’ icon as shown below","\n    ","             ","\n    ","\n    ","2) Click on ‘Actions Library’","\n    ","\n    ","\n    ","3) Go to the ‘General Actions’ tab under the ‘Action Library’ screen and double click on ‘DataBase Action’.","\n    ","                  ","\n    ","\n    ","    4) This will add the DataBase Action under the Actions","\n    ","    ","\n    ","\n    ","           5) Double click on it and the below screen should be displayed.","\n    ","         ","\n    ","\n    ","\n    ","         6) Go to the ‘Operation Settings’ tab and Select the ‘Environment Application Name’, ‘Environment Application DB     ","\n    ","          Name’ and the ‘DB Operation Type’ from the respective dropdowns.","\n    ","\n    ","\n    ","\n    "],["\n    "],["\n    ","Couchbase DB is an open-source database developed by the Apache software foundation. The focus is on ease of use, embracing the web. It is a NoSQL document store database.","\n    ","\n    "],["\n    ","Used to connect Couchbase DB and perform operations","\n    ","Used to connect buckets of Couchbase DB","\n    ","\n    "],["\n    ","Read Data","\n    ","Write Data","\n    ","Update Data","\n    ","Record Count","\n    ","\n    "],["\n    ","Under the Resources tab, go to Environment and select the desired environment.","\n    ","Using the + button add the Couchbase DB. Enter name, select DB Type as “Couchbase”, enter the host and user name and password if any.","\n    ","\n    ","\n    ","\n    ","Click on the ‘Test connection’ button to get the connection successful message.","\n    ","\n    ","\n    ","\n    "],["\n    ","1) Click on the Business flow. Click on the ‘+’ icon as shown below","\n    ","            ","\n    ","\n    ","2) Click on ‘Actions Library’","\n    ","\n    ","\n    ","3) Go to the ‘General Actions’ tab under the ‘Action Library’ screen and double click on ‘DataBase Action’.","\n    ","             ","\n    ","\n    ","4) This will add the DataBase Action under the Actions","\n    ","\n    ","\n    ","      5) Double click on it and the below screen should be displayed.","\n    ","      ","\n    ","\n    ","\n    ","       6) Go to the ‘Operation Settings’ tab and Select the ‘Environment Application Name’, ‘Environment Application DB Name’","\n    ","        and the ‘DB Operation Type’ from the respective dropdowns.","\n    ","\n    ","\n    ","\n    "],["\n    "],["\n    ","MongoDB is an open-source document database and leading NoSQL database. MongoDB is a cross-platform, document-oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on the concept of collection and document.","\n    ","\n    "],["\n    ","Used to connect MongoDB databases and perform operations","\n    ","Used to perform operations like insert, update, select","\n    ","\n    "],["\n    ","Read Data","\n    ","Write Data","\n    ","Update Data","\n    ","Record Count","\n    ","\n    "],["\n    ","Under the Resources tab, go to Environment and select the desired environment.","\n    ","Using the + button add MongoDb. Enter name, select DB Type as “MongoDb”, enter the Connection String or Host and username and password if any.","\n    ","\n    ","Use the following ways to connect with MongoDb","\n    ","\n    ","Option 1: \"mongodb://user1:password1@localhost/DB\" (Connection String format)","\n    ","\n    ","Option 2: \"mongodb://HostOrIP:27017/DBName\" (TNS/Host/FilePath format)","\n    ","\n    ","\n    ","\n    ","\n    ","Click on the Test connection button to get the connection successful message.","\n    ","\n    ","\n    "],["\n    ","1) Click on the Business flow. Click on the ‘+’ icon as shown below","\n    ","             ","\n    ","\n    ","2) Click on ‘Actions Library’","\n    ","\n    ","\n    ","3) Go to the ‘General Actions’ tab under the ‘Action Library’ screen and double click on ‘DataBase Action’.","\n    ","              ","\n    ","\n    ","4) This will add the DataBase Action under the Actions","\n    ","\n    ","\n    ","        5) Double click on it and the below screen should be displayed.","\n    ","       ","\n    ","\n    ","\n    ","         6) Go to the ‘Operation Settings’ tab and Select the ‘Environment Application Name’, ‘Environment Application DB Name’","\n    ","        and the ‘DB Operation Type’ from the respective dropdowns.","\n    ","\n    ","\n    ","\n    ","\n    ","\n    "," ","\n  ","\n\n"]],"2":[["Introduction "],["How to Configure Action?"],["How to use Cassandra in Ginger?"],["How to use Couchbase in Ginger?"],["How to use MongoDB in Ginger?"]],"3":[[" Pre-requisite"],["Action Operation"],[" What is Cassandra?"],["What does Ginger support in Cassandra?"],[" Which Cassandra operations are supported in Ginger?"],["How to configure Cassandra in Ginger?"],["How to add Database Action for Cassandra?"],["What is Couchbase?"],["What does Ginger support in Couchbase?"],["Which Couchbase operations are supported in Ginger?"],["How to configure Couchbase in Ginger?"],["How to add Database Action for Couchbase?"],["What is MongoDB?"],["What does Ginger support in MongoDB?"],["Which MongoDB operations are supported in Ginger?"],["How to configure MongoDB in Ginger?"],["How to add Database Action for MongoDB?"]],"id":"94"})