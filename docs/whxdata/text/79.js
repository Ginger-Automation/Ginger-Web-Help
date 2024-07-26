rh._.exports({"0":[[" ","Ginger Remote Web Driver"]],"1":[[" ","What is Selenium-Grid?"],[" ","Running Selenium Grid"]],"2":[[" "," Selenium Grid setup & Ginger Remote Web Driver"," ","Contents"," ","What is Selenium-Grid?"," ","When to Use it?"," ","Create New Solution"," ","Running Selenium Grid"," ","Configuring Selenium Grid Agent"," ","Starting the Hub and Nodes"," ","Checking console"," ","‎"],[" ","   Selenium-Grid allows you to run your tests on different machines against different browsers in parallel. That is, running multiple tests at the             same time against different machines running different browsers and operating systems. Essentially, Selenium-Grid supports distributed test            execution. It allows for running your tests in a distributed test execution environment."],[" ","There are two reasons why you might want to use Selenium-Grid."," ","To run your tests against multiple browsers, multiple versions of browsers and browsers running on different operating systems."," ","To reduce the time it takes for the test suite to complete a test pass"," ","          Information on Selenium Grid can be found at:"," ","http://www.seleniumhq.org/docs/07_selenium_grid.jsp#"," ","https://github.com/SeleniumHQ/selenium/wiki/Grid2"," ","http://www.guru99.com/introduction-to-selenium-grid.html"],[" ","                Default Ginger Data Source will be added to every new solution with the Name “GingerDataSource”. The MDB file for the Data Source                       will be copied to the Data Sources Folder of the Solution in the File System."],[" ","Go to Configurations Tab-> Agent and click on the ‘+’ button as shown below."," ","In the below wizard enter the Agent name. Select the Platform type as Web and Driver Type as SeleniumRemoteWebDriver."," ","Click on the Next button"," ","On the Selenium Grid Hub field enter the IP where you wants to configure your hub, if you running your hub on your local machine you can leave it untouched with the default value otherwise specify your hub IP and port and make sure to keep it with the same format HTTP://<IP>:<Port>."," ","On the Browser Name field, select the specific browser you want the agent to run on."," ","Note: Safari agent can be executed on Mac only."," ","Note: Edge can be installed on Windows 10 only."," ","Browser Version (Optional) – if not specified it will refer to any."," ","On the Platform field select the specific Platform you want the agent to run on."," ","Node for all will create a generic node for all browsers available in the selected platform."],[" ","After configuring your agent, click on both Create Hub Installation package and Create Node Installation package."," ","Once clicked a new Dialog box will be started with both Zips files, extract them on your local or the remote machine."," ","Start hub by executing the starthub.bat, leave the window open for your execution."," ","Start the node by executing the startnode.bat file on your local or your remote machine and leave the window open for your execution."," ","This will raise a generic node that fits up to 5 instances from any of the chosen browsers."," ","The Node is being executed with a Random Port, it might be that the port is already taken, if this is the case you can simply create a new node by clicking the node button and execute the new startnode.bat file."," ","If you wish to execute the test on more Machines/Browsers you need to create new nodes by clicking the Create node installation package and executing the new startnode.bat file."],[" ","After starting the hub and nodes you may switch to the Console tab to check for your hub and node status."," ","Return to the Configuration tab and click on Test Agent Configuration button, expected result – the browser Instance is started and the success message is pop upped."," ","Map your web target application to your new agent and execute your test."," ","Note: If you wish to execute multiple browsers in parallel you need to configure one agent for each browser."," ","Note: Safari configuration has few more steps:"," ","Download Safari driver from ","http://www.seleniumhq.org/download/"," ","Open the driver with Safari and do to SafariPreferences  check the Show Develop menu checkbox  Go to Develop and click Allow Remote Automation"]],"3":[[" ","When to Use it?"],[" ","Create New Solution"],[" ","Configuring Selenium Grid Agent"],[" ","Starting the Hub and Nodes"],[" ","Checking console"]],"id":"79"})