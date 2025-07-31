# Day 13: Bubble Sort – 21 Days DSA Challenge 🧠

## 📌 Problem Statement:
Sort an unsorted array using the **Bubble Sort** algorithm in JavaScript.

## 💡 What is Bubble Sort?
Bubble Sort is a simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. It continues this process until the entire array is sorted.

## 🔁 Logic:
- Compare adjacent elements.
- Swap if the left element is greater than the right.
- Repeat the process for all elements (nested loops).

## 🧠 Time Complexity:
- Worst Case: **O(n²)**
- Best Case (already sorted): **O(n)**
- Space Complexity: **O(1)** (in-place sorting)

## 📦 Input:
```js
[5, 4, 3, 2, 1, 7, 6, 9, 8]

✅ Output:

[1, 2, 3, 4, 5, 6, 7, 8, 9]

🧩 JavaScript Code:

function Sort(array){
  for(let i = array.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      if(array[j] > array[j+1]){
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}

let res = Sort([5,4,3,2,1,7,6,9,8]);
console.log(res);  // Output: [1,2,3,4,5,6,7,8,9]


---

📅 Progress:

This marks Day 13 of my 21 Days DSA Challenge where I’m solving one DSA problem daily to sharpen my problem-solving skills.


---

🚀 Let's connect:

Check out my journey and code on GitHub

#DSA #JavaScript #BubbleSort #CodingChallenge #100DaysOfCode #FrontendDevelopment #DeveloperJourney

