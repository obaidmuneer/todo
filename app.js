let subs = document.querySelectorAll('input')
        let result = document.querySelectorAll('#percentage ,#grade ,#total')
        function total() {
            let totalObtained = 0
            for (let index = 0; index < subs.length; index++) {
                const sub = +subs[index].value;
                totalObtained += sub
                // console.log(sub);
            }
            // console.log(subs);
            // console.log(totalObtained);
            // console.log(subs.length * 100);
            // console.log((totalObtained * 100) / (subs.length * 100));

            let percentage = (totalObtained * 100) / (subs.length * 100)
            let grade = ''
            if (percentage >= 90 && percentage <= 100) {
                grade = 'A+'
            }else if (percentage >= 80 && percentage < 90) {
                grade = 'A'
            }else if (percentage >=70 && percentage < 80) {
                grade = 'B'
            }else if (percentage >= 60 && percentage < 70) {
                grade = 'C'
            }else{
                grade = 'Better Luck Next Time'
            }
            result[0].innerHTML = 'Percentage : '+  + percentage
            result[1].innerHTML = 'Grade : '+ grade
            result[2].innerHTML = 'Total : ' +totalObtained

        }