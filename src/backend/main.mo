import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Submission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let adminMap = Map.singleton(Principal.fromText("2vxsx-fae"), ());
  let submissions = Map.empty<Time.Time, Submission>();

  func isAdmin(who : Principal) : Bool {
    adminMap.containsKey(who);
  };

  public shared ({ caller }) func submitForm(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : Submission = {
      name;
      email;
      message;
      timestamp;
    };
    submissions.add(timestamp, submission);
  };

  public shared ({ caller }) func getAllSubmissions() : async [Submission] {
    if (not isAdmin(caller)) {
      Runtime.trap("Unauthorized");
    };
    submissions.values().toArray();
  };
};
