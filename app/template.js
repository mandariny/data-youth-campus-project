module.exports = {
    home:function(){
        return `
        <html>
        <head>
            <meta charset = "utf-8">
            <title> Wearly </title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header class="ant-layout-header">
                <img src = "./wearly.png" class="logo">
            </header>
            <main>
                <div class="box-solid">
                    <div class="ant-spac-item">
                        <div class="title_box">
                            <h1 id="title">
                                당신의 스타일을 찾아드립니다!</h1>
                            <h4 id="title2"> 
                                퍼스널 컬러와 선호 스타일을 통한 패션 매칭 시스템
                            </h4>
                            <p class="illust_box">
                                <img src="fashion.png" class="illust">
                            </p>
                        </div>
                    </div>
                    <button type="button" class="start_btn">
                        <a href="/?id=test">시 작 하 기</a>
                    </button>
                </div>
            </main>
        </body>
        </html>
        `
    },
    test:function(){
        return `
        <html>
        <head>
            <title>Wearly</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header class="ant-layout-header">
                <a href="/">
                    <img src = "./wearly.png" class="logo">
                </a>
            </header>
            <main>
                <div class="box-solid">
                    <h1>선호하는 스타일 및 본인의 퍼스널 컬러를 선택하세요</h1>                    
                    <form action="/result" onsubmit="">               
                        <div class="radio">
                            <h2>Style</h2>
                            <input type="radio" id="street" name="category" value="street" checked>
                            <label for="street">Street</label>
                            <input type="radio" id="vinatage" name="category" value="vintage">
                            <label for="vinatage">Vinatage</label>
                            <input type="radio" id="feminine" name="category" value="feminine">
                            <label for="feminine">Feminine</label>
                            <input type="radio" id="casual" name="category" value="casual">
                            <label for="casual">Casual</label>
                            <input type="radio" id="minimal" name="category" value="minimal">
                            <label for="minimal">Minimal</label>
                            <input type="radio" id="modern" name="category" value="modern">
                            <label for="modern">Modern</label>
                        </div>
                        <div class="radio">
                            <h2>Personal Color</h2>
                            <input type="radio" id="spring" name="personal_color" value="spring" checked>
                            <label for="spring">Spring Warm</label>
                            <input type="radio" id="summer" name="personal_color" value="summer">
                            <label for="summer">Summer Cool</label>
                            <input type="radio" id="autumn" name="personal_color" value="autumn">
                            <label for="autumn">Autumn Warm</label>
                            <input type="radio" id="winter" name="personal_color" value="winter">
                            <label for="winter">Winter Cool</label>
                        </div>
                        <input type="submit" value="결 과 보 기" class="retry"><br><br>
                    </form>             
                </div>
            </main>
        </body>
        </html>
        `
    },
    result:function(style, names, item, final_color, colors){
        let root = "";
        let urls = [];
	console.log(names);
        for(var i=0; i<names.length;i++){
            urls.push("insta5/"+style+"/"+names[i]);
        }

        var tem = `
        
        <html>
            <head>
                <title>Wearly</title>
                <link rel="stylesheet" href="style.css">
                <link rel="stylesheet" href="result_style.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
            </head>
            <body>
                <header class="ant-layout-header">
                    <a href="/">
                        <img src = "./wearly.png" class="logo">
                    </a>
                </header>
                <main>
                    <div class="box-solid">
                        <div class="slideshow-container">`

                            for(var i=0; i<urls.length;i++){
                                tem+=`
                                <div class="mySlides fade">
                                    <div class="numbertext">${i+1} / ${urls.length}</div>
                                    <img src="${urls[i]}">
				    <div class="text">${colors[i]}</div>
                                </div>`

                            }                       
                                                        
                            tem +=`
                                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                                
                        </div>
                        <div style="text-align:center">`

                        for(var i=0; i<urls.length;i++){
                            tem +=`
                                <span class="dot" onclick="currentSlide(${i})"></span>  `
                        }

                        tem+=`
                        </div> 
                        <p class="trend"> 
                           	 
                                추천 아이템 : ${item}
                        </p>
			<p class="trend">
                                추천 컬러 : ${final_color}
                            
                        </p>
                        <button type="button" class="start_btn">
                            <a href="/?id=test">다 시 하 기</a>
                        </button>
                    </div>
                </main>
                <script src="slide.js"></script>
            </body>
        </html>
        
        `

        return tem
    }
  }