const { createApp } = Vue;

createApp({
    data() {
        return {
            display: "0",
            numeroanterior: null,
            numeroatual: null,
            operador: null
        }
    },
    methods: {
        lidarbotao(valor) {
            switch (valor) {
                case '*':
                case '/':
                case '-':
                case '+':
                    this.lidaroperador(valor);
                    break;

                case '.':
                    this.lidardecimal();
                    break;

                case 'C':
                    this.lidarlimpar();
                    break;

                case '=':
                    this.lidarigual();
                    break;

                default:
                    this.lidarnumero(valor);

            }
        },
        lidaroperador(valor) {
            if (this.numeroanterior === null) {
                this.numeroanterior = parseFloat(this.display);
                this.display = "0";
            }
            this.operador = valor;
        },
        lidardecimal() {
            if (!this.display.includes('.')) {
                this.display += '.';
            }
        },
        lidarlimpar() {
            this.display = '0';
            this.numeroatual = null;
            this.numeroanterior = null;
            this.operador = null;
        },
        lidarigual() {
            if (this.operador === null || this.numeroanterior === null) {
                return;
            }
            this.numeroatual = parseFloat(this.display);
            let resultado;
            switch (this.operador) {
                case '+':
                    resultado = this.numeroanterior + this.numeroatual;
                    break;
                case '-':
                    resultado = this.numeroanterior - this.numeroatual;
                    break;
                case '*':
                    resultado = this.numeroanterior * this.numeroatual;
                    break;
                case '/':
                    resultado = this.numeroanterior / this.numeroatual;
                    break;
            }
            this.display = resultado.toString();
            this.numeroanterior = null;
            this.operador = null;
        },
        lidarnumero(valor) {
            if (this.display === '0') {
                this.display = valor;
            } else {
                this.display += valor;
            }
        }
    }
}).mount("#app");
