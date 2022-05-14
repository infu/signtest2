actor {

  private var count:Nat = 0;

  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public shared({caller}) func add(num: Nat) : async Nat {
    count += num;
    return count;
  };
};
