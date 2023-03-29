const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export class BengaliNumber {
    private value: string | number;

    constructor(value: string | number) {
        this.value = value;
    }

    get engValue() {
        return this.value;
    }

    get bngValue() {
        if (typeof this.value === "number") {
            this.value = this.value.toString();
        }
        let result = '';
        for (const character of this.value) {
            if (character >= '0' && character <= '9') {
                result += bengaliNumbers[Number(character)];
            } else {
                result += character;
            }
        }
        return result;
    }
}
