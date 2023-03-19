window.addEventListener("load", () => {
    let n = 0;
    const slide = document.getElementsByClassName("slide")[0];
    const btns = document.getElementsByClassName("btns")[0];
    const slideLi = slide.children[0].children; //slide>ul>li (슬라이드들)
    const btnsLi = btns.children; //btns>ul>li (버튼들)
    slideLi[n].classList.add("on");
    btnsLi[n].classList.add("on");

    for (let i = 0; i < btnsLi.length; i++) {
        btnsLi[i].index = i;

        btnsLi[i].addEventListener("click", (e) => {
            e.preventDefault();
            n = e.currentTarget.index; //클릭한 인덱스값 찾기

            //클릭한 버튼 스타일 on & 해당하는 슬라이드 보여주기
            for (let j = 0; j < slideLi.length; j++) {
                if (j == n) {
                    slideLi[j].classList.add("on");
                    btnsLi[j].classList.add("on");
                } else {
                    slideLi[j].classList.remove("on");
                    btnsLi[j].classList.remove("on");
                }
            }
        });
    }
});
