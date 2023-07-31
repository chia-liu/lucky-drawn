var names = ['Ann', 'Bob', 'Cath', 'Dora', 'Elna'];
var drawnName = '';
var drawnNames = {};
var password = "yourpassword"; // 替换成您设定的密码

function draw() {
  var nameInput = document.getElementById('name');
  var name = nameInput.value.trim();

  if (name === "") {
    alert("請輸入有效的姓名！");
    return;
  }

  var remainingNames = names.filter(function(item) {
    return item.toLowerCase() !== name.toLowerCase() && !drawnNames.hasOwnProperty(name.toLowerCase());
  });

  if (remainingNames.length === 0) {
    alert("已經抽取完畢！");
    nameInput.disabled = true;
    document.querySelector('button').disabled = true;
    return;
  }

  var randomIndex = Math.floor(Math.random() * remainingNames.length);
  drawnName = remainingNames[randomIndex];
  drawnNames[name.toLowerCase()] = drawnName;

  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<p>小天使：' + name + '<br/>你的小主人是：' + drawnName + '</p>';

  nameInput.value = "";
}

function resetDrawnName() {
  var nameInput = document.getElementById('name');
  nameInput.disabled = false;
  nameInput.value = '';
  document.querySelector('button').disabled = false;

  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  drawnName = '';
  drawnNames = {};
}

function showFullList() {
  var passwordInput = document.getElementById('password');
  var enteredPassword = passwordInput.value.trim();

  if (enteredPassword === password) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    for (var drawer in drawnNames) {
      resultDiv.innerHTML += '<p>抽取者：' + drawer + '，抽中的姓名：' + drawnNames[drawer] + '</p>';
    }

    var drawnNamesElements = document.querySelectorAll('#result p');
    drawnNamesElements.forEach(function(element) {
      element.style.display = "block";
    });

    passwordInput.value = "";
  } else {
    alert("密碼有誤，請重新輸入！");
    passwordInput.value = "";
  }
}
