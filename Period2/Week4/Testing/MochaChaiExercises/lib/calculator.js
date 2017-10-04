
module.exports = { 
    div(n1,n2){
        if(n1 == 0 || n2 == 0){
            throw new Error("Attempt to divide by Zero");
        } 
        return n1/ n2;
    },
    mul(n1,n2){
        return n1*n2;
    },
    add(n1,n2){
        return n1 + n2;
    },
    sub(n1,n2){
        return n1-n2;
    }
}

