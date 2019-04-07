
// var app = new Vue({
//     el: '#app',
//     data: {
//         titleA: 'Vvedi A',
//         titleB: 'Vvedi B',
//         x: 0,
//         a: 0,
//         b: 0,
//     },
//     methods: {
//         calcMethod: function() {
//             this.x = Number(this.a) + Number(this.b);
//         }
//     }
// });


var app = new Vue({
    el: '#app',
    data: {
        previous: null,
        current: '',
        operator: null,
        operatorClicked: false,
    },
    methods: {
        // calcMethod: function() {
        //     this.x = Number(this.a) + Number(this.b);
        // }

        // Clear display (AC)
        clear() {
            this.current = '';
        },
        // change + and - 
        sign() {
            this.current = (this.current)*(-1);
        },
        percent() {
            //pacseFloat = Number(x) - returns number
            this.current = `${parseFloat(this.current) / 100}`
        },
        append(number) {
            // append number
            if (this.operatorClicked) {
                this.current = '';
                this.operatorClicked = false;
            }
            this.current = `${this.current}${number}`;
        },
        comma() {
            if (this.current.indexOf('.') === -1) {
                this.append(',');
            }
        },
        setPrevious() {
            this.previous = this.current;
            this.operatorClicked = true;
        },
        plus() {
            this.operator = (a, b) => a + b;
            this.setPrevious();
        },
        minus() {
            this.operator = (a, b) => a - b;
            this.setPrevious();
        },
        times() {
            this.operator = (a, b) => a * b;
            this.setPrevious();
        },
        devide() {
            this.operator = (a, b) => Number(a) / Number(b);
            this.setPrevious();
        },
        equal() {
            this.current = `${this.operator(
                parseFloat(this.previous),
                parseFloat(this.current)
            )}`;
            this.previous = null;
        }
    }
});