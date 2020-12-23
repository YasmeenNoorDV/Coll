$('document').ready(function(){

  //The start screen.

  document.getElementById('character').style.left = '0px';

  document.onkeydown = move;

  $('#character').hide();
  $('#controls').hide();
  $('#bad').hide();
  $('#good').hide();
  $('#points').hide();
  $('#level').hide();
  $('#rules').hide();
  $('#gameOver').hide();

  var delayTime = 500;
  var charDelay = 100;
  var points = 0;
  var type = "";
  var typeCounter = 0;
  var leftCounter = 0;

  //--Level one code--

  //Level one initialised.

  $('#start').click(function(){

    $('#title').hide();
    $('#start').hide();

    $('#character').show();
    $('#controls').show();
    $('#points').show();
    $('#level').show();
    $('#rules').show();

    document.getElementById('container').style.background = "green";

    setTimeout(function(){

      badLevelOne();

    }, delayTime*6);

  });

  //Level one objects' code:

  //Level one first object.

  function badLevelOne(){

    setTimeout(function(){

      document.getElementById('bad').style.left = '12px';
      document.getElementById('bad').style.top = '-145px';

      $('#bad').show();

      document.getElementById('points').style.top = '-180px';
      document.getElementById('level').style.top = '-170px';
      document.getElementById('rules').style.top = '-160px';

    }, delayTime*2);

    type = "bad";

    drop();

    setTimeout(function(){

      document.getElementById('bad').style.top = '305px';

      if (document.getElementById('character').style.left == '0px'){

          endGame();

      }
        else{

          $('#bad').hide();

          document.getElementById('points').style.top = '-150px';
          document.getElementById('level').style.top = '-140px';
          document.getElementById('rules').style.top = '-130px';

          goodLevelOne();

        }

    }, delayTime*12);

  }

  //Level one second object.

  function goodLevelOne(){

    setTimeout(function(){

      document.getElementById('good').style.left = '312px';
      document.getElementById('good').style.top = '-145px';

      $('#good').show();

      document.getElementById('points').style.top = '-180px';
      document.getElementById('level').style.top = '-170px';
      document.getElementById('rules').style.top = '-160px';

    }, delayTime*2);

    type = "good";

    drop();

    setTimeout(function(){

      document.getElementById('good').style.top = '305px';

      if (document.getElementById('character').style.left == '300px'){

        points += 100;

        document.getElementById('points').innerHTML = '<b>Points:</b> ' + points + '.';

        $('#good').hide();

        document.getElementById('points').style.top = '-150px';
        document.getElementById('level').style.top = '-140px';
        document.getElementById('rules').style.top = '-130px';

        beginLevelOne();

      }
        else{

          endGame();

        }

    }, delayTime*12);

  }

  //Level one continuation.

  function beginLevelOne(){

    if (points == 2500){

      $('#character').hide();
      $('#controls').hide();
      $('#good').hide();
      $('#bad').hide();
      $('#points').hide();
      $('#level').hide();
      $('#rules').hide();
      $('#gameOver').show();

      document.getElementById('container').style.background = "navy";
      document.getElementById('gameOver').innerHTML = "Level Win";

    }
      else{

        if (points == 100){

          delayTime = 400;

        }

        else if (points == 300){

          delayTime = 300;

        }
          else if (points == 700){

            delayTime = 200;

          }
            else if (points == 1500){

              delayTime = 150;

            }

          setTimeout(function(){

          typeCounter = Math.floor(Math.random()*3);

          if (typeCounter == 0){

            type = "bad";

          }
            else if (typeCounter > 0){

              type = "good";

            }

          leftCounter = Math.floor(Math.random()*7);

          if (leftCounter == 0){

            document.getElementById(type).style.left = '10px';

          }
            else if (leftCounter == 1){

              document.getElementById(type).style.left = '60px';

            }
              else if (leftCounter == 2){

                document.getElementById(type).style.left = '110px';

              }
                else if (leftCounter == 3){

                  document.getElementById(type).style.left = '160px';

                }
                  else if (leftCounter == 4){

                    document.getElementById(type).style.left = '210px';

                  }
                    else if (leftCounter == 5){

                      document.getElementById(type).style.left = '260px';

                    }
                      else if (leftCounter == 6){

                        document.getElementById(type).style.left = '310px';

                      }

          document.getElementById(type).style.top = '-145px';

          $('#' + type).show();

          document.getElementById('points').style.top = '-180px';
          document.getElementById('level').style.top = '-170px';
          document.getElementById('rules').style.top = '-160px';

        }, delayTime*2);

        drop();

        setTimeout(function(){

          document.getElementById(type).style.top = '305px';

          if (leftCounter == 0){

            if (document.getElementById('character').style.left == '0px'){

              firstConditions();

            }
              else{

                secondConditions();

              }

          }
            else if (leftCounter == 1){

              if (document.getElementById('character').style.left == '50px'){

                firstConditions();

              }
                else{

                  secondConditions();

                }

            }
              else if (leftCounter == 2){

                if (document.getElementById('character').style.left == '100px'){

                  firstConditions();

                }
                  else{

                    secondConditions();

                  }

              }
                else if (leftCounter == 3){

                  if (document.getElementById('character').style.left == '150px'){

                    firstConditions();

                  }
                    else{

                      secondConditions();

                    }

                }
                  else if (leftCounter == 4){

                    if (document.getElementById('character').style.left == '200px'){

                      firstConditions();

                    }
                      else{

                        secondConditions();

                      }

                  }
                    else if (leftCounter == 5){

                      if (document.getElementById('character').style.left == '250px'){

                        firstConditions();

                      }
                        else{

                          secondConditions();

                        }

                    }
                      else if (leftCounter == 6){

                        if (document.getElementById('character').style.left == '300px'){

                          firstConditions();

                        }
                          else{

                            secondConditions();

                          }

                      }

        }, delayTime*12);

      }

  }

  //Extra code for level 1:

  //The objects' drop.

  function drop(){

    setTimeout(function(){

      document.getElementById(type).style.top = '-95px';

    }, delayTime*4);

    setTimeout(function(){

      document.getElementById(type).style.top = '-45px';

    }, delayTime*5);

    setTimeout(function(){

      document.getElementById(type).style.top = '5px';

    }, delayTime*6);

    setTimeout(function(){

      document.getElementById(type).style.top = '55px';

    }, delayTime*7);

    setTimeout(function(){

      document.getElementById(type).style.top = '105px';

    }, delayTime*8);

    setTimeout(function(){

      document.getElementById(type).style.top = '155px';

    }, delayTime*9);

    setTimeout(function(){

      document.getElementById(type).style.top = '205px';

    }, delayTime*10);

    setTimeout(function(){

      document.getElementById(type).style.top = '255px';

    }, delayTime*11);

  }

  //Win/Lose conditions:

  //Win/lose conditions set one.

  function firstConditions(){

    if (type == "bad"){

      endGame();

    }
      else if (type = "good"){

        points += 100;

        document.getElementById('points').innerHTML = '<b>Points:</b> ' + points + '.';

        $('#good').hide();

        document.getElementById('points').style.top = '-150px';
        document.getElementById('level').style.top = '-140px';
        document.getElementById('rules').style.top = '-130px';

        beginLevelOne();

      }

  }

  //Win/lose conditions set two.

  function secondConditions(){

    if (type == "bad"){

      $('#bad').hide();

      document.getElementById('points').style.top = '-150px';
      document.getElementById('level').style.top = '-140px';
      document.getElementById('rules').style.top = '-130px';

      beginLevelOne();

    }
      else if (type = "good"){

        endGame();

      }

  }

  //Game over screen.

  function endGame(){

    $('#character').hide();
    $('#controls').hide();
    $('#good').hide();
    $('#bad').hide();
    $('#points').hide();
    $('#level').hide();
    $('#rules').hide();
    $('#gameOver').show();

    document.getElementById('container').style.background = "red";

    setTimeout(function(){

      document.getElementById('character').style.left = '0px';
      document.getElementById('points').style.top = '-150px';
      document.getElementById('level').style.top = '-140px';
      document.getElementById('rules').style.top = '-130px';

      $('#gameOver').hide();
      $('#title').show();
      $('#start').show();

      document.getElementById('container').style.background = "lightgreen";

      delayTime = 500;
      points = 0;
      type = "";
      typeCounter = 0;
      leftCounter = 0;

    }, 5000);

  }

  //--Movement code--

  //Left movement controlled by mouse/keyboard.

  $('#leftArrow').click(function(){

    left();

  });

  function left(){

    if (document.getElementById('character').style.left == '50px'){

      setTimeout(function(){

        document.getElementById('character').style.left = '0px';

      }, charDelay);

    }
      else if (document.getElementById('character').style.left == '100px'){

        setTimeout(function(){

          document.getElementById('character').style.left = '50px';

        }, charDelay);

      }
        else if (document.getElementById('character').style.left == '150px'){

          setTimeout(function(){

            document.getElementById('character').style.left = '100px';

          }, charDelay);

        }
          else if (document.getElementById('character').style.left == '200px'){

            setTimeout(function(){

              document.getElementById('character').style.left = '150px';

            }, charDelay);

          }
            else if (document.getElementById('character').style.left == '250px'){

              setTimeout(function(){

                document.getElementById('character').style.left = '200px';

              }, charDelay);

            }
              else if (document.getElementById('character').style.left == '300px'){

                setTimeout(function(){

                  document.getElementById('character').style.left = '250px';

                }, charDelay);

              }

  }

  //Right movement controlled by mouse/keyboard.

  $('#rightArrow').click(function(){

    right();

  });

  function right(){

    if (document.getElementById('character').style.left == '0px'){

      setTimeout(function(){

        document.getElementById('character').style.left = '50px';

      }, charDelay);

    }
      else if (document.getElementById('character').style.left == '50px'){

        setTimeout(function(){

          document.getElementById('character').style.left = '100px';

        }, charDelay);

      }
        else if (document.getElementById('character').style.left == '100px'){

          setTimeout(function(){

            document.getElementById('character').style.left = '150px';

          }, charDelay);

        }
          else if (document.getElementById('character').style.left == '150px'){

            setTimeout(function(){

              document.getElementById('character').style.left = '200px';

            }, charDelay);

          }
            else if (document.getElementById('character').style.left == '200px'){

              setTimeout(function(){

                document.getElementById('character').style.left = '250px';

              }, charDelay);

            }
              else if (document.getElementById('character').style.left == '250px'){

                setTimeout(function(){

                  document.getElementById('character').style.left = '300px';

                }, charDelay);

              }

  }

  //Left/Right movement continued.

  function move(){

    var keyID = event.keyCode;

    switch(keyID){

      case 37:

        left();

      break;

      case 39:

        right();

      break;

   }

  }

});
