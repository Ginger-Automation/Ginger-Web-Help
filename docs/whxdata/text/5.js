rh._.exports({"0":[[" ","Evaluate Operators"]],"1":[[" ","Evaluate operator can be used to perform more complex checks on the Output values which are not possible with other simple operators. For example, we can check whether the output value matches a particular regular expression.Operators "," ","As shown in the above image, we can check if the actual value (‘canvas’) matches my regular expression ^(C|c)anvas(es|)$ "," ","This can be achieved by setting the Expected Value as {RegEx Fun=IsMatch Pat=^(C|c)anvas(es|)$ P1={Actual}} At runtime the Expected Value will be evaluated and if it evaluates to true then Status of the output value will be set to Passed otherwise, it will be set to Failed. "]],"2":[[" ","Evaluate Operators"]],"3":[[" ","Evaluate"]],"id":"5"})