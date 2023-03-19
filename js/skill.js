window.addEventListener("load", () => {
    let n = 0;
    const container = document.getElementsByClassName("container")[0];
    let infoArray = [];
    let nav;

    for (let i = 0; i < container.children.length; i++) {
        if (container.children[i].tagName == "NAV") {
            nav = container.children[i]; //tagName이 nav면 그 값을 nav에 넣고 아니면 infoArray에 넣기
        } else {
            infoArray.push(container.children[i]);
        }
    }

    const navLi = nav.children[0].children; //nav>ul>li (탭버튼들)
    navLi[n].classList.add("on");
    infoArray[n].classList.add("active");

    for (let i = 0; i < navLi.length; i++) {
        navLi[i].index = i;

        navLi[i].addEventListener("click", (e) => {
            e.preventDefault();
            n = e.currentTarget.index; //클릭한 인덱스값 찾기

            //클릭한 버튼 스타일 on
            for (let j = 0; j < navLi.length; j++) {
                if (j == n) {
                    navLi[j].classList.add("on");
                    infoArray[j].classList.add("active");
                } else {
                    navLi[j].classList.remove("on");
                    infoArray[j].classList.remove("active");
                }
            }
        });
    }
});
