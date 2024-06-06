const places = [
  {
    id: "1",
    name: "Đền thờ Bác Hồ",
    location: "Xã Lương Tâm, huyện Long Mỹ",
    image: require("../assets/images/location1.jpg"),
    item: [
      {
        id: 1,
        url: "https://travel-museum.s3.ap-southeast-1.amazonaws.com/98f969e9-a152-41b3-bd2a-57bd3d9ed412-2021-05-05jpg.jpg",
      },
      {
        id: 2,
        url: "https://travel-museum.s3.ap-southeast-1.amazonaws.com/c6e95df9-6ccc-46af-a2cf-c0b049636a33-20170405-102655jpg.jpg",
      },
      {
        id: 3,
        url: "https://travel-museum.s3.ap-southeast-1.amazonaws.com/f8d4179e-f3a6-41ad-9288-6ac80d2dd2d1-img-8960jpg.JPG",
      },
    ],
    audio: require("../assets/audio/dtdenthobac.mp3"),
    url: "https://www.youtube.com/watch?v=9AcABEUPBqk",
    details: `Đền thờ Bác Hồ tại ấp III, xã Lương Tâm, huyện Long Mỹ, tỉnh Hậu Giang. Đền được nhân dân lập nên từ năm 1969, khi Chủ tịch Hồ Chí Minh qua đời. Đền rộng gần 2ha, gồm 7 hạng mục công trình. Mặt kiến trúc mang tính dân tộc, trang trọng tôn kính của một công trình tưởng niệm. Hàng năm vào các ngày lễ lớn như: 19/5, 2/9...Nơi đây các cấp chính quyền và đoàn thể đã tổ chức lễ rất trang trọng, thu hút hàng ngàn lượt người đến thăm viếng dâng hoa, dâng hương nhớ Bác.`,
  },
  {
    id: "2",
    name: "Di tích Tầm Vu",
    location: "Xã Thạnh Xuân, huyện Châu Thành A",
    image: require("../assets/images/location2.jpg"),
    item: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/2347011/pexels-photo-2347011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/1624360/pexels-photo-1624360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      },
    ],
    audio: require("../assets/audio/dttamvu.mp3"),
    url: "https://www.youtube.com/watch?v=N-NPbZ2XogM",
    details: `Di tích chiến thắng Tầm Vu thuộc xã Thạnh Xuân, huyện châu Thành A, tỉnh Hậu Giang, cách thành phố Cân Thơ 17km về hướng Tây Nam và cách thành phố Vị Thanh 45km theo quốc lộ 61. Di tích này đã được Bộ Văn hóa-Thông tin ra QĐ số 154/VH-QĐ ngày 25-01-1991 công nhận là di tích lịch sử cấp Quốc gia. Địa điểm chiến thắng Tầm Vu là nơi diễn ra 4 trận đánh quan trọng trong lịch sử Cách mạng địa phương những năm đầu chống thực dân Pháp xâm lược nước ta. Nơi đây có tượng đài chiến thắng cao hơn 10m sừng sững nổi lên giữa những vườn cây ăn trái ngút ngàn, với nhiều loại cây ăn trái nhiệt đới phong phú. Đến đây bạn còn được tìm hiểu về chiến thắng lịch sử Tầm Vu và những phong tục tập quán của người miền Tây Nam Bộ.`,
  },

  {
    id: "3",
    name: "Căn cứ tỉnh ủy Cần Thơ",
    location: "Xã Phương Bình huyện Phụng Hiệp",
    image: require("../assets/images/location4.jpg"),
    audio: require("../assets/audio/dttinhuy.mp3"),
    url: "https://www.youtube.com/watch?v=2kC4ikrznU8",
    details: `Khu Di tích Căn cứ tỉnh ủy Cần Thơ(hay còn gọi là căn cứ Bà Bái) cách thành phố Vị Thanh 24km và cách thành phố Cần Thơ 44km(theo Quốc lộ 61). Du khách có thể đi đến đây bẳng cả đường thủy và đường bộ. Toàn bộ khu này được xây dựng trên khoản đất vườn rộng trên 6ha và được bao bọc bởi chiến hào: kênh xáng Lái Hiếu, kênh Cả Cường, kênh Rạch Cũ và kênh Bà Bái...Trung tâm di tích là hội trường, nơi diễn ra hội nghị đề ra chỉ thị đánh phá kế hoạch bình định của địch. Ngày nay căn cứ Tỉnh ủy được tôn tạo khang trang, là niềm tự hào của Đảng bộ, chính quyền và nhân dân Cần Thơ-Hậu Giang và là điểm du lịch văn hóa, giáo dục truyền thống yêu nước cho thế hệ trẻ hôm nay và mai sau.`,
  },
  {
    id: "4",
    name: "Khu trù mật Vị Thanh-Hỏa Lựu",
    location: "Phường 1 TP. Vị Thanh",
    image: require("../assets/images/location5.jpg"),
    audio: require("../assets/audio/dttrumat.mp3"),
    url: "https://www.youtube.com/watch?v=cK8ZWuP8QAI",
    details: `Di tích lịch sử: Địa điểm Mỹ-Diệm tàn sát đồng bào khi lập trù mật Vị Thanh-Hỏa Lựu. Tọa lạc trên diện tích hơn 4000m2, đường Hồ Xuân Hương, khu vực 1, phường 1, thành phố Vị Thanh, tỉnh Hậu Giang. Khu trù mật là một sản phẩm điển hình của chính sách thực dân kiểu mới, được xây dựng một cách công phu, là công trình thí điểm cho kế hoạch bình định tại miền nam Việt Nam. Khu trù mật Vị Thanh - Hỏa Lựu được Bộ Văn hóa-Thông tin ra QĐ số 2327/QĐ-VH, ngày 02-08-1997 công nhận là di tích lịch sử cấp Quốc gia. Ngày nay, di tích lịch sử này đã trở thành điểm đến cho thế hệ trẻ tìm hiểu về truyền thống đấu tranh cách mạng của ông cha ta.`,
  },
  {
    id: "5",
    name: "Chiến thắng Vàm Cái Sình",
    location: "Phường 7 TP. Vị Thanh",
    image: require("../assets/images/location6.jpg"),
    audio: require("../assets/audio/dtcaisinh.mp3"),
    url: "https://www.youtube.com/watch?v=DnOFNiDeDqM",
    details: `Địa điểm Chiến thắng Vàm Cái Sình ở phường 7, thành phố Vị Thanh, tỉnh Hậu Giang cách thành phố Vị Thanh 3km, cạnh QL61, đã được Bộ Văn hóa, thể thao và Du lịch xếp hạng Di tích lịch sử cấp Quốc gia vào ngày 03-08-2007. Tại nơi này, ngày 20/12/1952, đội thủy lôi(Đại Đội 4053, tiểu đoàn 410) phối hợp cùng lực lượng tỉnh đội Cần Thơ đánh chìm tàu chiến(xác tàu nặng khoảng 3,5 tấn được tìm thấy trục vớt năm 2004) tiêu diệt trên 400 sĩ quan, lính Pháp. Đây là di tích lịch sử văn hóa thứ 9 ở Hậu Giang được xếp hạng di tích Quốc gia. UBND tỉnh đã phê duyệt dự án đầu tư xây dựng công trình tôn tạo và phát huy di tích chiến thắng Vàm Cái Sình trên tổng diện tích 20322m2.`,
  },
  {
    id: "6",
    name: "Chiến thắng 75 lượt tiểu đoàn địch",
    location: "Xã Vĩnh Viễn huyện Long Mỹ",
    image: require("../assets/images/location3.jpg"),
    audio: require("../assets/audio/dtchuongthien.mp3"),
    url: "https://www.youtube.com/watch?v=L5FOWIsby2w",
    details: `Di tích tọa lạc tại ấp 1, xã Vĩnh Viễn, huyện Long Mỹ, tỉnh Hậu Giang, cách thị xã Long Mỹ 15km trên tỉnh lộ 930, ngày 20-07-1994, Bộ Văn hóa-Thông tin đã ra quyết định công nhận là Di tích lịch sử cấp Quốc gia. Đây là nơi diễn ra cao điểm cuộc đụng độ của trung đoàn 1-U Minh thuộc lực lượng cách mạng và 75 lượt Tiều đoàn của quân đội Miền Nam Cộng hòa năm 1973. Thắng lợi này góp phần làm nên thắng lợi ngày 30-04-1975 của cách mạng Việt Nam. Ngày nay, địa điểm Di tích chiến thắng 75 lượt tiểu đoàn địch là nơi giáo dục truyền thống yêu nước, lòng tự hào dân tộc cho thế hệ trẻ, là địa chỉ du lịch về nguồn không thể bỏ qua khi du khách đến Hậu Giang.`,
  },
];

export default places;
