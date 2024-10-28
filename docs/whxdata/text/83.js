rh._.exports({"0":[[" ","Java Execution Action"]],"1":[[" ","Description"],[" ","How to Use It"]],"3":[[" "," Java Execution Action "],[" ","The “Java Integration Action” should be used in case a Java executor needs to be integrated with the automation flow."," "," Using this action user can run the Java Jar with a set of inputs sent from Ginger and process the returned values of the Jar."],[" ","Open the Java Project in Eclipse or any Java IDE and the class file and add a Print statement with the prefix “GINGER_Description” followed by a description to explain what this file or script is for."," ","Add print statements with the prefix “GINGER_$” for all the arguments to the program. E.g. in the below case, there are 2 arguments. So we added 2 Print statements with Variable name NumberA and NumberB"," ","Whenever you want to capture the output, add the Print \"~~~GINGER_RC_START~~~\". This indicates the start of the ginger output"," ","To print the variables and other info which will be captured in Ginger, add a print statement with the details"," ","Whenever you want to end the output capture, add the Print \"~~~GINGER_RC_END~~~\". This indicates the end of the ginger output"," ","               6. Go to File and Click on export"," ","             7. On the export window select Java Jar File"," "," 8. Select the project to export and jar location."," ","              9. Select the main class name on the export wizard steps and finish."," ","           10.Copy the jar file created and paste it in Ginger solution under Documents/Java Folder"," ","           11.Add Java Exe action and select the Jar file added"," ","           12.Verify that the description is the same as configured in step 1"," ","           13.Verify that Variables are the same as configured in step 2 and 3"," ","           14.Provide input values and run the action"," ","          Preconditions:"," ","         Setup the Action in Ginger"," ","         Create a solution with a java agent."," ","      Double click on ‘Business flow’ and then click on the ‘add new (+)’ button shown below."," ","       Click on ‘Actions Library’ and then select the ‘General Action’ and select the ‘Java Execution Action’."," ","       Shown below."," ","          Below the window is displaying"," ","           10.Copy the jar file created and paste it in Ginger solution under Documents/Java Folder"," ","           11.Add Java Exe action and select the Jar file added"," ","           12.Verify that the description is the same as configured in step 1"," ","          13.Verify that Variables are the same as configured in step 2 and 3"," ","          14.Provide input values and run the action"," ","           15.Verify the expected result is captured in the output value."]],"id":"83"})