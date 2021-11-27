function cal_age_difference(e) {
  let elem1 = document.getElementById("your_age") as HTMLInputElement
  let elem2 = document.getElementById("their_age") as HTMLInputElement
  let resultElement = document.getElementById("result");
  if (!elem1.checkValidity() || !elem2.checkValidity() || elem1.value == "" || elem2.value == "") {
    add_class(resultElement, "hidden")
    console.log("Error")
    return
  }
  console.log(elem1.value)
  console.log(elem2.value)
  let big = elem1.valueAsNumber > elem2.valueAsNumber ? elem1.valueAsNumber : elem2.valueAsNumber
  let small = elem1.valueAsNumber < elem2.valueAsNumber ? elem1.valueAsNumber : elem2.valueAsNumber

  let ruled = (big / 2) + 7

  let resultTitle = document.getElementById("result_title")
  let resultText = document.getElementById("result_text")
  remove_class(resultElement, "hidden")

  if (ruled <= small) {
    remove_class(resultElement, "is-danger")
    add_class(resultElement, "is-success")
    resultTitle.innerText = "Not bad"
    if (big == elem1.valueAsNumber) {
      resultText.innerText = "Looking for someone younger aren't we? Well, it looks like that it is in the margin of error of the simple rule."
    } else {
      resultText.innerText = "You like older people right? Nothing really wrong with this one as it falls in range of the simple rule."
    }
  } else {
    remove_class(resultElement, "is-success")
    add_class(resultElement, "is-danger")
    resultTitle.innerText = "Is questionable"
    resultText.innerText = "You are outside accepted range by the classic rule, tread carefully"
  }
}

function add_class(element: HTMLElement, class_name: string) {
  if (!element.classList.contains(class_name)) {
    element.classList.add(class_name)
  }
}

function remove_class(element: HTMLElement, class_name: string) {
  if (element.classList.contains(class_name)) {
    element.classList.remove(class_name)
  }
}

document.getElementById("your_age").addEventListener("change", cal_age_difference, false);
document.getElementById("their_age").addEventListener("change", cal_age_difference, false);
