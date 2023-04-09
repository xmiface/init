export const randomNumber = (min: number, max: number) => Math.random() * (max - min) + min;

export const randomFloatNumber = (min: number, max: number) => parseInt("" + randomNumber(min, max));
