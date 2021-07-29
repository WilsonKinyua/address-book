// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}
// proto type create from a constructor
Contact.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}
// user interface
$(document).ready(function () {
    $("form#new-contact").submit(function (e) {
        e.preventDefault();
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var newContact = new Contact(inputtedFirstName, inputtedLastName);
        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $(".contact").last().click(function(){
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        });
    })
});