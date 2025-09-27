//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') != null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'Pizza nấm đùi gà xào tỏi',
            img: './assets/img/products/chay1.png',
            category: 'Pizza chay',
            price: 200000,
            desc: 'Một Món chay ngon miệng với nấm đùi gà thái chân hương, xào săn với lửa và thật nhiều tỏi băm, nêm nếm với mắm và nước tương chay, món ngon đưa cơm và rất dễ ăn cả cho người lớn và trẻ nhỏ.'
        },
        {
            id: 2,
            status: 1,
            title: 'Pizza cà chua bi và ớt chuông',
            img: './assets/img/products/chay2.png',
            category: 'Pizza chay',
            price: 180000,
            desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
        },
        {
            id: 3,
            status: 1,
            title: 'Pizza rau củ phô mai nướng',
            img: './assets/img/products/chay3.png',
            category: 'Pizza chay',
            price: 200000,
            desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
        },
        {
            id: 4,
            status: 1,
            title: 'Pizza Chay Dứa & Ớt Chuông',
            img: './assets/img/products/chay4.png',
            category: 'Pizza chay',
            price: 169900,
            desc: 'Vị ngọt dịu của dứa hòa quyện cùng ớt chuông giòn ngọt, tạo nên hương vị tươi mới và thanh nhẹ.'
        },
        {
            id: 5,
            status: 1,
            title: 'Pizza Chay Bơ & Rau Spinach',
            img: './assets/img/products/chay5.png',
            category: 'Pizza chay',
            price: 280000,
            desc: 'Vị bùi béo của bơ hòa quyện với rau spinach tươi mát, hấp dẫn từ miếng đầu tiên.'
        },

        {
            id: 6,
            status: 1,
            title: 'Pizza Hải Sản Tổng Hợp',
            img: './assets/img/products/haisan1.png',
            category: 'Pizza hải sản',
            price: 250000,
            desc: 'Tôm, mực, ghẹ, sò điệp hòa quyện cùng phô mai béo ngậy, đậm đà hương vị biển.'
        },

        {
            id: 7,
            status: 1,
            title: 'Pizza Tôm Mayo',
            category: 'Pizza hải sản',
            img: './assets/img/products/haisan2.png',
            price: 220000,
            desc: 'Tôm tươi nướng giòn rụm, phủ sốt mayonnaise béo ngậy, thơm ngon khó cưỡng.'
        },

        {
            id: 8,
            status: 1,
            title: 'Pizza Cá Ngừ Địa Trung Hải',
            img: './assets/img/products/haisan4.png',
            category: 'Pizza hải sản',
            price: 240000,
            desc: 'Cá ngừ, cà chua, hành tây, ô liu đen mang đậm phong vị Địa Trung Hải.'
        },

        {
            id: 9,
            status: 1,
            title: 'Pizza Sò Điệp Bơ Tỏi',
            category: "Pizza hải sản",
            img: './assets/img/products/haisan3.png',
            price: 25000,
            desc: 'Sò điệp béo ngậy, kết hợp với sốt bơ tỏi thơm lừng, đậm chất hải sản cao cấp.',
        },
        {
            id: 10,
            status: 1,
            title: 'Pizza Cá Hồi Sốt Kem',
            category: "Pizza hải sản",
            img: './assets/img/products/haisan5.png',
            price: 23000,
            desc: 'Cá hồi tươi ngon, sốt kem béo ngậy, kết hợp với phô mai tan chảy, tạo nên một món pizza hấp dẫn.',
        },
        {
            id: 11,
            status: 1,
            title: 'Pizza Tôm Hùm Mini',
            category: 'Pizza hải sản',
            img: './assets/img/products/haisan6.png',
            price: 320000,
            desc: 'Pizza Tôm Hùm Mini với lớp phô mai béo ngậy, tôm hùm tươi ngon, chắc chắn sẽ làm hài lòng những tín đồ hải sản.'
        },
        {
            id: 12,
            status: 1,
            title: 'Pizza Ghẹ Xanh Phô Mai',
            img: './assets/img/products/haisan7.png',
            category: 'Pizza hải sản',
            price: 270000,
            desc: 'Những miếng ghẹ xanh tươi ngon, kết hợp với phô mai béo ngậy, tạo nên một món pizza hấp dẫn và đầy lôi cuốn.'
        },
        {
            id: 13,
            status: 1,
            title: 'Pizza Mực Nướng Phô Mai',
            img: './assets/img/products/haisan8.png',
            category: 'Pizza hải sản',
            price: 230000,
            desc: 'Mực nướng thơm lừng, kết hợp với phô mai béo ngậy, tạo nên một món pizza hấp dẫn và đầy lôi cuốn.'
        },
        {
            id: 14,
            status: 1,
            title: 'Pizza Hải Sản Phong Cách Nhật',
            img: './assets/img/products/haisan9.png',
            category: 'Pizza hải sản',
            price: 260000,
            desc: 'Hải sản tươi, rong biển, sốt teriyaki Nhật, kết hợp phô mai tan chảy.'
        },
        {
            id: 15,
            status: 1,
            title: 'Pizza trứng cá tuyết',
            img: './assets/img/products/haisan10.png',
            category: 'Pizza hải sản',
            price: 160000,
            desc: 'Hải sản tươi kết hợp sốt cà chua nhà làm, thanh nhẹ, tự nhiên.'
        },
        {
            id: 16,
            status: 1,
            title: 'Trà Chanh Mật Ong (1 ly)',
            img: './assets/img/products/set_bun_ca.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng'
        },
        {
            id: 17,
            status: 1,
            title: 'Xôi trắng hành phi (1 phần)',
            img: './assets/img/products/bun_ca_hanh_phi.jpeg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng'
        },
        {
            id: 18,
            status: 1,
            title: 'Tôm sú lột rang thịt (1 phần)',
            img: './assets/img/products/tom_su_luot_ran_thit.png',
            category: 'Món mặn',
            price: 60000,
            desc: 'Tôm sú tươi rim với thịt. rim kỹ, vừa lửa nên thịt và tôm săn lại, ngấm vị, càng ăn càng thấy ngon.'
        },
        {
            id: 19,
            status: 1,
            title: 'Bánh cookie dừa',
            img: './assets/img/products/banh_cookie_dua.jpeg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Bánh cookie dừa ngọt vừa miệng, dừa bào tươi nhào bánh nướng giòn tan, cắn vào thơm lừng, giòn rụm'
        },
        {
            id: 20,
            status: 1,
            title: 'Cá chiên giòn sốt mắm Thái',
            img: './assets/img/products/sot_mam_thai.jpeg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Bánh cookie dừa ngọt vừa miệng, dừa bào tươi nhào bánh nướng giòn tan, cắn vào thơm lừng, giòn rụm'
        },
        {
            id: 21,
            status: 1,
            title: 'Tôm sú rang muối (1 suất)',
            category: 'Món mặn',
            img: './assets/img/products/tom-su-rang-muoi.jpeg',
            price: 550000,
            desc: 'Từng chú tôm sú được chọn lựa kĩ càng mỗi ngày, đảm bảo là tôm tươi sống, vẫn còn đang bơi khỏe. Tôm rang muối vừa đậm đà lại vẫn giữ được vị ngọt tự nhiên của tôm sú.'
        },
        {
            id: 22,
            status: 1,
            title: 'Tôm sú rang bơ tỏi (1 suất)',
            category: 'Món mặn',
            img: './assets/img/products/tom-su-rang-bo-toi.jpeg',
            price: 550000,
            desc: 'Tôm được chiên vàng giòn bên ngoài, bên trong thịt tôm vẫn mềm, kết hợp cùng sốt bơ tỏi thơm nức . Tôm tươi được Bếp Hoa chiên theo bí quyết riêng nên phần thịt tôm bên trong sẽ có hương vị thơm ngon đặc biệt, sốt bơ tỏi béo ngậy hấp dẫn. Ăn kèm bánh mỳ rất hợp'
        },

        {
            id: 23,
            status: 1,
            title: 'Combo Vịt quay và gỏi vịt',
            category: 'Món mặn',
            img: './assets/img/products/combo-vitquay-va-goivit.jpeg',
            price: 510000,
            desc: 'Combo vịt quay Bếp Hoa + gỏi vịt bắp cải size đại cực kỳ thích hợp cho những bữa ăn cần nhiều rau, nhiều đạm mà vẫn đảm bảo ngon miệng. Vịt quay chuẩn Macao giòn da thấm thịt, thêm phần gỏi vịt chua chua ngọt ngọt, rau tươi giòn ăn chống ngán, cân bằng dinh dưỡng.'
        },

        {
            id: 24,
            status: 1,
            title: 'Set cá cơm tầm',
            img: './assets/img/products/set_ca_tam.jpg',
            category: 'Món mặn',
            price: 950000,
            desc: 'Một 1 set với 3 món ngon mỹ mãn đủ 4 người ăn no, bếp trưởng tự tay chọn từng con cá tầm tươi đủ chất lượng để chế biến đủ 3 món gỏi, nướng, canh chua 10 điểm cho chất lượng.'
        },
        {
            id: 25,
            status: 1,
            title: 'Chả ốc 1 phần',
            img: './assets/img/products/cha_oc_1_phan.jpeg',
            category: 'Món mặn',
            price: 350000,
            desc: 'Chả ốc với ốc giòn tan, băm rối, trộn với thịt, lá lốt, rau thơm, nêm nếm vừa ăn và viên tròn, chiên cho giòn ngoài mềm trong. Ăn chả ốc kẹp với rau sống và chấm mắm chua ngọt cực kỳ đưa vị.'
        },

        {
            id: 26,
            status: 1,
            title: 'Gà ủ muối thảo mộc (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ga-u-muoi-thao-moc.png',
            price: 450000,
            desc: 'Gà ủ muối tuyển chọn từ gà ri tươi, ủ muối chín tới với gia vị thảo mộc tự nhiên, da gà mỏng, thịt chắc ngọt.'
        },

        {
            id: 27,
            status: 1,
            title: 'Gà không lối thoát (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ga-khong-loi-thoat.png',
            price: 520000,
            desc: 'Gà mái ghẹ size 1.4kg sơ chế sạch sẽ, tẩm ướp gia vị đậm đà, bọc vào trong xôi dẻo từ nếp cái hoa vàng, chiên cho giòn mặt ngoài. Khi ăn cắt phần xôi là gà thơm ngon nghi ngút khói, thịt gà ngấm mềm thơm, miếng xôi ngọt tự nhiên từ thịt gà ăn cực kỳ hấp dẫn.'
        },

        {
            id: 28,
            status: 1,
            title: 'Cá chiên giòn mắm Thái (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ca-chien-gion-mam-thai.jpeg',
            price: 350000,
            desc: 'Cá tươi bếp làm sạch, lạng đôi, ướp cho ngấm và chiên vàng giòn. Thịt cá bên trong óng ánh nước, mềm ngọt, bên ngoài giòn tan hấp dẫn. Thêm sốt mắm Thái đầu bếp làm công thức riêng, vị mắm chua ngọt cay the cực kỳ hợp với cá giòn nóng hổi.'
        },

        {
            id: 29,
            status: 1,
            title: 'Chân giò chiên giòn mắm Thái',
            category: 'Món mặn',
            img: './assets/img/products/chan-gio-chien-gion-mam-thai.jpeg',
            price: 420000,
            desc: 'Chân giò lợn đen chọn loại ngon, tỉ lệ nạc mỡ đều đặn, bếp xâm bì cẩn thận và ướp thật ngon, chiên vàng giòn nổi bóng, khi ăn chấm mắm chua ngọt cay cay cực kỳ ngon miệng.'
        },

        {
            id: 30,
            status: 1,
            title: 'Chả cốm (500gr)',
            category: 'Món mặn',
            img: './assets/img/products/cha-com.png',
            price: 175000,
            desc: 'Cốm mộc làng Vòng hạt dẹt dẻo và thơm đặc biệt, thịt lợn tươi phải chọn phần thịt vai xay vừa mềm lại không bở, trộn đều với cốm, nêm với mắm ngon, gia vị đơn giản và quật hỗn hợp thịt xay và cốm đến khi nào thật chắc và dẻo. Viên mỗi bánh chả phải đều tay, hấp sơ qua cho thành hình, khi ăn mới chiên vàng. Chả cốm khi cắn vào phải giòn và lại thật mềm, tứa nước trong miệng. Cốm dẻo dẻo cuộn trong thịt thơm ngon lạ kỳ.'
        },

        {
            id: 31,
            status: 1,
            title: 'Vịt om sấu (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/vit-om-sau.jpeg',
            price: 350000,
            desc: '[Mỗi phần có 1,2kg thịt vịt]. Vịt om sấu với thịt vịt mềm thơm, nấu với trái sấu, sả cây, ớt tươi cho ra phần nước om chua thanh và rất thơm. Dùng vịt om sấu với rau mùi tàu, rau thơm và bún rất ngon.'
        },

        {
            id: 32,
            status: 1,
            title: 'Giò xào (1kg)',
            category: 'Món mặn',
            img: './assets/img/products/gio-xao.jpeg',
            price: 460000,
            desc: 'Giò xào Bếp Hoa đặc biệt được xào khô, ép chặt để tạo độ giòn. Nguyên liệu chính được làm từ tai và lưỡi heo. Khi ăn giò xào, bạn sẽ cảm nhận từng miếng giò vừa giòn vừa thơm lừng mùi tiêu đen và nước mắm.'
        },

        {
            id: 33,
            status: 1,
            title: 'Nem tai (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/nem-tai.jpeg',
            price: 200000,
            desc: 'Nem tai giòn sần sật, trộn với thính gạo rang thơm, ăn kèm lá sung bùi bùi, chấm tương ớt hoặc nước chấm đặc điệt, công thức chỉ riêng Bếp Hoa có.'
        },

        {
            id: 34,
            status: 1,
            title: 'Canh dưa bò hầm (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/canh-dua-bo-ham.jpeg',
            price: 270000,
            desc: 'Canh dưa chua hầm nhừ với thịt nạm bò và gân bò. Thơm - ngon - ngọt - béo - chua dịu thanh thanh'
        },

        {
            id: 35,
            status: 1,
            title: 'Nạc nọng heo nướng kèm xôi trắng (500gr)',
            category: 'Món mặn',
            img: './assets/img/products/nac-nong-heo-nuong-kem-xoi-trang.jpeg',
            price: 300000,
            desc: 'Nọng heo - phần thịt ngon nhất trên thủ heo, với những dải thịt nạc mỡ đan xen, mỗi thủ chỉ có được 1-2kg thịt nọng ngon mềm như vậy. Bếp trưởng Bếp Hoa tẩm ướp thật ngấm gia vị, nướng thẳng trên than hoa thơm nức, xém cạnh đẹp mắt. Miếng thịt nướng xong gắp khỏi vỉ vẫn thấy mỡ thơm còn sôi trên dải thịt, để thịt nghỉ vài phút khi thái ra óng ánh nước, gắp miếng thịt chấm với nước sốt siêu ngon độc quyền của Bếp, ngon đến tứa nước miếng, tranh nhau gắp sạch đĩa'
        },

        {
            id: 36,
            status: 1,
            title: 'Thịt quay (400gr)',
            category: 'Món mặn',
            img: './assets/img/products/thit-quay.jpeg',
            price: 280000,
            desc: 'Thịt lợn quay thơm mùi lá mắc mật. Ngoài bì giòn rụm, thịt bên trong mềm, hương vị đậm đà. Đặc biệt, bếp có loại sốt chấm thịt được pha bằng công thức riêng biệt chỉ Bếp Hoa mới có.Hướng dẫn sử dụng: Sử dụng ngay trong ngày. Bảo quản trong tủ mát.'
        },

        {
            id: 37,
            status: 1,
            title: 'Khâu nhục',
            category: 'Món mặn',
            img: './assets/img/products/khau-nhuc.jpeg',
            price: 280000,
            desc: 'Khâu nhục - món ăn cầu kỳ mang phong vị phương Bắc. Làm từ thịt lợn ta, khâu khục được hấp cách thủy trong 6 tiếng cùng với rất nhiều loại gia vị. Thịt mềm nhừ, ngọt vị, phần bì trong và dẻo quẹo. Mỡ ngậy ngậy tan chảy ngay khi vừa đưa lên miệng. Hướng dẫn bảo quản: Hâm nóng lại bằng nồi hấp cách thủy hoặc lò vi sóng. Bảo quản trong tủ mát từ 3-5 ngày.'
        },
        {
            id: 38,
            status: 1,
            title: 'Xíu mại tôm thịt ( 10 viên)',
            category: 'Món mặn',
            img: './assets/img/products/ha_cao_tom_thit.jpg',
            price: 140000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 39,
            status: 1,
            title: 'Chè hương cốm lá dứa',
            category: 'Món tráng miệng',
            img: './assets/img/products/che-com-la-dua.jpeg',
            price: 60000,
            desc: 'Chè cốm hương lá dứa dẻo thơm, ngọt dịu, từng hạt cốm thoảng thoảng đâu đó hương lá dứa mát lành'
        },

        {
            id: 40,
            status: 1,
            title: 'Bánh bông lan chanh dây',
            category: 'Món tráng miệng',
            img: './assets/img/products/banh-bong-lan-chanh-day.jpeg',
            price: 50000,
            desc: 'Bánh bông lan chanh dây với vị chua nhẹ, không bị ngọt gắt hẳn sẽ là sự lựa chọn hoàn hảo'
        },

        {
            id: 41,
            status: 1,
            title: 'Trà Chanh Mật Ong',
            category: 'Nước uống',
            img: './assets/img/products/drink1.png',
            price: 35000,
            desc: 'Trà xanh thanh mát, kết hợp mật ong và chanh tươi, giải nhiệt tự nhiên.'
        },
        {
            id: 42,
            status: 1,
            title: 'Nước Cam Ép Tươi',
            category: 'Nước uống',
            img: './assets/img/products/drink2.png',
            price: 40000,
            desc: 'Cam tươi vắt nguyên chất, giàu vitamin C, vị ngọt dịu tự nhiên.'
        },
        {
            id: 43,
            status: 1,
            title: 'Sinh Tố Bơ Sữa',
            category: 'Nước uống',
            img: './assets/img/products/drink3.png',
            price: 50000,
            desc: 'Bơ chín dầm cùng sữa đặc và đá xay, béo mịn, thơm ngon.'
        },
        {
            id: 44,
            status: 1,
            title: 'Soda Chanh Dây',
            category: 'Nước uống',
            img: './assets/img/products/drink4.png',
            price: 45000,
            desc: 'Nước soda kết hợp chanh dây tươi, chua ngọt sảng khoái.'
        },
        {
            id: 45,
            status: 1,
            title: 'Trà Đào Cam Sả',
            category: 'Nước uống',
            img: './assets/img/products/drink5.png',
            price: 48000,
            desc: 'Trà đen hương đào, cam tươi và sả thơm, mát lạnh đầy năng lượng.'
        },
        {
            id: 46,
            status: 1,
            title: 'Cà Phê Sữa Đá',
            category: 'Nước uống',
            img: './assets/img/products/drink6.png',
            price: 30000,
            desc: 'Cà phê rang xay đậm đà, pha cùng sữa đặc, hương vị quen thuộc.'
        },
        {
            id: 47,
            status: 1,
            title: 'Nước Dừa Xiêm',
            category: 'Nước uống',
            img: './assets/img/products/drink7.png',
            price: 35000,
            desc: 'Dừa xiêm tươi mát, ngọt thanh, giữ nguyên hương vị tự nhiên.'
        },
        {
            id: 48,
            status: 1,
            title: 'Trà Sữa Trân Châu Đường Đen',
            category: 'Nước uống',
            img: './assets/img/products/drink8.png',
            price: 45000,
            desc: 'Trà sữa béo ngậy kết hợp trân châu dẻo dai, đường đen thơm lừng.'
        },
        {
            id: 49,
            status: 1,
            title: 'Sinh Tố Dâu Tây',
            category: 'Nước uống',
            img: './assets/img/products/drink9.png',
            price: 50000,
            desc: 'Dâu tươi xay cùng sữa chua, vị chua ngọt hài hòa, màu sắc hấp dẫn.'
        },
        {
            id: 50,
            status: 1,
            title: 'Coca Cola',
            category: 'Nước uống',
            img: './assets/img/products/drink10.png',
            price: 25000,
            desc: 'Nước ngọt các loại - lon 330m'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Hoàng Gia Bảo",
            phone: "hgbaodev",
            password: "123456",
            address: 'https://github.com/hgbaodev',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trần Nhật Sinh",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();