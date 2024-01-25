rh._.exports({"0":[[" ","Working with Cosmos DB using Ginger"]],"1":[[" ","Working with Cosmos DB"]],"2":[[" ","Ginger supports integration with Azure Cosmos DB to connect and execute DB quries for validations and fetching the data require for Automation flows."," ","Current supported functionalities are:"," ","Configure connection string and check Cosmos connectivity"," ","Run select query on Cosmos Container"," ","Run record count query on Cosmos Container"," ","Update existing record in Container"," ","Insert new record into Container"],[" ","Cosmos DB and Container structure should be set-up and Cosmos Db should be reachable over the Internet."],[" ","To Configure Cosmos Db in Ginger, go to Environments -> Your Environment -> Databases and Click on the ‘","+","’ Symbol. From the dropdown, select CosmosDb as shown below. To configure Connection String, click on the ‘…’ button in your Cosmos entry."," ","For Connection string, ","Please refer to below Screenshot. "," ","You can also copy-paste the connection string from your Azure portal and at the end, append the name of the Db that you want to point to. "," ","If you have multiple DBs in your Cosmos instance, you will need multiple entries in the Environments Database table. "," ","Click on the ","Test Connection"," (",") button to test connectivity."," ","Configuring Database Action for Cosmos"," ","Database Action can be added from Action Library -> General action"," ","For Cosmos Db, Ginger supports below operations:"," ","Free SQL"," ","Insert"," ","Record Count"," ","Simple SQL One Value"," ","Update DB"," ","Free SQL Operation"," ","The ","Free SQL"," operation lets you input any SQL query that you’d normally run on your Cosmos console. "," ","Note :"," For SQL query to work properly, the Container name is case-sensitive. It must match with the exact name of the Container present in your Db, otherwise the API will not be able to identify the correct Container."," ","Record Count Operation"," ","Record count lets you simply enter the Container name and any where condition you wish to add, and returns the count of elements associated with that query"," ","Insert"," ","For Inserting data into Cosmos Container, you need to select the Container name in the dropdown provided, and provide the Primary Key (id in below screenshot) and Partition Key (LastName in below screenshot) values, along with the JSON that you wish to push to the Container. Please refer below screenshot."," ","Update DB"," ","To update entry in Cosmos db, we will leverage the ","Partial Update"," or ","Patch Operation"," provided by Cosmos. "," ","For configuring this action, you need to select the Container name from the dropdown, provide Primary and Partition Key Values, "," ","Then enter the Paths and the updated values of the JSON Nodes which you wish to modify. "," ","For reference on how to provide Path to corresponding JSON Node, please check these links:"," ","https://docs.microsoft.com/en-us/azure/Cosmos-db/partial-document-update"," ","https://sajeetharan.com/2022/02/22/leveraging-partial-document-update-with-with-Cosmos-db-rest-operation/"," ","Please note that we can add more than one JSON Node if we require, we have just shown one as an example."," ","Simple SQL One Value"," ","For Simple SQL One Value, you need to simply select the Container name from the dropdown and add any condition if required, as shown below, and Ginger will internally construct the query, execute it on Cosmos and show you the results."]],"3":[[" ","Prerequisites"],[" ","Configure Cosmos Db"]],"id":"77"})