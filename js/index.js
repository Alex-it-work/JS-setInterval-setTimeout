"use strict";

// Напишите функцию printNumbers(from, to, interval), которая последовательно выводит в консоль целые числа, начиная от from и заканчивая to, с интервалом между выводом соседних чисел в interval мс.
// Реализуйте первый или *оба варианта решения:
// - Используя setInterval.
// - *Используя рекурсивный setTimeout (https://learn.javascript.ru/settimeout-setinterval#rekursivnyy-settimeout).

/**
 *
 * @param {number} from
 * @param {number} to
 * @param {number} interval
 */
function printNumbers(from = 0, to = 0, interval = 0) {
  checkArgProperty(from, to, interval);
  let counter = from;
  const timerId = setInterval(() => {
    console.log(`printNumbers ${counter}`);
    if (counter++ === to) {
      clearInterval(timerId);
    }
  }, interval);
}
/**
 *
 * @param {number} from
 * @param {number} to
 * @param {number} interval
 */
function printNumbersRec(from = 0, to = 0, interval = 0) {
  checkArgProperty(from, to, interval);
  let counter = from;
  setTimeout(function go() {
    console.log(`printNumbersRec ${counter}`);
    if (counter++ < to) {
      setTimeout(go, interval);
    }
  }, interval);
}

try {
  printNumbers(0, 10, 1000);
  printNumbersRec(0, 10, 1000);
} catch (error) {
  console.error(error);
}

function checkArgProperty(from, to, interval) {
  if (
    typeof from !== "number" ||
    typeof to !== "number" ||
    typeof interval !== "number"
  ) {
    throw new TypeError("Arguments must be a numbers");
  }
  if (
    !Number.isSafeInteger(from) ||
    !Number.isSafeInteger(to) ||
    !Number.isSafeInteger(interval) ||
  ) {
    throw new RangeError("Arguments must be a safe integer number");
  }
  if (from > to || interval < 0) {
    throw new Error("Arguments must be : from <= to || interval >= 0");
  }
}
