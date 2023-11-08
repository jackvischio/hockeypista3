export class GraficoModel {
    value: number = 0;
    color: string = '';
    size: string = '';
    legend: string = '';

    constructor(
        value: number,
        color: string,
        size: string,
        legend: string
    ) {
        this.value = value;
        this.color = color;
        this.size = size;
        this.legend = legend;
    }
}