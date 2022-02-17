const $ = function(selector) {
  const nodeList = document.querySelectorAll(selector);

  const text = function(content) {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerText = content;
      }
  }

  const html = function(content) {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML = content;
      }
  }

  const addClass = function(className) {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].classList.add(className);
      }
  }

  const removeClass = function(className) {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].classList.remove(className);
      }
  }

  const toggleClass = function(className) {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].classList.toggle(className);
      }
  }

  const empty = function() {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML = '';
      }
  }

  const append = function(content) {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML += content;
      }
  }

  const prepend = function(content) {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML = content + nodeList[i].innerHTML;
      }
  }

  const val = function(content) {
      if (content === undefined) {
          return nodeList[0].value;
      } else {
          nodeList[0].value = content;
      }
  }

  const on = function(action, cb) {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].addEventListener(action, cb);
      }
  }

  return {
      text: text,
      html: html,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      empty: empty,
      append: append,
      prepend: prepend,
      on: on,
      val: val
  };
}

function makeBox(object) {
  let employee =
      `<div class='section'>
<p>Employee Name: ${object.name}</p>
<p>Office Number: ${object.officeNumber}</p>
<p>Phone Number: ${object.phoneNumber}</p>
</div>`
  return employee;
}
// assigns IDs
let employeeAdds = document.getElementById('ADD');
let employeeVerifies = document.getElementById('VERIFY');
let employeeUpdates = document.getElementById('UPDATE');
let employeeDeletes = document.getElementById('DELETE');
let employeeNavigates = $("#left-menu");

function employeeRecycle() {
  $("#content").empty();
  for (i = 0; i < employeeList.length; i++) {
      $('#content').append(makeBox(employeeList[i]));
  }
}
// view function
function view() {
  employeeAdds.style.display = 'none';
  employeeVerifies.style.display = 'none';
  employeeUpdates.style.display = 'none';
  employeeDeletes.style.display = 'none';
  employeeRecycle();
  employeeNavigates.removeClass("viewport");

}
// add function
function add() {
  employeeAdds.style.display = 'block';
  employeeVerifies.style.display = 'none';
  employeeUpdates.style.display = 'none';
  employeeDeletes.style.display = 'none';
  employeeRecycle();
  employeeNavigates.removeClass("viewport");
}
// verify function
function verify() {
  employeeAdds.style.display = 'none';
  employeeVerifies.style.display = 'block';
  employeeUpdates.style.display = 'none';
  employeeDeletes.style.display = 'none';
  $("#content").empty();
  // applies Viewport height
  employeeNavigates.addClass("viewport");
}
// vieupdatew function
function update() {
  employeeAdds.style.display = 'none';
  employeeVerifies.style.display = 'none';
  employeeUpdates.style.display = 'block';
  employeeDeletes.style.display = 'none';
  employeeRecycle();
  employeeNavigates.removeClass("viewport");
}
// delete function
function terminate() {
  employeeAdds.style.display = 'none';
  employeeVerifies.style.display = 'none';
  employeeUpdates.style.display = 'none';
  employeeDeletes.style.display = 'block';
  employeeRecycle();
  employeeNavigates.removeClass("viewport");
}
// auto uppercase strings
function autoUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// string grabber
function stringUppercase(inputId) {
  const info = $(inputId).val();
  return autoUppercase(info);
}