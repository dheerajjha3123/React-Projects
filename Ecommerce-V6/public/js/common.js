


let allLikeButton = document.querySelectorAll('.like-btn');

async function likeButton(productId,btn){
    // console.log('Liked the product');
    try{
        let response=await axios({
            method:'post',
            url:`/products/${productId}/like`,
            headers:{'X-Requested-With':'XMLHttpRequest'}
        })
    
        // console.log(response);
        let heart=document.getElementById('heart');
        if(heart.classList.contains('fa-regular')){
            console.log('bina heart ke')
            btn.children[0].classList.remove('fa-regular');
            btn.children[0].classList.add('fa-solid')
        }
        else{
            console.log('rang ke')
            btn.children[0].classList.remove('fa-solid');
            btn.children[0].classList.add('fa-regular')
        }

    }
    catch(e){
        window.location.replace('/login');
        console.log(e.message,'error hai window wali line ka')
    }
    

}

for(let btn of allLikeButton){
    btn.addEventListener('click',()=>{
        let productId=btn.getAttribute('product-id');
        likeButton(productId,btn);
    })
}