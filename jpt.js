  let c = 0;

const calc = () => {  
  let empty = false;
  let rf = document.querySelector(".result-part");
  let val1 = document.getElementById("fn").value;
  let val2 = document.getElementById("sn").value;
  if (val1 != null && val1 != "" && val2 != "" && val2 != null) {
    let i = Math.floor(Math.random() * 101);
    c = c + 1
    const sp = document.createElement("p");
    const node = document.createTextNode(
      `${c}. Love between ${val1} and ${val2} is ${i}%`
    );

    sp.appendChild(node);
    rf.appendChild(sp);
    rf.appendChild(document.createElement("br"));
    
    rf.scrollTop = rf.scrollHeight;    
    let parentElement = rf;
    let childElement = document.getElementById('result-field');
    if (parentElement && childElement) {
      parentElement.removeChild(childElement); 
    }
    
  } else {
    c = c + 1
    const sp = document.createElement("p");
    const node = document.createTextNode(
      `${c}. Enter both partner's name`
    );
    sp.appendChild(node);
    rf.appendChild(sp);
    rf.appendChild(document.createElement("br"));
    rf.scrollTop = rf.scrollHeight;  
  }
};


