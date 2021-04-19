const M = {
    v: 'v',
    f: function(){
        console.log(this.v)
    }
};

module.exports = M;
//exports = M <- 이렇게 하지 말것