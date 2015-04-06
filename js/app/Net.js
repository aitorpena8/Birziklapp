function Net() {
    this.READY_STATE_UNINITIALIZED = 0;
    this.READY_STATE_LOADING = 1;
    this.READY_STATE_LOADED = 2;
    this.READY_STATE_INTERACTIVE = 3;
    this.READY_STATE_COMPLETE = 4;
    this.method = 'GET';

}
Net.constructor = Net;

Net.prototype = {
    request: function (url, async, func, funcErr) {
        if (window.XMLHttpRequest) {
            this.req = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            this.req = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (this.req) {
            this.onload = func;
            this.onerror = (funcErr) ? funcErr : this.defaultErr;
            try {
                var loader = this;
                this.req.onreadystatechange = function () {
                    loader.onReadyState.call(loader);
                }
                this.req.open(this.method, url, async);
                this.req.send(null);
            } catch (err) {
                this.onerror.call(this);
            }
        }
    },

    onReadyState: function () {
        var req = this.req;
        var ready = req.readyState;
        if (ready == this.READY_STATE_COMPLETE) {
            var httpStatus = req.status;
            if (httpStatus == 200 || httpStatus == 0) {
                this.onload.call(req.responseText);
            } else {
                this.onerror.call(this);
            }
        }
    },

    defaultErr: function () {
        console.log("Error loading data" + "\n\nreadyState:" + this.req.readyState + "\nstatus: " + this.req.status + "\nheaders: " + this.req.getAllResponseHeaders());
    }
}
