var arr1=['p1.jpeg','p2.jpeg','p3.jpg'];
var arr2=['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, veritatis. Illum praesentium quam voluptas quo cum accusamus dolores mollitia, esse molestias nihil provident eveniet quisquam vitae rerum nesciunt ab totam, molestiae soluta. Repudiandae totam architecto exercitationem. Ad aut officiis possimus similique? Mollitia  labore.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, veritatis. Illum praesentium quam voluptas quo cum accusamus dolores mollitia, esse molestias nihil provident eveniet quisquam vitae rerum nesciunt ab totam, molestiae soluta. Repudiandae totam architecto exercitationem. Ad aut officiis possimus similique? Mollitia  labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, unde.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, veritatis. Illum praesentium quam voluptas quo cum accusamus dolores mollitia, esse molestias nihil provident eveniet quisquam vitae rerum nesciunt ab totam, molestiae soluta. Repudiandae totam architecto exercitationem. Ad aut officiis possimus similique? Mollitia  labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas.'];
var arr3=['User 1','User 2','User 3'];
n=0;
document.querySelector('.btn2').addEventListener('click',()=>{
    n++;
    if(n==arr1.length)
    {
        n=0;
    }
    document.querySelector('.box1').children[0].innerText=arr2[n];
    document.querySelector('.box1').children[1].innerText=arr3[n];
    document.querySelector('.box2').children[0].src=arr1[n];
})
document.querySelector('.btn1').addEventListener('click',()=>{
    n--;
    if(n==-1)
    {
        n=arr1.length-1;
    }
    document.querySelector('.box1').children[0].innerText=arr2[n];
    document.querySelector('.box1').children[1].innerText=arr3[n];
    document.querySelector('.box2').children[0].src=arr1[n];
})