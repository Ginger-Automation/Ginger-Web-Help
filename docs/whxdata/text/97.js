rh._.exports({"0":[["Unix Agent"]],"1":[["\n  ","\n    "," ","\n    "," ","\n    "," Unix Agent","\n    "," ","\n    "," ","\n    ","Contents","\n    ","What is Unix Agent?","\n    ","How to create Unix Agent?","\n    ","How to map Unix Agent?","\n    ","Create Public and Private Key of UNIX","\n    ","\n      ","Connecting UNIX from Windows without RSA/password","\n      ","Connecting UNIX server from another Unix server without RSA/password","\n    ","\n    ","How to Create PrivateKey for RSA Bypass?","\n    "," ","\n    "],["\n    "],["\n    "],["\n    ","Unix Agent is the driver which are used for execution of Unix based target application.","\n    "," ","\n    "," ","\n    "],["\n    ","Go to the Configurations tab and click on Agents. Click on the + button to add new Agent.","\n    ","             ","\n    "," ","\n    ","           The below wizard is displayed. It gives information about the Agent and its usage.","\n    ","          Click on the Next button to add a new agent.","\n    "," ","\n    ","         ","\n    "," ","\n    ","Enter the name, platform as Unix. Click on Add button to associate a Tag if required. Click on the Next button.","\n    ","\n    "," ","\n    ","Enter the mandatory connection details like the Host, user name and password.","\n    ","Click on ‘Test Agent Configuration’ button. Connection successful message is display if connection is a success.","\n    ","Click on the Finish button to add the Agent.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","              In order to use this Agent for the execution, we have to map the Agent to the Business Flows.","\n    "," ","\n    ","             When a new solution is created, the default Agent is already mapped to the Business Flow.","\n    "," ","\n    ","Mapping agent to the Business Flow","\n    ","Go to the Business Flows tab and double click on the required Business Flow.","\n    ","Click on the ‘Change Agent Mapping’ button as shown below.","\n    ","\n    "," ","\n    ","The below window will be displayed where only those agents will be displayed whose platform type is same as the target application platform type.","\n    ","Select the desired agent and click on the Map button to map the agent.","\n    ","\n    "," ","\n    ","            The target application of the Activity can be updated by double clicking on the Activity and selecting the application as shown below.","\n    ","             For Unix, it is Mediation.","\n    ","            ","\n    "," ","\n    "," ","\n    "],["\n    "],["\n    ","\n    "," Login to Jump Box without RSA","\n    "," Download Puttygen -> http://tartarus.org/~simon/putty-snapshots/x86/puttygen.exe","\n    "," Open Puttygen and click on “Generate” Key","\n    ","\n    "],["\n    "],["\n    "," ","\n    "," Save Private Key with .ppk extension","\n    "],["\n    "],["\n    "],["\n    "],["\n    ","\n    "],["\n    "],["\n    "],["\n    "],["\n    "],["\n    "],["\n    "],["\n    "],["\n    "],["\n    "],["\n    ","Login Putty with Private Key.","\n    "," ","\n    ","Enter Host Name and select connection Type is SSH","\n    "," ","\n    ","      ","\n    "," ","\n    ","     Select Data under Connection Tree and Enter ATT UID on Auto-login username","\n    ","\n    "," ","\n    ","              Expand SSH and select Auth and Browse you Private Key and Map.","\n    ","              Click on Open Button","\n    "," ","\n    "],["\n    "],["\n    ","For ATT projects, we can use their portal to publish the public key to all the servers which are defined under the role.","\n    "," ","\n    ","      ","  Updating public key at all the target server","s","\n    "," ","\n    ","            Login to below link and update your Public Key.","\n    "," ","\n    "," Url: - ","http://uam.it.att.com/","\n    "," ","\n    ","           Click on SSHKEY Manager Home Page","\n    "," ","\n    ","              ","\n    "," ","\n    ","                 Search your ATT UID and click on Add Row link.","\n    ","                 Enter your ATT UID and paste public key (openSSH format) in SSH_KEY","\n    ","                 ","\n    "," ","\n    ","                "," Note: Once you update public key on above link, It Will take 24 to 48 hour time to get access other servers.","\n    ","\n    ","\n    ","             Updating private key in all the source servers","\n    ","\n    ","                First, get the openssh format private key from the putty gen. To do so:","\n    ","\n      ","                 Open Putty gen","\n      ","                Load the already generated private key (.ppk) by clicking on the “load” button","\n    ","\n    ","                ","\n    "," ","\n    ","After loading the private key, select “Export OpenSSH Key” option from the tab “Conversions”.","\n    ","    ","\n    "," ","\n    ","  Save this Open ssh format private key in a file.","\n    "," Now, use this private key at all the source servers by pasting it under “id_rsa” file under “.ssh” directory for the user.","\n    "," Make sure the file “id_rsa” has permissions of 600 (only write & read permissions for the owner)","\n    "," ","\n    ","               Note: Also, make sure the home directory of the user doesn’t have write permissions for groups & others.","\n    "," ","\n    ","                 ","\n    "," ","\n    ","                Note: We have to manually update the private key in all the source servers","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    ","Generate a private public key set using putty key generator software","\n    ","\n    "," ","\n    ","Store the private key using “Save private key” option.","\n    ","Copy the text from “Public key for pasting into ssh….. “ box and save the content as public key.","\n    ","\n    ","\n    "," ","\n    ","Log into your unix box using RSA token. Check if .ssh directory is already created , if it is not there create the directory using","\n    ","Command : mkdir .ssh","\n    ","Change permissions using command","\n    ","Command : chmod 710 .ssh","\n    ","In case the directory is already there just change the permissions.","\n    "," ","\n    ","Now go inside .ssh directory and check for authorized_keys file. If the file is there open it in vi mode and paste the content of public key inside it , change its permissions to 750.","\n    ","If not then create authorized_keys file, change its permission and open the file in vi mode and add the content inside it save it and quit the file.","\n    ","Command : touch authorized_keys","\n    ","Change permissions using command","\n    ","Command : chmod 750 authorized_keys","\n    "," ","\n    ","Once the setup is done every time we log in we need to upload the Private key(.ppk) into putty session as shown below.","\n    ","\n    "," ","\n    ","Note: In order to SSH connection work your home directory(i.e the folder under which .ssh is present) should never have 777 permissions.","\n    "," ","\n    "," ","\n  ","\n\n"]],"2":[["\n      ‎"],[" "],["       ","What is Unix Agent? "],["    ","How to create Unix Agent?"],["              ","How to map Unix Agent?"],["        ","Create Public and Private Key of UNIX"],["       ","How to Create PrivateKey for RSA Bypass?"]],"3":[["    ","Connecting UNIX from Windows without RSA/password"],["                  "],["                  "],["               "],["               "," Copy Public Key from Putty Generator (which is displayed on PuttyGen below – “public key for pasting into OpenSSH ","authorized_keys file:”)"],[" Ex: ssh-rsa ","  ","AAAAB3NzaC1yc2EAAAABJQAAAQEA15X6JXUUq0dLWoU0QImYZGmkcVL41+JD+Dtk88AO/z/h+qRicO1w4GwggZ7XiW/A2tRh9uKF9tDSXFRQKg/sGOmhraEyVhHPAGc/PSjI2f9UAhdhPPPCR48XqXJoFUy2pvIqoO+DMM1TUpdixRq7UC2HEstjMdDuomeyq/MwUhQBh20P1NBarCT25E1jC1PgTkSWdUouYaVi2HQ9gO8O0h0ZZsnu6VzkeoUt0TtsGKGIMsWKym7zTYEKWIKDyLsar7TjASpu7vv63vBEskXV6TWG6gow2rIcJwUtbDRlveX8e3q+0z753IWu0rFM++ip+3H1SSZjp9Ikumpxtddmw== rsa-key-20151222"],[" Login to your Jump server (hopbox) with your ATT UID and RSA token (one time activity)"],[" Verify “.ssh” directory exist or not."],[" If “.ssh” directory does not exist, Create “.ssh” directory"],[" Change “.ssh” Directory permissions by this command ","à"," (chmod 710 .ssh)"],["         ","   "],[" Create authorized_keys file Under “.ssh” directory"],[" Change permission for authorized_keys file by ","à"," (chmod 750 authorized_keys)"],["           ","."],["     "," Open authorized_keys in any editor (e.g. vi)"],["     Paste your public key which was copied earlier.(openSSH format)"],["     Also, make sure the home directory of the user doesn’t have write permissions for groups & others"],["         ","Connecting UNIX server from another Unix server without RSA/password"],[" "]],"id":"97"})