rh._.exports({"0":[["Java Execution Action"]],"1":[["\n  ","\n    "," ","\n    "," Java Execution Action ","\n    "," ","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Description","\n    ","How to Use It","\n    "," ","\n    "," ","\n    ","\n      ‎","\n    "],["\n    ","         ","The “Java Integration Action” should be used in case a Java executor needs to be integrated with the automation flow.","\n    "," Using this action user can run the Java Jar with a set of inputs sent from Ginger and process the returned values of the Jar.","\n    "],["\n    "],["\n    ","Open the Java Project in Eclipse or any Java IDE and the class file and add a Print statement with the prefix “GINGER_Description” followed by a description to explain what this file or script is for.","\n    ","Add print statements with the prefix “GINGER_$” for all the arguments to the program. E.g. in the below case, there are 2 arguments. So we added 2 Print statements with Variable name NumberA and NumberB","\n    ","Whenever you want to capture the output, add the Print \"~~~GINGER_RC_START~~~\". This indicates the start of the ginger output","\n    ","To print the variables and other info which will be captured in Ginger, add a print statement with the details","\n    ","Whenever you want to end the output capture, add the Print \"~~~GINGER_RC_END~~~\". This indicates the end of the ginger output","\n    ","\n    ","              ","\n    "," ","\n    ","\n    ","\n    ","\n    ","               6. Go to File and Click on export","\n    ","                ","\n    "," ","\n    ","\n    ","             7. On the export window select Java Jar File","\n    ","             ","\n    "," ","\n    ","\n    "," 8. Select the project to export and jar location.","\n    ","\n    ","              ","\n    ","\n    ","\n    ","              9. Select the main class name on the export wizard steps and finish.","\n    ","             ","\n    ","\n    ","           10.Copy the jar file created and paste it in Ginger solution under Documents/Java Folder","\n    ","           11.Add Java Exe action and select the Jar file added","\n    ","           12.Verify that the description is the same as configured in step 1","\n    ","           13.Verify that Variables are the same as configured in step 2 and 3","\n    ","           14.Provide input values and run the action","\n    ","\n    ","\n    ","          Preconditions:","\n    ","\n    ","         Setup the Action in Ginger","\n    ","\n    ","         Create a solution with a java agent.","\n    ","        ","\n    ","\n    ","      Double click on ‘Business flow’ and then click on the ‘add new (+)’ button shown below.","\n    ","       ","\n    ","\n    ","       Click on ‘Actions Library’ and then select the ‘General Action’ and select the ‘Java Execution Action’.","\n    ","       Shown below.","\n    ","        ","\n    ","\n    ","          ","\n    ","\n    ","          Below the window is displaying","\n    ","           ","\n    ","\n    ","           10.Copy the jar file created and paste it in Ginger solution under Documents/Java Folder","\n    ","           11.Add Java Exe action and select the Jar file added","\n    ","           12.Verify that the description is the same as configured in step 1","\n    ","          13.Verify that Variables are the same as configured in step 2 and 3","\n    ","          14.Provide input values and run the action","\n    ","\n    ","         ","\n    ","\n    ","           15.Verify the expected result is captured in the output value.","\n    ","           ","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    "," ","\n    "," ","\n    "," ","\n  ","\n\n"]],"2":[["Description"],[" "],["How to Use It"]],"id":"66"})