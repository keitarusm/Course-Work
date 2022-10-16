function StopWatch() {
    let startTime = Date.now();
    let elapsedTime = Date.now() - startTime;
    let running = false;

    this.start = function(){
        if (running)
            throw new Error('Already running');
        
        startTime = Date.now();
        running = true;
    };
    this.stop = function(){
        if (!running)
            throw new Error('Already stopped');

        elapsedTime = Date.now() - startTime;
        running = false;
    };
    this.reset = function(){
        running = false;
    };
    this.duration = function() {
        console.log(elapsedTime/1000);
    };
}

let sw = new StopWatch();