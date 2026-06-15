function createbank(ib){
    let b= ib;
    
        function deposit(a){
            b = b+a;
            console.log(b);
        }
        function withdraw(a){
            b = b-a;
            console.log(b);
    }
    return{deposit,withdraw};
}
const acc = createbank(2000);
acc.deposit(500);
acc.withdraw(1000); 
