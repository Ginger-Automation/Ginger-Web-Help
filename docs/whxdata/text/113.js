rh._.exports({"0":[[" ","Database Action"]],"1":[[" ","How to use Cassandra in Ginger?"],[" ","How to use Couchbase in Ginger?"],[" ","How to use MongoDB in Ginger?"]],"2":[[" "," Database Action"],[" ","D","atabase Action is used to update/validate/read data from a database system."],[" ","             A Solution should be created."," ","             A Data source should be defined. Either define it in Ginger’s DataSource or define the ","database details in the environment."," ","Creating Ginger Data Source"," ","When a new solution is created, the default Data Source is automatically added."," ","It has Key table and a customized table."," ","To add another “ Key_Table”, right-click on the GingerDataSource, select Add New table-> Add New Key Value table."," ","Define the key data in the area “ Key_Data” using the + button as shown"," ","              The Customized database is manually added using the + button as shown by the arrow"," ","             How to Define Database in Ginger"," ","In the Solution tab, go to Environments->Default. Then click the desired platform where the database should be connected."," ","Go to the Database tab. Click the + button to add the database connection details."],[" ","        Click on the Business Flows. Click on the ‘+’ icon as shown below"," ","Click on ‘Actions Library’"," "," Go to the ‘General Actions’ tab under the ‘Action Library’ screen and double click on ‘DataBase Action’."," ","This will add the DataBase Action under the Actions"," ","        Double click on it and the below screen should be displayed."," ","     Go to the ‘Operation Settings’ tab and Select the ‘Environment Application Name’, ‘Environment Application DB Name’ and"," ","      the ‘DB Operation Type’ from the respective dropdowns."," ","The ‘DB Operation Type’ drop-down contains the below options. Select the desired option."," ","Free SQL - It allows to enter a free SQL query"," ","Record Count - It allows you to return the count from a table giving an example of the query"," ","Simple SQL One value – this is used when a query is going to return one value output."," ","Here you can select the table from the list of tables in the database. ‘Column’ is selected from the list of columns in the selected table."," ","You can add a where clause if required."," ","Update DB- this will update the Database with the query that you will provide."," ","           There are 2 options, viz. provide a Free SQL to update the DB or use a file that has multiple queries."," ","          You have to select the “Do commit after Update” check box to commit the changes to the DB."," ","'Input type’ as ‘From File’ can also be selected. For this, the file needs to have a set of SQL"," ","commands."," ","The below screen will be displayed which will give the Browse option to select the file."],[" ","A","pache Cassandra is a free and open source distributed NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point failure."],[" ","UDT values which have been widely used in Cassandra Database."," ","JSON variant of SELECT and INSERT operation"],[" ","Read Data"," ","Write Data"," ","Update Data"," ","Record Count"],[" ","Under the Resources tab, go to Environment and select the desired environment."," ","Using the + button add the Cassandra DB. Enter name, select DB Type as “Cassandra”, enter the host and user name and password if any."," ","Click on the Test Connection button to get the connection successful message."],[" ","1) Click on the Business flow. Click on the ‘+’ icon as shown below"," ","2) Click on ‘Actions Library’"," ","3) Go to the ‘General Actions’ tab under the ‘Action Library’ screen and double click on ‘DataBase Action’."," ","    4) This will add the DataBase Action under the Actions"," ","           5) Double click on it and the below screen should be displayed."," ","         6) Go to the ‘Operation Settings’ tab and Select the ‘Environment Application Name’, ‘Environment Application DB     "," ","          Name’ and the ‘DB Operation Type’ from the respective dropdowns."],[" ","Couchbase DB is an open-source database developed by the Apache software foundation. The focus is on ease of use, embracing the web. It is a NoSQL document store database."],[" ","Used to connect Couchbase DB and perform operations"," ","Used to connect buckets of Couchbase DB"],[" ","Read Data"," ","Write Data"," ","Update Data"," ","Record Count"],[" ","Under the Resources tab, go to Environment and select the desired environment."," ","Using the + button add the Couchbase DB. Enter name, select DB Type as “Couchbase”, enter the host and user name and password if any."," ","Click on the ‘Test connection’ button to get the connection successful message."],[" ","1) Click on the Business flow. Click on the ‘+’ icon as shown below"," ","2) Click on ‘Actions Library’"," ","3) Go to the ‘General Actions’ tab under the ‘Action Library’ screen and double click on ‘DataBase Action’."," ","4) This will add the DataBase Action under the Actions"," ","      5) Double click on it and the below screen should be displayed."," ","       6) Go to the ‘Operation Settings’ tab and Select the ‘Environment Application Name’, ‘Environment Application DB Name’"," ","        and the ‘DB Operation Type’ from the respective dropdowns."],[" ","MongoDB is an open-source document database and leading NoSQL database. MongoDB is a cross-platform, document-oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on the concept of collection and document."],[" ","Used to connect MongoDB databases and perform operations"," ","Used to perform operations like insert, update, select"],[" ","Read Data"," ","Write Data"," ","Update Data"," ","Record Count"],[" ","Under the Resources tab, go to Environment and select the desired environment."," ","Using the + button add MongoDb. Enter name, select DB Type as “MongoDb”, enter the Connection String or Host and username and password if any."," ","Use the following ways to connect with MongoDb"," ","Option 1: \"mongodb://user1:password1@localhost/DB\" (Connection String format)"," ","Option 2: \"mongodb://HostOrIP:27017/DBName\" (TNS/Host/FilePath format)"," ","        Option 3:  ","mongodb://user:password@HostOrIP:27017/DBName?authSource=admin&readPreference=primary"," ","Note",": ","If Database have username and password then use option 3 connection string."," ","Click on the Test connection button to get the connection successful message."],[" ","1) Click on the Business flow. Click on the ‘+’ icon as shown below"," ","2) Click on ‘Actions Library’"," ","3) Go to the ‘General Actions’ tab under the ‘Action Library’ screen and double click on ‘DataBase Action’."," ","4) This will add the DataBase Action under the Actions"," ","        5) Double click on it and the below screen should be displayed."," ","         6) Go to the ‘Operation Settings’ tab and Select the ‘Environment Application Name’, ‘Environment Application DB Name’"," ","        and the ‘DB Operation Type’ from the respective dropdowns."],[" "," 1. Example Query to update Date is Date Format:","\n            db.GBOP_ExecutionDetails.UpdateOne( {ExecutedBy: \"aditya\"}, { $set: { EndTime : new ISODate(\"1995-04-02T10:26:54.375+00:00\")}})"," ","  2. "," Example Query to update String :","\n            db.GBOP_ExecutionDetails.UpdateOne( ","{","ExecutedBy: \"aditya\"","}",", ","{"," $set: ","{","\"Execution_Source\": \"Bulkb\"","}}",")"," ","  3. "," Example Query to updateMany String:"," "," db.GBOP_ExecutionDetails.updateMany( ","{","ExecutedBy: \"aditya\"","}",", ","{"," $set: ","{","\"Execution_Source\": \"Bulkd\"","}}",")"],[" "," Example Query to get Record Count for database ","\n              {databaseName}"],[" ","   1. ","Example Query to Insert One Record:"," "," db.GingerRegressionSuitTestingCollection.insertOne(","{","item: \"canvas\", qty: ","45",", size: ","{"," h: ","10",", w: ","15.25",", uom: \"cm\" ","}",", status: \"A\"","}",")"],[" ","   1. "," Example Query to Find Record  by single parameter:"," "," db.GBOP_ExecutionDetails.find({ \"ExecutedBy\": \"aditya\"})"," ","   2. ","Example Query to Find Record by Multiple parameters  "," "," db.GBOP_ExecutionDetails.find(","{"," \"ExecutedBy\": \"aditya\",\"Flow\":\"De-Install\",\"Status\":\"Failed\"","}",")"]],"3":[[" ","Introduction "],[" ","How to Configure Action?"," "," Pre-requisite"],[" ","Action Operation"],[" "," What is Cassandra?"],[" ","What does Ginger support in Cassandra?"],[" "," Which Cassandra operations are supported in Ginger?"],[" ","How to configure Cassandra in Ginger?"],[" ","How to add Database Action for Cassandra?"],[" ","What is Couchbase?"],[" ","What does Ginger support in Couchbase?"],[" ","Which Couchbase operations are supported in Ginger?"],[" ","How to configure Couchbase in Ginger?"],[" ","How to add Database Action for Couchbase?"],[" ","What is MongoDB?"],[" ","What does Ginger support in MongoDB?"],[" ","Which MongoDB operations are supported in Ginger?"],[" ","How to configure MongoDB in Ginger?"],[" ","How to add Database Action for MongoDB?"],[" ","MongoDB Examples of Update Record, Record Count, Insert Record and Find Record"]],"4":[[" ","        'Update' Record in MongoDB"],[" ","         'Record Count' in MongoDB"],[" ","       'Insert' Record in MongoDB"],[" ","  'Find' Record in MongoDB"]],"id":"113"})