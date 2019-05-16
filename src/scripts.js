function AppViewModel() {

    this.emailLogin = ko.observable("");
    this.passwordLogin =  ko.observable("");
    
    
    this.capitalizedLastName = function(){
        var currentVal = this.emailLogin();
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
//ko is defined as a global variable