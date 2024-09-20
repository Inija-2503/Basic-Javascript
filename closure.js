// closure

function makeFunc() {
    let name = "Mozi";
    function Name() {
      console.log(name);
    }
    name = "inija"
    return Name;
  }
  
  let a = makeFunc();
  a();