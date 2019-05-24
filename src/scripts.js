//import { SERVFAIL } from "dns";

//CONST
const MINIMUM_AGE = 15 // users must be 15 or older to subscribe
const GENDERS = ["Fluid","Uknown","Human","Cyborg"]
const email_regex = /^.+@\w+\.\w{2,3}$/;

//const 


function AppViewModel() {

    let self = this;
    //UI observables
    //login
    self.emailLogin = ko.observable();
    self.emailLoginFlag = ko.observable(true)

    self.passwordLogin =  ko.observable();
    self.passwordLoginFlag = ko.observable(true)

    //signup
    self.emailSignup = ko.observable();
    self.emailSignupFlag = ko.observable(true);
    self.emailSignupMessage = ko.observable("");
    self.passwordSignup1 =  ko.observable();
    self.passwordSignup1Flag = ko.observable(true);
    self.passwordSignup1Message = ko.observable("")
    self.passwordSignup2 = ko.observable();
    self.passwordSignup2Flag = ko.observable(true);
    self.passwordSignup2Message = ko.observable("")
    self.dob = ko.observable();
    self.dobFlag = ko.observable(true);
    self.dobMessage = ko.observable("")
    self.radioSelectedOptionValue = ko.observable("")
    self.radioSelectedOptionValueFlag = ko.observable(true);
    self.radioSelectedOptionValueMessage = ko.observable("")
    self.hasAccount = ko.observable(true)



    //operations

    self.toggleSign = function(){
       self.hasAccount(!this.hasAccount())
    } 

    self.login = function(){
        var usrPsw = localStorage.getItem(self.emailLogin())
        if (usrPsw == self.passwordLogin()) 
            console.log("User has logged in!")
        else{
            console.log("passwords do not match!")
        }
    }

    self.isAcceptableDate = function(date){
        var minDOB = new Date()
        var yearNow = minDOB.getFullYear()
        var yearMinAge = yearNow - MINIMUM_AGE
        minDOB.setFullYear(yearMinAge)
        var dob = new Date(date);
        if(dob < minDOB){
            return true
        }
        else return false
    }


    self.checkForm = function(){
        if (self.emailSignup() == undefined || self.emailSignup().trim() < 1){
            self.emailSignupFlag(false)
            self.emailSignupMessage("Email is missing!")
        }
        else if(!email_regex.test(self.emailSignup())){
            self.emailSignupFlag(false)
            self.emailSignupMessage("This is not a valid email!")
        }
        else{
            self.emailSignupFlag(true)
            self.emailSignupMessage("")

        }
        if (self.passwordSignup1() == undefined || self.passwordSignup1().trim() < 1){ 
            self.passwordSignup1Flag(false)
            self.passwordSignup1Message("Password is required!")
        }
        else{
            self.passwordSignup1Flag(true)
            self.passwordSignup1Message("")

        }
        if (self.passwordSignup2() != self.passwordSignup1() && self.passwordSignup1() != undefined){
            self.passwordSignup2Flag(false)
            self.passwordSignup2Message("The passwords do not match!")

        }
        else{
            self.passwordSignup2Flag(true)
            self.passwordSignup2Message("")

        }
        if(self.dob() == undefined){
            self.dobFlag(false)
            self.dobMessage("Date of birth is required")
        }
        else if (!self.isAcceptableDate(self.dob())){
            self.dobFlag(false)
            self.dobMessage("You must be "+ MINIMUM_AGE +" years or older to subscribe")

        }
        else{ 
            self.dobFlag(true)
            self.dobMessage("")
        }
        if(self.radioSelectedOptionValue() == ""){
            self.radioSelectedOptionValueFlag(false)
            self.radioSelectedOptionValueMessage("Please select your gender")

        }
        else{
            self.radioSelectedOptionValueFlag(true)
            self.radioSelectedOptionValueMessage("")

        }
    }

    self.signup = function(){
        if(self.noErrors()){
        //TODO: sign the user up on local storage    
            console.log("signing up!")
            localStorage.setItem(self.emailSignup(), self.passwordSignup1());
        }        
    }

    self.reset = function(){
        console.log("reset pressed")
        self.emailLogin("")
        self.emailLoginFlag(true)
    
        self.passwordLogin("");
        self.passwordLoginFlag(true)
    
        //signup
        self.emailSignup("");
        self.emailSignupFlag(true);
        self.emailSignupMessage("");
        self.passwordSignup1("");
        self.passwordSignup1Flag(true);
        self.passwordSignup1Message("")
        self.passwordSignup2("");
        self.passwordSignup2Flag(true);
        self.passwordSignup2Message("")
        self.dob("");
        self.dobFlag(true);
        self.dobMessage("")
        self.radioSelectedOptionValue("")
        self.radioSelectedOptionValueFlag(true);
        self.radioSelectedOptionValueMessage("")
    }


    self.noErrors = ko.pureComputed(function(){
        self.checkForm()
        return this.emailSignupFlag && this.passwordSignup1Flag() && this.passwordSignup2Flag() && this.dobFlag && this.radioSelectedOptionValueFlag
    },self)
    //this last parameter defines the value of this in the function
    
    
}


// Activates knockout.js
ko.applyBindings(new AppViewModel());
//ko is defined as a global variable


//self refers to the class
//this refers to the instance of the class