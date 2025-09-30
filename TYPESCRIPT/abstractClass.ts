//🔹 Theory

// An abstract class is a class that cannot be instantiated directly.

// It serves as a blueprint for other classes.

// Can contain:
// Abstract methods → methods without implementation (must be implemented by subclass)
// Regular methods & properties → can have implementation
// Used for enforcing a structure in subclasses.
// ✅ Declared using the keyword abstract.

//ye method hai
//ye jo payment class bnayi hai ye apne aap me complete nhi hai kyunki isme khi bhi mention nhi hai ki payment kaise hona hai kiski api use hogi kis model ka use kiya jyega kis bank se payment hoga khi bhi ye nhi batya gya
//to we say this class is base class it contain everything which will be needed everytime
class Payment{
  constructor(protected amount: number, protected account: number){}
  isPaymentValid(amount : number){
    return this.amount>0;
  }
}

class Paytm extends Payment{
  
}