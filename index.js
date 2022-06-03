class LFSR {
    flops = [1, 0, 1, 1, 1, 0, 1, 1];
    taps = [1, 2, 3];
    
    outputs = [];

    constructor(){
    }

    clock = ()=>{
        const last = this.flops[this.flops.length - 1];
        let XOR = last;
        for(let i=0; i<this.taps.length; i++){
            const tab = this.taps[i];
            if(i == 0){
                XOR = XOR ^ this.flops[tab];
                continue;
            }
            XOR ^= this.flops[tab];
        }
        this.flops.pop();
        this.flops.splice(0, 0, XOR);
        this.print(XOR);
    }

    print = (xor) => {
        this.outputs.push(this.binaryToDecimal(this.flops.join("")));
    }

    binaryToDecimal = (binary) => {
        return parseInt(binary, 2);
    }
}

const lfsr = new LFSR();
for(let i = 0; i < 10; i++) {
    lfsr.clock();
}

console.table([lfsr.outputs]);
