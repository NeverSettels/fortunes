$(document).ready(function () {
  $("#fortune-form").submit(function (event) {
    var luckScore = 0;
    var signScore = 0;
    event.preventDefault();
    $("#survey-results").show();
    $('input:checkbox[name=lucky]:checked').each(function () {
      luckScore++
    });
    $('input:checkbox[name=unlucky]:checked').each(function () {
      luckScore--
    });
    var sign = $('input:radio[name=starsign]:checked').val()
    if (sign === "air") {
      signScore = 0
    } else if (sign === "earth") {
      signScore = 3
    } else if (sign === "water") {
      signScore = 6
    } else {
      signScore = 9
    }
    var fortuneArr = ['A smooth long journey! Great expectations.', 'A soft voice may be awfully persuasive.', 'A truly rich life contains love and art in abundance.', 'Accept something that you cannot change, and you will feel better.', 'Adventure can be real happiness.', 'Advice is like kissing. It costs nothing and is a pleasant thing to do. (2)', 'Advice, when most needed, is least heeded.', 'All the effort you are making will ultimately pay off.', 'All the troubles you have will pass away very quickly.', 'All will go well with your new project.', 'All your hard work will soon pay off.', 'Allow compassion to guide your decisions.']
    var randIndex = Math.floor(Math.random() * ((12 + luckScore) - signScore)) + signScore
    console.log("i:", randIndex);

    console.log(fortuneArr[randIndex]);
    luckScore = 0
    signScore = 0
  });
});


//var randNum  =  Math.floor(Math.random() * (max - min )) + min