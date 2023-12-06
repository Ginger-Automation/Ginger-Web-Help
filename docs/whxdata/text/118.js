rh._.exports({"0":[[" ","How to Use BDD (Gherkin) with Ginger"]],"1":[[" ","\n      ‎"],[" ","Gherkin – TextEdtor for.Feature Files"],[" ","Comparison of Gherkin in Ginger to Gherkin in Cucumber  "]],"2":[[" ","What is BDD (Behavior-Driven Development)"],[" ","What is Gherkin Language"],[" ","Seamless integration from BDD Gherkin to Ginger Automation"],[" ","LAYOUT – Gherkin “Compile” to Automation"],[" ","LAYOUT – Gherkin “Optimize” to Automation"],[" ","IMPORT – Gherkin .feature file to BF"],[" ","IMPORT – Gherkin Business Flow creation from.Feature file"],[" ","IMPORT – Gherkin Optimized Activities to Automation Scenarios in Ginger"],[" ","Optimized Activities – Gherkin Business Flow Structure"],[" ","Optimized Activities – Gherkin Creating Scenarios from Optimized Activities"],[" ","Optimized Activities – Gherkin Optimized Activities"],[" ","GHERKIN – Language Details"],[" ","GHERKIN – Language Syntax"],[" ","GHERKIN – Feature Introduction"],[" ","GHERKIN – Language Key Words"],[" ","GHERKIN – Writing Scenarios Best Practices"],[" ",".Feature TextEditor – Layout"],[" ",".Feature TextEditor – Autocomplete Lines with existing automation"],[" ",".Feature TextEditor – Getting your Feature file ready for automation"],[" ","What is Cucumber"],[" ","What Ginger has that Cucumber doesn’t"]],"3":[[" "," How to Use BDD (Gherkin) with Ginger"," ","Contents"," ","What is BDD (Behavior-Driven Development)"," ","What is Gherkin Language"," ","Seamless integration from BDD Gherkin to Ginger Automation"," ","Gherkin – Introduction"," ","LAYOUT – Gherkin “Compile” to Automation"," ","LAYOUT – Gherkin “Optimize” to Automation"," ","IMPORT – Gherkin File to BF"," ","IMPORT – Gherkin .feature file to BF"," ","IMPORT – Gherkin Business Flow creation from .Feature file"," ","IMPORT – Gherkin Optimized Activities to Automation Scenarios in Ginger"," ","OPTIMIZED ACTIVITIES – Gherkin BFs Overview"," ","Optimized Activities – Gherkin Business Flow Structure"," ","Optimized Activities – Gherkin Creating Scenarios from Optimized Activities"," ","Optimized Activities – Gherkin Optimized Activities"," ","GHERKIN – Language in Depth"," ","GHERKIN – Language Details"," ","GHERKIN – Language Syntax"," ","GHERKIN – Feature Introduction"," ","GHERKIN – Language Key Words"," ","GHERKIN – Writing Scenarios Best Practices"," ","Gherkin – TextEdtor for .Feature Files"," ","Feature TextEditor – Layout"," ","Feature TextEditor – Autocomplete Lines with existing automation"," ","Feature TextEditor – Getting your Feature file ready for automation"," ","Comparison of Gherkin in Ginger to Gherkin in Cucumber"," ","What is Cucumber"," ","What Ginger has that Cucumber doesn’t"],[" ","BDD is a set of best practices for writing great tests. One of the key things BDD addresses is an implementation detail in tests. Behavior-Driven Development addresses this problem by showing you how to test, focusing on testing behavior, and not implementation"],[" ","Gherkin is a line-oriented language that uses indentation to define structure. Line endings terminate statements"," ","(called steps) and either spaces or tabs may be used for indentation. (We suggest you use TABS for portability.)"," ","Finally, most lines in Gherkin start with a special keyword: (more details in the section: 5)"," ","Key Words include (Feature, Scenario, Given, And, Then, When, But)"],[" "," The Ginger Automation tool now can allow users to write scenarios and Ginger will seamlessly turn these scenarios into Automation Activities."," ","Gherkin – Introduction"," "," LAYOUT – Gherkin in Ginger"," "," In the Solutions Tab, under documents, selecting a <file>.feature will allow you to write scenarios using Gherkin ","language in Ginger. "],[" ","  Once you have your scenarios wrote out, you can click the “Compile & Optimize” button and Ginger will convert your scenarios into Ginger as                          "," ","        Scenarios."," ","                   The Compile tab is used to do the following:"," ","Clicking “Compile & Optimize” will refresh the Gherkin. feature file into Ginger. Anytime any changes are done in the .feature file, you will need to click the button to allow the changes to be reflected into Ginger."," ","If you select a converted Scenario or Step row, it will highlight in both the .feature file and in the Scenario or Step row. This will allow quick navigation to and from converted scenarios/steps to the actual Gherkin code line."," ","All tags will be shown where you utilized them. Tags will help organize your scenarios for what area these scenarios are for."],[" "," Once you have “Compile & Optimize” on the “Optimized” tab, you can see how many times you have reused the same steps. "," ","                   The Optimize tab is used to do the following:"," ","Clicking “Update Business Flow” will refresh the Gherkin. feature file into Ginger Business Flow. Anytime any changes are done in the .feature file, you will need to click the button to allow the changes to be reflected into Ginger."," ","Users will be allowed to see how Optimized they wrote their scenarios. They can view how many times they reused the same steps. This also allows automation developers to know where to start on their automation. Starting to develop those steps that are utilized the most."," ","          Users will also be able to check the automation status of each step."," ","IMPORT – Gherkin File to BF"," ","The Ginger Automation Tool can import any Gherkin <file>.feature into Ginger and convert them to a Automation Business Flow in Ginger."," ","\n      ‎"],[" ","In the Solutions Tab, under Business Flows "," ","Right-click on Business Flow or on the Folder you want to create the BF in, and in the dropdown select “Import” à “Import Gherkin Feature”. "," ","The File selection window will show, select “…” to browse windows location for your .feature file and click “Open”. "," ","You will be able to review the Gherkin file in the preview before selecting “Import”"," and ","then select “Generate Business Flow”"],[" "," After importing the Gherkin .feature:"],[" ","You will be given a chance to REVIEW the compiled Scenarios and Steps you just imported. "," ","If you are want to proceed to create a Business Flow you can click “Generate Business Flow” ."," ","If you see “Update Business Flow” then the Business Flow already exists, and you can update the existing flow."," ","This will create a business flow INSIDE the folder that you originally right-clicked and selected import."],[" ","          If you are creating your scenarios using Gingers Gherkin TextEditor;"," ","                After you have completed your new .feature:"],[" ","You learned how to compile and view the optimized activities."," ","If your Business Flow does not exist you will see in the optimize tab “Generate Business Flow”. "," ","This will create your Gherkin Business Flow."," ","OPTIMIZED ACTIVITIES – Gherkin BFs Overview"," "," The Ginger Automation Tool can now support Gherkin BDD Business Flow, utilizing the optimization of our Automation and integrating optimized                             activities.‎","\n      ‎"],[" "," In the Solutions Tab with Gherkin Business flow selected, or having your Business Flow in the Automate Tab you can see the BDD Gherkin Optimized                      "," "," Activities."," "," Gherkin Business Flow Structure"," ","The Activities Group “Optimized Activities” is the inactive Activities (scenarios) that utilize the “Optimized Activities” activity group to create your scenarios. "," ","The unchecked “Active” column in activities is intentional, they are used to create scenarios from the optimized activities. You will also notice that each of the inactive activities will belong to the Activity Group “Optimized Activities” "," ","The associated. Feature File is located in the External ID and will give the physical location of the file. "],[" "," In the Solutions Tab with Gherkin Business flow selected, or having your Business Flow in the Automate Tab you can see the BDD Gherkin Optimized                  "," ","                   Activities."],[" ","When you click “Generate Scenarios”. You will see how many scenarios you have generated, you will see the new Activity groups created from the Optimized Activities, you will see the “Active” Generated Activities for your scenarios below your Optimized activities. "],[" "," In the Solutions Tab with Gherkin Business flow selected, or having your Business Flow in the Automate Tab you can see the BDD Gherkin Optimized "," "," Activities, ","After you have generated your scenarios."],[" ","You can see details of the Generated Activity Groups by clicking the manager and seeing the grouped activities. You will find your “Optimized Activities” Activity group in the Shared Repository."," ","GHERKIN – Language in Depth"," ","The Gherkin language is used by many Business and Functional Testers, writing Tests and Automation with the Gherkin Language is easy to read and ","write the language."," ","\n      ‎"],[" ","   If you do not know what Gherkin is, below is a summary."," ","Gherkin"," ","is the"," ","language"," ","that Cucumber understands. It is a Business Readable, Domain Specific"," ","Language"," ","that lets you describe software's behavior without detailing how that behavior is implemented."," ","Gherkin"," ","serves two purposes — documentation and automated tests."," ","                           You can view the in-depth details of the language in the following sections."],[" "," Like Python and YAML, Gherkin is a line-oriented language that uses indentation to define structure. Line endings terminate statements (eg,                        "," ","             steps). Either spaces or tabs may be used for indentation (but spaces are more portable). Most lines start with a keyword."," ","                          Comment lines are allowed anywhere in the file. They begin with zero or more spaces, followed by a hash sign (#) and some amount of text."," ","                          The parser divides the input into features, scenarios, and steps. When you run the feature the trailing portion (after the keyword) of each step is                  "," ","           matched to a Ruby code block called Step Definitions"],[" "," 1: Feature: Some terse yet descriptive text of what is desired"," "," 2: Textual description of the business value of this feature"," "," 3: Business rules that govern the scope of the feature"," "," 4: Any additional information that will make the feature easier to understand"," "," 5: Scenario: Some determinable business situation"," "," 6: Given some precondition"," "," 7: And some other precondition"," "," 8: When some action by the actor"," "," 9: And some other action"," "," 10: And yet another action"," "," 11: Then some testable outcome is achieved"," "," 12: And something else we can check happens too"," "," 13: Scenario: A different situation"," "," First-line starts the feature. Lines 2–4 are unparsed text, which is expected to describe the business value of this feature. Line 6 starts a scenario."," "," Lines 7–13 are the steps for the scenario.etc."],[" ","Every .feature file conventionally consists of a single feature. A line starting with the keyword Feature followed by free indented text starts a feature. A feature usually contains a list of scenarios. You can write whatever you want up until the first scenario, which starts with the word Scenario (or localized equivalent; Gherkin is localized for dozens of languages) on a new line. You can use tagging to group features and scenarios together independent of your file and directory structure."," "," Every scenario consists of a list of steps, which must start with one of the keywords Given, When, Then, But or And. Gherkin Editors treats them "," "," all the same, but you shouldn’t."],[" ","Below are the Gherkin Key Words, if you want more information please click the associated link in the More Info."],[" ","keyword"," ","localized"," ","more info, see"," ","name"," ","‘English’"," ","native"," ","‘English’"," ","encoding"," ","‘UTF-8’"," ","feature"," ","‘Feature’"," ","Feature Introduction"," ","background"," ","‘Background’"," ","Background"," ","scenario"," ","‘Scenario’"," ","Feature Introduction"," ","scenario_outline"," ","‘Scenario Outline’"," ","Scenario outlines"," ","examples"," ","‘Examples’ / ‘Scenarios’"," ","Scenario outlines"," ","given"," ","‘Given’"," ","Given-When-Then"," ","when"," ","‘When’"," ","Given-When-Then"," ","then"," ","‘Then’"," ","Given-When-Then"," ","and"," ","‘And’"," ","Given-When-Then"," ","but"," ","‘But’"," ","Given-When-Then"],[" ","We suggest using indentation with spaces to organize your scenarios in your feature file."],[" ","You can see how we organized our feature files on an application level with folders "],[" ","We also suggest using what has already been developed in the repository. If an activity(Line) has already been developed it will show in the Line helper. While typing the helper box will give you a list of automated steps to choose from."," ","If your step does not exist yet, we STRONGLY recommend using a step line that can be reused. For example, if your step is to enter a value in a text box, use the same line verbiage exactly. Do not reword the line. This will allow us to reuse the same step."],[" ","The integration of Gherkin into Ginger using the Gherkin TextEditor allows users to easily read, write and review ","Gherkin Feature files in Ginger."," ","\n      ‎"],[" ","  The Gherkin TextEditor is fully integrating with Ginger. "," "," TextEditor Layout"," ","You can see how the Gherkin TextEditor fits into Ginger and how it played out."," ","This is the Current Feature file that you are working on."," ","This is the Feature name on the first line, and the description in the following lines BEFORE the “spaceline”"," ","This is the Scenario with the following Keywords that make up the Scenarios Steps"," ","These are Steps that are within the Scenario"," ","These are Tags that you can associate functionality within the Feature"," ","These are the existing automation steps that are already in Ginger Shared Repository having at least one tag associated with the feature or Scenario."],[" ","                If an activity (Line) has already been developed it will show in the Line helper. While typing the helper box will give you a list of automated steps to                     "," ","                 choose from."," ","              Shown Below is the Activity Repository of Activities that will appear in the autocomplete box while you write your scenarios."],[" "," <<Text / Ginger Normal Style>>"],[" "," <<Text / Ginger Normal Style>>"],[" "," <<Text / Ginger Normal Style>>"],[" ","This Comparison is to show the benefits and E2E automation using Ginger for Gherkin Automation rather than Cucumber."," ","\n      ‎"],[" ","               Cucumber is a software tool used by computer programmers for testing other software. It runs automated  acceptance tests written in a behavior-                                       driven development (BDD) style. Central to the Cucumber BDD approach is its plain language parser called Gherkin."],[" "," <<Text / Ginger Normal Style>>"],[" ","<<Text / Ginger Normal Style>>"],[" ","<<Text / Ginger Normal Style>>"]],"4":[[" "," Generate Business Flow instructions from Gherkin File"],[" "," Optimized Activities"],[" "," Gherkin Business Flow Create Scenarios from your Optimized Activities"],[" "," Optimized Activity Groups"],[" ","                A Gherkin source file usually looks like this"],[" ","KeyWord Table with links for additional info if needed."],[" "," File Organization"],[" "," Step Optimization for Reusability"],[" "," <<Document_Label_1 / Ginger Heading3 Style>>"],[" "," <<Document_Label_2 / Ginger Heading3 Style>>"],[" "," <<Document_Label_1 / Ginger Heading3 Style>>"],[" "," <<Document_Label_2 / Ginger Heading3 Style>>"]],"id":"118"})