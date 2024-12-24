document.addEventListener("DOMContentLoaded", function () {
    const text = `
    Gửi đến người đặc biệt mà tớ trân quý,

    Có lẽ đây là lá thư mà tớ đã muốn viết từ lâu, nhưng mãi chẳng dám bắt đầu. Hôm nay, tớ quyết định đặt hết tâm tư của tớ vào những dòng chữ này, bởi vì nếu không nói ra, tớ sẽ mãi day dứt.

    Từ những lần đầu tiên chúng ta gặp gỡ, tớ đã cảm thấy có điều gì đó rất đặc biệt ở cậu. Là nụ cười khiến cả ngày trở nên ấm áp hơn, là ánh mắt cậu vô tình chạm đến tim tớ, hay chỉ đơn giản là cách cậu quan tâm đến mọi người xung quanh — tất cả làm tớ chẳng thể nào ngừng nghĩ về cậu.

    Mình viết những dòng này không phải để tạo áp lực cho cậu. Mình chỉ muốn nói rằng: "Mình thích cậu." Thích rất nhiều. Và tớ mong cậu cũng sẽ cho tớ cơ hội để tìm hiểu nhau nhiều hơn, để tớ có thể quan tâm và đồng hành cùng cậu qua những chặng đường phía trước.

    Dù câu trả lời của cậu có thế nào đi nữa, tớ vẫn cảm thấy biết ơn vì đã có cơ hội gặp cậu. Cảm ơn cậu đã xuất hiện trong cuộc sống tớ và làm nó đẹp hơn.

    Nếu cậu sẵn lòng, tớ muốn rủ cậu đi dạo (hoặc một buổi cà phê nho nhỏ, hay bất kỳ điều gì cậu thích).

    Chờ câu trả lời từ cậu. ❤️
    You know, I always wanted to travel around the universe, to search for the most brilliant things. But maybe there's no need to do anything anymore.

    Since I met you, nothing else has left an impression on my heart ❤️
    `;

    let i = 0;
    const speed = 1; // Tốc độ hiện từng ký tự
    const messageElement = document.getElementById("message");
    const nextButton = document.querySelector(".message-next");
    const messageContainer = document.querySelector(".message-container");
    const titleContainer = document.querySelector(".title");
    const yesButton = document.querySelector(".choose-left");
    const noButton = document.querySelector(".choose-right");

    yesButton.addEventListener("click", function() {
        // Hiển thị văn bản
        const message = "Ehe tớ yêu cậu nhiều lắm <3";
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        document.body.appendChild(messageElement);

        const gifElement = document.createElement("div");
        gifElement.style.position = "fixed";
        gifElement.style.top = "50%";
        gifElement.style.left = "50%";
        gifElement.style.transform = "translate(-50%, -50%)";
        gifElement.style.zIndex = "1000";
        gifElement.innerHTML = "<img src='./image/background-gif.gif' alt='GIF' />";
        document.body.appendChild(gifElement);
    });

    noButton.addEventListener("click", function() {
        // Di chuyển nút ngẫu nhiên trên màn hình
        let randX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        let randY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
        
        noButton.style.position = 'absolute';
        noButton.style.left = `${randX}px`;
        noButton.style.top = `${randY}px`;
    });


    // Hiệu ứng chạy chữ
    function typeWriter() {
        if (i < text.length) {
            messageElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            nextButton.style.display = "inline-block"; // Hiện nút NEXT sau khi chạy xong
        }
    }

    // Bắt sự kiện bấm nút NEXT
    nextButton.addEventListener("click", () => {
        messageContainer.style.display = "none"; 
        titleContainer.style.display = "block"; 
    });

    // Chạy hiệu ứng
    typeWriter();

    // Xử lý khi nhấn nút "Không"
    
});
