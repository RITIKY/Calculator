let outputScreen = document.getElementById("output-screen");

        function display(num) {
            outputScreen.value += num;
        }

        function Calculator() {
            try {
                outputScreen.value = eval(outputScreen.value);
            } catch(err) {
                alert("Invalid");
            }
        }

        function Clear() {
            outputScreen.value = "";
        }

        function Del() {
            outputScreen.value = outputScreen.value.slice(0, -1);
        }