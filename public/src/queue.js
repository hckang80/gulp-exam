function Queue_with_stack() {
    var mainStack = [];
    var subStack = [];

    this.enqueue = function(e) {
        mainStack.push(e);
    }

    this.dequeue = function() {
       while (mainStack.length > 1){
            subStack.push(mainStack.pop());
       }
       var result = mainStack.pop();
        while (subStack.length > 0) {
            mainStack.push(subStack.pop());
        }
        return result;
    }
    this.print = function () {
        console.log(mainStack.toString());
    };
   
}
