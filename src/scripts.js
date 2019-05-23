function AppViewModel() {

    let self = this;
    //UI observables
    //login
    self.emailLogin = ko.observable();
        self.emailLoginFlag = ko.observable(true);
    self.passwordLogin =  ko.observable();
        self.passwordLoginFlag = ko.observable(true);
    //signup
    self.emailSignup = ko.observable();
        self.emailSignupFlag     = ko.observable(true);
    self.passwordSignup1 =  ko.observable();
        self.passwordSignup1Flag = ko.observable(true);
    self.passwordSignup2 = ko.observable();
        self.passwordSignup2Flag = ko.observable(true);
    self.dob = ko.observable();
        self.dobFlag             = ko.observable(true);
    self.radioSelectedOptionValue = ko.observable()
        self.radioSelectedOptionValueFlag = ko.observable(true);

    this.hasAccount = ko.observable(true)

    //operations

    self.toggleSign = function(){
       this.hasAccount(!this.hasAccount())
    } 

    self.login = function(){
        //TODO
        return true
    }


    self.checkForm = function(){
        console.log(self.radioSelectedOptionValue())
        if (self.emailSignup() == undefined || self.emailSignup().trim() < 1){
            self.emailSignupFlag(false)
        }
        else{
            self.emailSignupFlag(true)
        }
        if (self.passwordSignup1() == undefined || self.passwordSignup1().trim() < 1){ 
            self.passwordSignup1Flag(false)
        }
        else{
            self.passwordSignup1Flag(true)
        }
        if (self.passwordSignup2() != self.passwordSignup1() || self.passwordSignup1() == undefined){
            self.passwordSignup2Flag(false)
        }
        else{
            self.passwordSignup2Flag(true)
        }
        //if (isAcceptableDate(self.dob())) {  } else{ }
        return true
        //needs to return true to let the keypress event bubble up
    }

    self.signup = function(){
        if(self.checkForm()){
        //TODO    
        }        
    }

    self.reset = function(){
        console.log("reset pressed")
    }
    
}


// Activates knockout.js
ko.applyBindings(new AppViewModel());
//ko is defined as a global variable


//self refers to the class
//this refers to the instance of the class