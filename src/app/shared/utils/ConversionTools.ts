import { formatNumber } from '@angular/common';

const SquareMetersToAcres = (value: number) => {
    return value * 0.00024710538146717;
};

const FormatRoundNumber = (value: number, decimals: number) => {
    const digitsInfo: string = '1.' + decimals.toString() + '-' + decimals.toString();
    return formatNumber(value, 'en-US', digitsInfo);
};

export { SquareMetersToAcres, FormatRoundNumber }