const CustomError = require("../extensions/custom-error");

    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        if (value != undefined) {
            this.chain.push(`( ${String(value)} )`);;
        } else {
            this.chain.push('( null )');
        }

        return this;

    },

    removeLink(position) {
        if (typeof position != 'number' ||
        position < 0 || position > this.chain.length ){
            this.chain = [];
            throw new Error();
        }
        this.chain.splice(position-1,1)
        return this;

        /*if (1 < +position || +position > this.chain.length) {
            this.chain = []
            throw new Error()
        }
        this.chain.splice(+position - 1, 1);
        return this;*/
    },

    reverseChain() {
        this.chain.reverse()
        return this;

    },
    finishChain() {
        let final_chain  = this.chain.join('~~')
        this.chain = []
        return final_chain

    }

};

module.exports = chainMaker;
