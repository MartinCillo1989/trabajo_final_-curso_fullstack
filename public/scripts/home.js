const addProductToCart = async (productId)=>{
        const data = await fetch('http://localhost:3000/api/cart',{
        method:'PUT',
        body:JSON.stringify({
            productId:productId
        }),
        headers:{
            "Content-Type": "application/json"
        }
    }).then((res)=>{
        if (res.ok) {
           
            window.location.reload();
        } else {
           
        }
    })
    }

