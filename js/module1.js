define(['module2'], function(Module2){
    console.log("Module 1 is initialized");
    console.log("Module 2 name is " + Module2.name);
    var Module1 = {
        name : "module1"
};

return Module1;
})
