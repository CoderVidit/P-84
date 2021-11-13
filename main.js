canvas = document.getElementById('KEYBOARDCanvas');

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed)
}
if (keyPressed == '38') {
    up();
    console.log("up");
}
if (keyPressed == '40') {
    down();
    console.log("down");
}
if (keyPressed == '37') {
    left();
    console.log("left");
}
if (keyPressed == '39') {
    right();
    console.log("right");
}
if (keyPressed == '13') {
    enter();
    console.log("enter");
}
if (keyPressed == '16') {
    shift();
    console.log("shift");
}
if (keyPressed == '27') {
    esc();
    console.log("esc");
}
if (keyPressed == '127') {
    Delete();
    console.log("delete");
}
if (keyPressed == '32') {
    space();
    console.log("space");
}
if (keyPressed == '48') {
    0();
    console.log("0");
}
if (keyPressed == '49') {
    1();
    console.log("1");
}
if (keyPressed == '50') {
    2();
    console.log("2");
}
if (keyPressed == '51') {
    3();
    console.log("3");
}
if (keyPressed == '52') {
    4();
    console.log("4");
}
if (keyPressed == '53') {
    5();
    console.log("5");
}
if (keyPressed == '54') {
    6();
    console.log("6");
}
if (keyPressed == '55') {
    7();
    console.log("7");
}
if (keyPressed == '56') {
    8();
    console.log("8");
}
if (keyPressed == '57') {
    9();
    console.log("9");
}
if (keyPressed == '20') {
    capslock();
    console.log("caps lock");
}
if (keyPressed == '65') {
    a();
    console.log("a");
}
if (keyPressed == '66') {
    b();
    console.log("b");
}
if (keyPressed == '67') {
    c();
    console.log("c");
}if (keyPressed == '68') {
    d();
    console.log("d");
}
if (keyPressed == '69') {
    e();
    console.log("e");
}
if (keyPressed == '70') {
    f();
    console.log("f");
}
if (keyPressed == '71') {
    g();
    console.log("g");
}
if (keyPressed == '72') {
    h();
    console.log("h");
}
if (keyPressed == '73') {
    i();
    console.log("i");
}
if (keyPressed == '74') {
    j();
    console.log("j");
}
if (keyPressed == '75') {
    k();
    console.log("k");
}
if (keyPressed == '76') {
    l();
    console.log("l");
}
if (keyPressed == '77') {
    m();
    console.log("m");
}
if (keyPressed == '78') {
    n();
    console.log("n");
}
if (keyPressed == '79') {
    o();
    console.log("o");
}
if (keyPressed == '80') {
    p();
    console.log("p");
}
if (keyPressed == '81') {
    q();
    console.log("q");
}
if (keyPressed == '82') {
    r();
    console.log("r");
}
if (keyPressed == '83') {
    s();
    console.log("s");
}
if (keyPressed == '84') {
    t();
    console.log("t");
}
if (keyPressed == '85') {
    u();
    console.log("u");
}
if (keyPressed == '86') {
    v();
    console.log("v");
}
if (keyPressed == '87') {
    w();
    console.log("w");
}
if (keyPressed == '88') {
    x();
    console.log("x");
}
if (keyPressed == '89') {
    y();
    console.log("y");
}
if (keyPressed == '90') {
    z();
    console.log("z");
}
function Delete(){
img_image="Delete.png"
add()
uploadimg()
document.getElementById("keyname").innerHTML="You Pressed Delete Key"
}
function b(){
    img_image="B.png"
    document.getElementById("keyname").innerHTML="You Pressed B"
    add()
    uploadimg()
    }
    function a(){
        img_image="A.png"
        document.getElementById("keyname").innerHTML="You Pressed A"
        add()
        uploadimg()
        }
        function c(){
            img_image="C.png"
            document.getElementById("keyname").innerHTML="You Pressed C"
            add()
            uploadimg()
            }
            function d(){
                img_image="D.png"
                document.getElementById("keyname").innerHTML="You Pressed D"
                add()
                uploadimg()
                }
                function e(){
                    img_image="E.png"
                    document.getElementById("keyname").innerHTML="You Pressed E"
                    add()
                    uploadimg()
                    }
                    function f(){
                        img_image="F.png"
                        document.getElementById("keyname").innerHTML="You Pressed F"
                        add()
                        uploadimg()
                        }
                        function g(){
                            img_image="G.png"
                            document.getElementById("keyname").innerHTML="You Pressed G"
                            add()
                            uploadimg()
                            }
                            function h(){
                                img_image="H.png"
                                document.getElementById("keyname").innerHTML="You Pressed H"
                                add()
                                uploadimg()
                                }
                                function i(){
                                    img_image="I.png"
                                    document.getElementById("keyname").innerHTML="You Pressed I"
                                    add()
                                    uploadimg()
                                    }
                                    function j(){
                                        img_image="J.png"
                                        document.getElementById("keyname").innerHTML="You Pressed J"
                                        add()
                                        uploadimg()
                                        }
                                        function k(){
                                            img_image="K.png"
                                            document.getElementById("keyname").innerHTML="You Pressed K"
                                            add()
                                            uploadimg()
                                            }
                                            function l(){
                                                img_image="L.png"
                                                document.getElementById("keyname").innerHTML="You Pressed L"
                                                add()
                                                uploadimg()
                                                }
                                                function m(){
                                                    img_image="M.png"
                                                    document.getElementById("keyname").innerHTML="You Pressed M"
                                                    add()
                                                    uploadimg()
                                                    }
                                                    function n(){
                                                        img_image="N.png"
                                                        document.getElementById("keyname").innerHTML="You Pressed N"
                                                        add()
                                                        uploadimg()
                                                        }
                                                        function o(){
                                                            img_image="O.png"
                                                            document.getElementById("keyname").innerHTML="You Pressed O"
                                                            add()
                                                            uploadimg()
                                                            }
                                                            function p(){
                                                                img_image="P.png"
                                                                document.getElementById("keyname").innerHTML="You Pressed P"
                                                                add()
                                                                uploadimg()
                                                                }
                                                                function q(){
                                                                    img_image="Q.png"
                                                                    document.getElementById("keyname").innerHTML="You Pressed Q"
                                                                    add()
                                                                    uploadimg()
                                                                    }
                                                                    function r(){
                                                                        img_image="R.png"
                                                                        document.getElementById("keyname").innerHTML="You Pressed R"
                                                                        add()
                                                                        uploadimg()
                                                                        }
                                                                        function s(){
                                                                            img_image="S.png"
                                                                            document.getElementById("keyname").innerHTML="You Pressed S"
                                                                            add()
                                                                            uploadimg()
                                                                            }
                                                                            function t(){
                                                                                img_image="T.png"
                                                                                document.getElementById("keyname").innerHTML="You Pressed T"
                                                                                add()
                                                                                uploadimg()
                                                                                }
                                                                                function u(){
                                                                                    img_image="U.png"
                                                                                    document.getElementById("keyname").innerHTML="You Pressed U"
                                                                                    add()
                                                                                    uploadimg()
                                                                                    }
                                                                                    function v(){
                                                                                        img_image="V.png"
                                                                                        document.getElementById("keyname").innerHTML="You Pressed V"
                                                                                        add()
                                                                                        uploadimg()
                                                                                        }
                                                                                        function w(){
                                                                                            img_image="W.png"
                                                                                            document.getElementById("keyname").innerHTML="You Pressed W"
                                                                                            add()
                                                                                            uploadimg()
                                                                                            }
                                                                                            function x(){
                                                                                                img_image="X.png"
                                                                                                document.getElementById("keyname").innerHTML="You Pressed X"
                                                                                                add()
                                                                                                uploadimg()
                                                                                                }
                                                                                                function y(){
                                                                                                    img_image="Y.png"
                                                                                                    document.getElementById("keyname").innerHTML="You Pressed Y"
                                                                                                    add()
                                                                                                    uploadimg()
                                                                                                    }
                                                                                                    function z(){
                                                                                                        img_image="Z.png"
                                                                                                        document.getElementById("keyname").innerHTML="You Pressed Z"
                                                                                                        add()
                                                                                                        uploadimg()
                                                                                                    }
                                            
                                        
                                    
                                
                        
                    
                
            
        
    


    