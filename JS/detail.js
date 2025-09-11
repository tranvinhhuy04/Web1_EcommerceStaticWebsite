document.addEventListener('DOMContentLoaded', function() {
    const dishId = getParameterByName('dishId'); // Sử dụng hàm để lấy tham số từ URL

    // Định nghĩa thông tin món ăn dựa trên dishId
    let dishInfo = {
        '1': {
            type: 'ĐẶC BIỆT',
            title: 'Cơm tấm sà bì chưởng',
            description: 'Cơm tấm sườn bì chả là một món ăn Việt Nam bao gồm cơm trắng, sườn heo nướng, lớp da heo luộc mỏng (bì), và chả heo hoặc đậu hủ chiên. Đi kèm với rau sống và nước mắm pha. Mỗi thành phần mang hương vị đặc trưng và tạo nên một bữa ăn phong phú, ngon miệng và cân đối về dinh dưỡng..',
            price: '60.000 VNĐ',
            image: 'newImage/food_special1.png'
        },
        '2': {
            type: 'ĐẶC BIỆT',
            title: 'Phở bò',
            description: 'Phở bò là một món súp truyền thống của Việt Nam, kết hợp giữa nước dùng thơm phức cùng sợi phở mềm mịn. Món ăn được chế biến từ nước dùng hầm từ xương bò, kèm theo thịt bò thái mỏng và các loại gia vị tự nhiên. Phở bò được phục vụ với rau thơm, hành, giá và chanh tươi, tạo nên hương vị đậm đà và hấp dẫn.',
            price: '50.000 VNĐ',
            image: 'newImage/food_special2.png'
        },
        '3': {
            type: 'BÁN CHẠY',
            title: 'Bánh cuốn',
            description: 'Bánh cuốn là một món ăn truyền thống Việt Nam, gồm lớp bánh mỏng mịn cuốn cùng nhân thịt, tôm hoặc nấm. Thường được ăn với rau sống và nước mắm, bánh cuốn thơm ngon, nhẹ nhàng và rất phổ biến trong ẩm thực Việt.',
            price: '30.000 VNĐ',
            image: 'newImage/banh_cuon_nha_trang_1.jpg'
        },
        '4': {
            type: 'BÁN CHẠY',
            title: 'Bánh mì ốp la',
            description: 'Bánh mì ốp la là một món ăn sáng phổ biến ở Việt Nam. Đây là một loại bánh mì thường có thịt, trứng và rau sống, tạo thành một món ăn hấp dẫn. Bánh mì được cắt ngang, bên trong có thịt, trứng ốp và rau sống như rau xà lách, cà chua. Một số nơi có thể thêm gia vị như sốt cà chua hoặc sốt mỡ hành. Món ăn này thường được phục vụ nóng hổi và có hương vị thơm ngon, đầy đủ chất bổ dưỡng.',
            price: '20.000 VNĐ',
            image: 'newImage/cach-lam-banh-mi-op-la-don-gian-tai-nha-1.jpg'
        },
        '5': {
            type: 'BÁN CHẠY',
            title: 'Cơm thịt kho tàu',
            description: 'Cơm thịt kho tàu là một món ăn Việt phổ biến, thịt heo được kho với nước mắm, đường và kho tàu, tạo hương vị đậm đà. Thịt mềm, thấm gia vị kèm cơm trắng, tạo một bữa ăn ngon, thơm ngon, thường kèm rau sống làm cân bằng.',
            price: '35.000 VNĐ',
            image: 'newImage/thịt kho tàu 600x400.png'
        },
        '6': {
            type: 'BỮA SÁNG',
            title: 'Bánh canh thập cẩm',
            description: 'Bánh canh thập cẩm là một món canh Việt Nam, kết hợp bánh mì dẹt và thập cẩm như thịt, hải sản, rau củ, nấu trong nước dùng đậm đà từ xương. Món ăn ngon, đầy đủ và thường được thưởng thức nóng hổi.',
            price: '40.000 VNĐ',
            image: 'newImage/hủ tiếu.png'
        },
        '7': {
            type: 'BỮA SÁNG',
            title: 'Bò kho - Bánh mì',
            description: ' Bò kho là món thịt bò kho, thường nấu chín mềm trong nước cùng các gia vị như sả, hành, ớt, nước mắm. Thường thì thịt bò kho được thưởng thức kèm bánh mì - một loại bánh mì đặc trưng của Việt Nam, bên ngoài giòn, bên trong mềm và hấp dẫn, tạo nên một sự kết hợp hương vị đầy đủ và thú vị.',
            price: '40.000 VNĐ',
            image: 'newImage/bò kho.png'
        },
        '8': {
            type: 'BỮA SÁNG',
            title: 'Bánh giò',
            description: 'Bánh giò là một loại bánh truyền thống, bên ngoài là lớp vỏ bánh mịn màng, bên trong là phần nhân được làm từ thịt heo, nấm, và gạo nếp. Thường được bọc bằng lá chuối, sau đó hấp chín, tạo ra một hương vị đặc trưng, thường kèm với nước mắm pha chua ngọt.',
            price: '30.000 VNĐ',
            image: 'newImage/bánh giò 600x400.png'
        },
        '9': {
            type: 'BỮA SÁNG',
            title: 'Bánh mì chả cá',
            description: 'Bánh mì chả cá là loại bánh mì với chiếc chả cá chiên giòn, kèm theo rau sống và nước mắm pha.',
            price: '30.000 VNĐ',
            image: 'newImage/bánh mì.png'
        },
        '10': {
            type: 'BỮA SÁNG',
            title: 'Xôi mặn',
            description: 'Xôi mặn thường đi kèm với bánh mì chả cá, là xôi nấu từ gạo, thường có gia vị như muối, hành, mỡ hành, và có thể được kèm theo thịt, trứng hoặc chà bông.',
            price: '30.000 VNĐ',
            image: 'newImage/xôi mặn 600x400.png'
        },
        '11': {
            type: 'BỮA TRƯA',
            title: 'Bún bò Huế',
            description: ' Một món phổ biến ở Huế, gồm bún - sợi bún mịn, thịt bò nấu trong nước dùng cay, thường từ ớt, sả và các loại gia vị. Thường có thêm huyết, chả lụa, rau sống và bánh bèo, tạo nên một tô bún đậm đà, cay nồng, đầy đủ hương vị.',
            price: '45.000 VNĐ',
            image: 'newImage/bún bò huế 600x400.png'
        },
        '12': {
            type: 'BỮA TRƯA',
            title: 'Cơm gà xào sả ớt',
            description: 'Cơm gà xào sả ớt bao gồm cơm trắng kèm gà xào với sả, ớt và các loại gia vị, tạo hương vị thơm nồng. Thường được kèm với rau sống, dưa leo, cà chua, tạo sự cân bằng giữa hương vị cay, ngọt và chua.',
            price: '40.000 VNĐ',
            image: 'newImage/cơm gà xào sả ơt 600x400.png'
        },
        '13': {
            type: 'BỮA TRƯA',
            title: 'Bún thịt nướng, chả giò',
            description: 'Bún thường đi kèm với thịt nướng và chả giò - lớp bọc giòn giòn bên ngoài và nhân thịt heo, tôm, nấm bên trong. Một phần bún được ăn kèm với rau sống, đồ chua và nước mắm pha, tạo ra hương vị phong phú.',
            price: '40.000 VNĐ',
            image: 'newImage/bún thịt nướng 600x400.png'
        },
        '14': {
            type: 'BỮA TRƯA',
            title: 'Mì xào bò',
            description: ' Mì xào bò là một món mì xào với thịt bò, rau củ và gia vị, thường có hương vị đậm đà, được thưởng thức nóng hổi, giòn ngon.',
            price: '35.000 VNĐ',
            image: 'newImage/mì xào thịt bò 600x400.png'
        },
        '15': {
            type: 'BỮA TRƯA',
            title: 'Trái cây thập cẩm',
            description: ' Đây là một phần trái cây gồm nhiều loại như dưa hấu, xoài, cam, dưa lưới, nho, kiwi, tạo ra một phong cách đa dạng và màu sắc, cung cấp hương vị tươi ngon, giúp tăng cường hấp dẫn cho bữa ăn.',
            price: '20.000 VNĐ',
            image: 'newImage/trái cây 600x400.png'
        },
        '16': {
            type: 'BỮA TỐI',
            title: 'Cơm cá kho',
            description: 'Cơm trắng thơm phủ lớp cá kho thơm béo, nước sốt đậm đà, chấm với muối tiêu chanh, tạo hòa quyện hương vị đặc trưng, một món ăn gần gũi, hấp dẫn.',
            price: '40.000 VNĐ',
            image: 'newImage/cơm cá kho 600x400.png'
        },
        '17': {
            type: 'BỮA TỐI',
            title: 'Sườn non xào chua ngọt',
            description: ' Sườn non mềm, sốt chua ngọt cay nồng, kết hợp gia vị đặc trưng, mang lại hương vị cân bằng, món ăn gây ấn tượng với hòa quyện độc đáo.',
            price: '40.000 VNĐ',
            image: 'newImage/sườn non xào 600x400.png'
        },
        '18': {
            type: 'BỮA TỐI',
            title: 'Thịt kho tàu',
            description: ' Thịt heo chín mềm, ngấm đều vị ngọt từ nước mắm, caramel, gia vị, mang hương vị truyền thống đậm đà, kèm cơm trắng hòa quyện hài hòa.',
            price: '40.000 VNĐ',
            image: 'newImage/thịt kho tàu 600x400.png'
        },
        '19': {
            type: 'BỮA TỐI',
            title: 'Mỳ Spaghetti',
            description: ' Sợi mỳ al dente hòa quyện với sốt cà chua thơm phức, thêm phô mai béo ngậy, tạo nên một món ăn Ý tinh tế và hấp dẫn.',
            price: '40.000 VNĐ',
            image: 'newImage/mỳ ý 600x400.png'
        },
        '20': {
            type: 'BỮA TỐI',
            title: 'Xôi xoài',
            description: '  Xôi nếp thơm phủ lớp xoài chín mềm, hòa quyện hương vị đặc trưng, tạo nên một món xôi ngon, ngọt và bổ dưỡng.',
            price: '30.000 VNĐ',
            image: 'newImage/xôi xoài 600x400.png'
        },
        '21': {
            type: 'ĐỒ UỐNG',
            title: 'Yogurt đá xay',
            description: '  Sự hòa quyện giữa sữa chua béo ngậy, trái cây tươi ngon, và đá xay mịn, tạo thành một ly sữa chua mát lạnh, hấp dẫn và bổ dưỡng.',
            price: '30.000 VNĐ',
            image: 'newImage/yogurt 600x400.png'
        },
        '22': {
            type: 'ĐỒ UỐNG',
            title: 'Cam ép',
            description: '  Nước cam tươi sạch, ngọt tự nhiên, tinh tế trong mỗi giọt, mang đến cảm giác tươi mới, sảng khoái.',
            price: '30.000 VNĐ',
            image: 'newImage/nước cam 600x400.png'
        },
        '23': {
            type: 'ĐỒ UỐNG',
            title: 'Coffee',
            description: ' Mùi thơm đặc trưng của cà phê, vị đắng nhẹ hoà quyện với sữa tạo nên một ly cà phê đậm đà, thơm ngon.',
            price: '25.000 VNĐ',
            image: 'newImage/cafe 600x400.png'
        },
        '24': {
            type: 'ĐỒ UỐNG',
            title: 'Sữa tươi Coffee',
            description: '  Sự kết hợp hoàn hảo giữa sữa tươi béo ngậy và cà phê đậm đà, tạo nên một thức uống hấp dẫn, thơm ngon, phù hợp với sở thích riêng.',
            price: '27.000 VNĐ',
            image: 'newImage/cafe sữa tươi 600x400.png'
        },
        '25': {
            type: 'ĐỒ UỐNG',
            title: 'Nước ngọt',
            description: ' Đa dạng hương vị từ trái cây tươi, mát lạnh, tạo cảm giác sảng khoái, lựa chọn tuyệt vời cho mọi dịp.',
            price: '15.000 VNĐ',
            image: 'newImage/nước ngọt 600x400.png'
        },
        '30': {
            type: 'BỮA SÁNG',
            title: 'Bún chả Hà Nội',
            description: '  Món ngon của Hà Nội với chả lụa, thịt nướng, bún, rau sống, và nước mắm pha chua ngọt.',
            price: '55.000 VNĐ',
            image: 'newImage/bún chả 600x400.png'
        },
        '31': {
            type: 'BỮA SÁNG',
            title: 'Bánh canh ghẹ',
            description: ' Bánh canh mềm mịn kèm ghẹ biển, nước dùng thơm và gia vị, tạo nên bữa ăn biển hấp dẫn.',
            price: '65.000 VNĐ',
            image: 'newImage/bánh canh ghẹ 600x400.png'
        },
        '32': {
            type: 'BỮA TRƯA',
            title: 'Cơm cháy kho quẹt',
            description: ' Cơm chiên giòn kèm nước sốt kho quẹt từ thịt heo, tôm, và gia vị, tạo nên bữa ăn đặc trưng.',
            price: '30.000 VNĐ',
            image: 'newImage/cơm cháy kho quẹt 600x400.png'
        },
        '33': {
            type: 'Bữa trưa',
            title: 'Bún đậu mắm tôm',
            description: ' Bún và đậu phộng rang đi kèm mắm tôm, rau sống, xôi, tạo hương vị mặn ngon đặc trưng miền Bắc.',
            price: '55.000 VNĐ',
            image: 'newImage/bún đậu mắm tôm 600x400.png'
        },

  

        // Thêm thông tin cho các dishId khác nếu cần
    };

    // Hiển thị thông tin món ăn dựa trên dishId
    if (dishInfo[dishId]) {
        document.getElementById('dishType').textContent = dishInfo[dishId].type; 
        document.getElementById('dishTitle').textContent = dishInfo[dishId].title;
        document.getElementById('dishDescription').textContent = dishInfo[dishId].description;
        document.getElementById('dishPrice').textContent = dishInfo[dishId].price;
        document.getElementById('dishImage').src = dishInfo[dishId].image;
    }
});

// Hàm để lấy tham số từ URL
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
$(document).ready(function(){
    $('#addtocart').on('click',function(){
      
      var button = $(this);
      var cart = $('#cart');
      var cartTotal = cart.attr('data-totalitems');
      var newCartTotal = parseInt(cartTotal) + 1;
      
      button.addClass('sendtocart');
      setTimeout(function(){
        button.removeClass('sendtocart');
        cart.addClass('shake').attr('data-totalitems', newCartTotal);
        setTimeout(function(){
          cart.removeClass('shake');
        },500)
      },1000)
    })
  })