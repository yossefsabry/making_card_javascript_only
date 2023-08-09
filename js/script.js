for (let i = 0; i < 20; i++) {
  let element = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let hr = document.createElement("hr");
  let textH1 = document.createTextNode("product name");
  let textp = document.createTextNode("product price is : $40");
  // create  classname for element
  element.className = "product";
  // element style
    element.style = "width: 100%; text-align:center; "
  // append text inside h3 and p
  h1.appendChild(textH1);
  p.appendChild(textp);

  // append h3 and p in element
  element.appendChild(h1);
  element.appendChild(p);
  element.appendChild(hr);

  //   style for body

  document.body.style =
    "background-color: #acacac;display:grid;place-items:center;";

  // body append
  document.body.appendChild(element);
}