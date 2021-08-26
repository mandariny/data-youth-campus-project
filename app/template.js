module.exports = {
    home:function(){
        return `
        <html>
        <head>
        <meta charset = "utf-8">
        <title> Wearly </title>
        <style>
            .sty1{
                text-align:center;
                font-size:20px;
            }
            .sty2{
                text-align:center;
                font-size:30px;
            }
            .sty3{
                text-align:center;
                color: white; 
                background:#EE5050; 
                font-size:2em; 
                border-radius:0.5em; 
                padding:5px 20px;
                
            }
            .backgroudim{
            background-image:url("./backgroundimg.jpg");
            background-repeat:no-repeat;
            background-size:100%
            }
            .box-solid {
                border-style: solid;
                border-color:#EE5050;
                background-color:white;
                width:50%;
                height:80%;
            }
        </style>
        </head>
        <body>
            <section style="ant-layout">
                <header class="ant-layout-header" style="background-color : transparent;">
                            <a class="logo" href="/Users/whtnd/html">
                                <img src = "./wearly.png" width="7%">
                            </a>
                </header>
                <br>
                <div class="backgroudim"><br>
                <center>
                <main>
                    <div class="box-solid">
                        <div class="ant-spac-item" style="margin-bottom:16px">
                            <div class="sty2" style="display:flex;flex-direction:column">
                            <h1 id="sty2">당신의 스타일을 찾아드립니다!</h1>
                            <h4 id="sty1"> 
                            자신의 퍼스널 컬러와 선호 스타일을 통한 패션 매칭 시스템!
                            </h4>
                            <p style="text-align:center">
                                <img src="fashion.png" width="85%">
                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="sty2" style="margin-bottom:16px">
                        <center>
                            <p>
                            
                            </p>
                            <button
                            type="button" style="background-color:#EE5050; font-size:50px; color:white; padding:5px 20px; font-color:white; width:50%; height:8%;">
                            <a href="/?id=test">
                                시 작 하 기
                            </a>
                            </button>
                        </center>
                    </div>
                </main>
                </center>
                </div>
            </section>
        </body>
    </html>
        `
    },
    test:function(){
        return `
        <html>
        <head>
            <title>Testing</title>
            <link rel="stylesheet" href="style.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
            <style>
                .box-solid {
                border-style: solid;
                border-color:#EE5050;
                background-color:white;
                width:50%;
                height:80%;
                }
                .backgroudim{
                background-image:url('backgroundimg.jpg');
                background-repeat:no-repeat;
                background-size:100%
                }
            </style>
        </head>
        <body>
            <header class="ant-layout-header" style="background-color : transparent;">
                <a class="logo" href="/Users/whtnd/html">
                    <img src = "./wearly.png" width="7%">
                </a>
            </header>
            <div class="backgroudim"><br>
            <main>
            <center>
                <div class="box-solid">
                <h1>선호하는 스타일 및 본인의 퍼스널 컬러를 선택하세요</h1>
                
                <form action="/result" onsubmit="">
            
                    <h2><label for="category">Choose a style:</label>
                    <select name="category" id="category" style="width=100;height:40;">
                        <option value="street" style="font-size:20px">Street</option>
                        <option value="vintage" style="font-size:20px">Vintage</option>
                        <option value="feminine" style="font-size:20px">Feminine</option>
                        <option value="casual" style="font-size:20px">Casual</option>
                        <option value="minimal" style="font-size:20px">Minimal</option>
                        <option value="modern" style="font-size:20px">Modern</option>
                    </select>
                    <br><br>
                    <labe. for="personal_color">Choose a Personal Color:</labe>
                    <select name="personal_color" id="personal_color" style="width=100;height:40;">
                        <option value="spring" style="font-size:20px">Spring Warm</option>
                        <option value="summer" style="font-size:20px">Summer Cool</option>
                        <option value="autumn" style="font-size:20px">Autumn Warm</option>
                        <option value="winter" style="font-size:20px">Winter Cool</option>
                    </select></h2>
                    <br><br>
                    <input type="submit" value="Submit"><br><br>
                </form>
                
                </div>
            </center>
            </main>
            </div>
        </body>
        </html>
        `
    },
    result:function(style, names){
        let root = "";
        let urls = [];
        for(var i=0; i<names.length;i++){
            urls.push(style+"/"+names[i]);
        }

        var tem = `
        
        <html>
            <head>
                <title>Result</title>
                <link rel="stylesheet" href="style.css">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
                <style>
                    .box-solid {
                    border-style: solid;
                    border-color:#EE5050;
                    background-color:white;
                    width:50%;
                    height:80%;
                    }
                    .backgroudim{
                    background-image:url('backgroundimg.jpg');
                    background-repeat:no-repeat;
                    background-size:100%
                    }
                </style>
            </head>
            <body>
                <a href="/">Home</a>
                <a href="/?id=test">Retry</a>
                <section>
                    <h1>Trend/Recommend</h1>
                    <div class="slideshow-container">`

            for(var i=0; i<urls.length;i++){
                tem+=`<div class="mySlides fade">
                <div class="numbertext">${i+1} / ${urls.length}</div>
                <img src="${urls[i]}" style="width:100%">
            </div>`

            }                       
                                                
                 tem +=`<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>
                        
                    </div>
                    <br>
                    
                    <div style="text-align:center">`

            for(var i=0; i<urls.length;i++){
                tem +=`
                    <span class="dot" onclick="currentSlide(${i})"></span>  `
            }

                    tem+=`</div>  
                </section>
                <script src="slide.js"></script>
            </body>
        </html>
        
        `

        return tem
    }
  }
