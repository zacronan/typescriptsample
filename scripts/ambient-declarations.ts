import * as knockout from 'knockout';

module demo_02_04 {
    var name = ko.observable('John Papa');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value: string = guy.fullName();
    console.log(value);
};
