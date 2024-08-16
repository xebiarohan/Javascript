const task3Element = document.getElementById('task-3');

function func1() {
    alert('Hello there');
}

function func2(name) {
    alert(name);
}

func1();
func2('Rohan');

task3Element.addEventListener('click', func1);


function func3(str1, str2, str3) {
    func2(str1 + str2 + str3);
}
