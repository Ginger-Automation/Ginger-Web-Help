rh._.exports({"0":[[" ","Unix Agent"]],"1":[[" "," Unix Agent"," ","Contents"," ","What is Unix Agent?"," ","How to create Unix Agent?"," ","How to map Unix Agent?"," ","Create Public and Private Key of UNIX"," ","Connecting UNIX from Windows without RSA/password"," ","Connecting UNIX server from another Unix server without RSA/password"," ","How to Create PrivateKey for RSA Bypass?"],[" ","Unix Agent is the driver which are used for execution of Unix based target application."],[" ","Go to the Configurations tab and click on Agents. Click on the + button to add new Agent."," ","           The below wizard is displayed. It gives information about the Agent and its usage."," ","          Click on the Next button to add a new agent."," ","Enter the name, platform as Unix. Click on Add button to associate a Tag if required. Click on the Next button."," ","Enter the mandatory connection details like the Host, user name and password."," ","Click on ‘Test Agent Configuration’ button. Connection successful message is display if connection is a success."," ","Click on the Finish button to add the Agent."],[" ","              In order to use this Agent for the execution, we have to map the Agent to the Business Flows."," ","             When a new solution is created, the default Agent is already mapped to the Business Flow."," ","Mapping agent to the Business Flow"," ","Go to the Business Flows tab and double click on the required Business Flow."," ","Click on the ‘Change Agent Mapping’ button as shown below."," ","The below window will be displayed where only those agents will be displayed whose platform type is same as the target application platform type."," ","Select the desired agent and click on the Map button to map the agent."," ","            The target application of the Activity can be updated by double clicking on the Activity and selecting the application as shown below."," ","             For Unix, it is Mediation."],[" "," Login to Jump Box without RSA"," "," Download Puttygen -> http://tartarus.org/~simon/putty-snapshots/x86/puttygen.exe"," "," Open Puttygen and click on “Generate” Key"," "," Save Private Key with .ppk extension"],[" ","Login Putty with Private Key."," ","Enter Host Name and select connection Type is SSH"," ","     Select Data under Connection Tree and Enter ATT UID on Auto-login username"," ","              Expand SSH and select Auth and Browse you Private Key and Map."," ","              Click on Open Button"],[" ","For ATT projects, we can use their portal to publish the public key to all the servers which are defined under the role."," ","  Updating public key at all the target server","s"," ","            Login to below link and update your Public Key."," "," Url: - ","http://uam.it.att.com/"," ","           Click on SSHKEY Manager Home Page"," ","                 Search your ATT UID and click on Add Row link."," ","                 Enter your ATT UID and paste public key (openSSH format) in SSH_KEY"," "," Note: Once you update public key on above link, It Will take 24 to 48 hour time to get access other servers."," ","             Updating private key in all the source servers"," ","                First, get the openssh format private key from the putty gen. To do so:"," ","                 Open Putty gen"," ","                Load the already generated private key (.ppk) by clicking on the “load” button"," ","After loading the private key, select “Export OpenSSH Key” option from the tab “Conversions”."," ","  Save this Open ssh format private key in a file."," "," Now, use this private key at all the source servers by pasting it under “id_rsa” file under “.ssh” directory for the user."," "," Make sure the file “id_rsa” has permissions of 600 (only write & read permissions for the owner)"," ","               Note: Also, make sure the home directory of the user doesn’t have write permissions for groups & others."," ","                Note: We have to manually update the private key in all the source servers"],[" ","Generate a private public key set using putty key generator software"," ","Store the private key using “Save private key” option."," ","Copy the text from “Public key for pasting into ssh….. “ box and save the content as public key."," ","Log into your unix box using RSA token. Check if .ssh directory is already created , if it is not there create the directory using"," ","Command : mkdir .ssh"," ","Change permissions using command"," ","Command : chmod 710 .ssh"," ","In case the directory is already there just change the permissions."," ","Now go inside .ssh directory and check for authorized_keys file. If the file is there open it in vi mode and paste the content of public key inside it , change its permissions to 750."," ","If not then create authorized_keys file, change its permission and open the file in vi mode and add the content inside it save it and quit the file."," ","Command : touch authorized_keys"," ","Change permissions using command"," ","Command : chmod 750 authorized_keys"," ","Once the setup is done every time we log in we need to upload the Private key(.ppk) into putty session as shown below."," ","Note: In order to SSH connection work your home directory(i.e the folder under which .ssh is present) should never have 777 permissions."]],"2":[[" ","\n      ‎"," ","What is Unix Agent? "],[" ","How to create Unix Agent?"],[" ","How to map Unix Agent?"],[" ","Create Public and Private Key of UNIX"],[" ","How to Create PrivateKey for RSA Bypass?"]],"3":[[" ","Connecting UNIX from Windows without RSA/password"],[" "," Copy Public Key from Putty Generator (which is displayed on PuttyGen below – “public key for pasting into OpenSSH ","authorized_keys file:”)"," "," Ex: ssh-rsa "," ","AAAAB3NzaC1yc2EAAAABJQAAAQEA15X6JXUUq0dLWoU0QImYZGmkcVL41+JD+Dtk88AO/z/h+qRicO1w4GwggZ7XiW/A2tRh9uKF9tDSXFRQKg/sGOmhraEyVhHPAGc/PSjI2f9UAhdhPPPCR48XqXJoFUy2pvIqoO+DMM1TUpdixRq7UC2HEstjMdDuomeyq/MwUhQBh20P1NBarCT25E1jC1PgTkSWdUouYaVi2HQ9gO8O0h0ZZsnu6VzkeoUt0TtsGKGIMsWKym7zTYEKWIKDyLsar7TjASpu7vv63vBEskXV6TWG6gow2rIcJwUtbDRlveX8e3q+0z753IWu0rFM++ip+3H1SSZjp9Ikumpxtddmw== rsa-key-20151222"," "," Login to your Jump server (hopbox) with your ATT UID and RSA token (one time activity)"," "," Verify “.ssh” directory exist or not."," "," If “.ssh” directory does not exist, Create “.ssh” directory"," "," Change “.ssh” Directory permissions by this command ","à"," (chmod 710 .ssh)"," "," Create authorized_keys file Under “.ssh” directory"," "," Change permission for authorized_keys file by ","à"," (chmod 750 authorized_keys)"," ","."," "," Open authorized_keys in any editor (e.g. vi)"," ","     Paste your public key which was copied earlier.(openSSH format)"," ","     Also, make sure the home directory of the user doesn’t have write permissions for groups & others"],[" ","Connecting UNIX server from another Unix server without RSA/password"]],"id":"107"})