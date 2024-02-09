rh._.exports({"0":[[" ","Solution Passwords Encryption Key"]],"1":[[" ","Creating new Ginger Solution"],[" ","Support for existing Ginger Solution"],[" ","Providing key on Solution Reload\\Reopen "],[" ","To Check Encryption key associated with current solution"],[" ","CLI/JSON Execution"],[" ","Jenkins Plugin Configuration"],[" ","Bamboo Plugin Configuration"],[" ","To Replace/Forgot Encryption key associated with current solution"]],"2":[[" ","Solution Passwords Encryption Key"," ","‘Solution Passwords Encryption Key’: Is a key which will be used to encrypt all password variables which will be used in solution."],[" ","On create new solution, User will be asked for ‘Solution Passwords Encryption Key’ on ‘Add Solution’ window."," ","Key will be 6-14 chars long with at least one capital char, one small char, one digit and one special char."," ","Key will be stored on Windows credential manager along with solution name. so whenever reloading same solution it will be picked automatically"],[" ","When opening an existing Ginger solution which was created on lower version, default key will be assigned to ‘Solution Passwords Encryption Key’"," ","Solution changes will be saved during this update process"," ","User will be required to check in Solution xml file to source control and all the team members will need to provide the same encryption when opening this solution in Ginger"," ","Appropriate error message will be shown when old solution is executed through CLI."],[" ","If solution with encryption key is reloaded\\Reopened, Ginger will fetch the key from Windows Credential Manager."," ","If key is not found on Credential Manager, user will be prompted to provide encryption key again. This is the reason that it is very important to make a note of encryption key."," ","Key will be validated against pre-encrypted string which was encrypted when the key was provided."],[" ","To view/copy Solution passwords encryption key of current solution, open solution details window"," ","On Solution details window, Encryption key will be shown in disabled and hidden format,"," ","There are options to View, Copy and Edit the key."],[" ","CLI Execution: extra ‘—encryptionKey’ parameter is added in CLI configuration."," ","E.g. C:\\Ginger\\Ginger.exe\" run --env Default --encryptionKey \"Test@1234\" --runset \"Default Run Set\" --solution C:\\Solutions\\testM01"," ","JSON Execution: Extra \"EncryptionKey\" is added in JSON execution which will be saved in JSON Configuration file."," ","E.g."],[" ","Jenkins’s Plugin v3.0 or above support Encryption Key."," ","‘Encryption Key’ Property is added in test properties to set the of the solution Encryption key."," ","For existing jobs, the Default Encryption key will be set and used."," ","If Key is updated on Ginger solution, then it needs to be updated on Jenkins jobs as well"],[" ","Bamboo Plugin v2.0 or above support Encryption Key."," ","‘Encryption Key’ Property is added in test properties to set the of the solution Encryption key."," ","For existing jobs, the Default Encryption key will be set and used."," ","If Key is updated on Ginger solution, then it needs to be updated on Jenkins jobs as well"],[" ","On Edit click of ‘Solution Passwords Encryption Key’, ‘Replace/Forget Encryption key’ window will be opened with ‘Replace Encryption Key’ operation and ‘Forgot Encryption Key’ operation."," ","‘Replace Encryption Key’ Operation: This option is for changing the current encryption key with new Encryption key (Like change password). User will be asked to provide the new encryption key. And existing key will be prepopulated."," ","After providing New encryption key and click on ‘Save Key’ all password values of the solution including environment params, DB passwords, variables etc. will be re-encrypted with new key."],[" ","This option is to set the new key for the solution (Like forgot password). But this is very sensitive as it will clear all the encrypted password variables, params and db. password values of the solution. Basically, if you lose the key you lose your encrypted values as well."," ","After providing new key , click on 'Save Key'."," ","After this list of all password variables will be shown where user will have to re-enter the password values again, entering password values will be encrypted with new key as shown in below screenshot."]],"3":[[" ","Replace Encryption key"],[" ","Forgot Encryption Key"]],"id":"89"})